const oracledb = require('oracledb');
require('dotenv').config();


// Database configuration setup. Ensure your .env file has the required database credentials.
const dbConfig = {
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASS,
    connectString: `${process.env.ORACLE_HOST}:${process.env.ORACLE_PORT}/${process.env.ORACLE_DBNAME}`,
    poolMin: 1,
    poolMax: 3,
    poolIncrement: 1,
    poolTimeout: 60
};


// initialize connection pool
async function initializeConnectionPool() {
    try {
        oracledb.initOracleClient({ libDir: process.env.ORACLE_DIR });
        await oracledb.createPool(dbConfig);
        console.log('Connection pool started');
    } catch (err) {
        console.error('Initialization error: ' + err.message);
    }
}

async function closePoolAndExit() {
    console.log('\nTerminating');
    try {
        await oracledb.getPool().close(10); // 10 seconds grace period for connections to finish
        console.log('Pool closed');
        process.exit(0);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

initializeConnectionPool();

process
    .once('SIGTERM', closePoolAndExit)
    .once('SIGINT', closePoolAndExit);


// ----------------------------------------------------------
// Wrapper to manage OracleDB actions, simplifying connection handling.
async function withOracleDB(action) {
    let connection;
    try {
        connection = await oracledb.getConnection(); // Gets a connection from the default pool 
        return await action(connection);
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}


// ----------------------------------------------------------
// Core functions for database operations
// Modify these functions, especially the SQL queries, based on your project's requirements and design.
async function testOracleConnection() {
    return await withOracleDB(async (connection) => {
        return true;
    }).catch(() => {
        return false;
    });
}

async function fetchTableFromDb(name) {
    return await withOracleDB(async (connection) => {
        const result = await connection.execute(`SELECT * FROM ${name}`);
        console.log(result.metaData);
        console.log(result.rows);
        return result.rows;
    }).catch(() => {
        return [];
    });
}

async function initiateTable(name) {
    return await withOracleDB(async (connection) => {
        try {
            console.log(`Dropping table ${name}...`);
            await connection.execute(`DROP TABLE ${name}`);
        } catch (err) {
            console.log('Table might not exist, proceeding to create...');
        }

        let table;
        switch (name) {
            case 'Chef':
                table = `
                    CREATE TABLE Chef (
                        chef_name VARCHAR(255),
                        years_of_experience INTEGER,
                        seniority VARCHAR(255),
                        cooking_license VARCHAR(255) NOT NULL,
                        PRIMARY KEY(chef_name)
                    )
                `;
                break;
            case 'Ingredient':
                table =`
                    CREATE TABLE Ingredient (
                        ingredient_name VARCHAR(255),
                        price FLOAT,
                        PRIMARY KEY(ingredient_name)
                    )
                `;
                break;
            case 'RecipeOwns':
                table = `
                    CREATE TABLE RecipeOwns (
                        recipe_ID INTEGER,
                        chef_name VARCHAR(255) NOT NULL,
                        recipe_name VARCHAR(255) NOT NULL,
                        PRIMARY KEY(recipe_ID),
                        FOREIGN KEY(chef_name) REFERENCES Chef
                            ON DELETE SET NULL
                    )
                `;
                break;
            case 'Has':
                table = `
                    CREATE TABLE Has (
                        recipe_ID INTEGER,
                        ingredient_name VARCHAR(255),
                        quantity FLOAT,
                        unit VARCHAR(255),
                        PRIMARY KEY(recipe_ID, ingredient_name),
                        FOREIGN KEY(recipe_ID) REFERENCES RecipeOwns
                            ON DELETE CASCADE,
                        FOREIGN KEY(ingredient_name) REFERENCES Ingredient
                    )
                `;
                break;
            case 'Ingredient':
                table = `
                    CREATE TABLE Equipment (
                        equpiment_name VARCHAR(255),
                        equipment_material VARCHAR(255),
                        PRIMARY KEY(equpiment_name, equipment_material)
                    )
                `;
                break;
            case 'Equipment':
                table = `
                    CREATE TABLE Equipment (
                        equipment_name VARCHAR(255),
                        equipment_material VARCHAR(255),
                        PRIMARY KEY(equipment_name, equipment_material)
                    )
                `;
                break;
            case 'Supplier':
                table = `
                    CREATE TABLE Supplier (
                        supplier_name VARCHAR(255),
                        supplier_address VARCHAR(255),
                        PRIMARY KEY(supplier_name)
                    )
                `;
                break;
            case 'MenuItem':
                table = `
                    CREATE TABLE MenuItem (
                        menu_item_name VARCHAR(255),
                        cuisine VARCHAR(255) NULL,
                        price FLOAT NOT NULL,
                        dietary_restrictions VARCHAR(255) NULL,
                        license_requirement VARCHAR(255) NOT NULL,
                        isGourmet NUMBER(1) NOT NULL,
                        PRIMARY KEY(menu_item_name)
                    );
                `;
                break;
            default:
                return false;
        }

        await connection.execute(table);
        return true;
    }).catch((e) => {
        console.log(e);
        return false;
    });
}

async function selectEquipmentTable(condition, nameString, materialString) {
    return await withOracleDB(async (connection) => {
        nameString = nameString.replace(/\s/g, '');
        materialString = materialString.replace(/\s/g, '');
        let statement = `SELECT * FROM Equipment `;

        const names = nameString.split(',');
        if (names[0] === '') {
            names.pop();
        }

        const materials = materialString.split(',');
        if (materials[0] === '') {
            materials.pop();
        }

        if (names.length || materials.length) {
            statement += "WHERE ";
        }

        for (let i = 0; i < names.length; i++) {
            statement += `equpiment_name=:name${i}`; // note the typo in the column name and reset other tables
            if (i != names.length - 1) {
                statement += ' OR ';
            } 
        }
        if (nameString.length && materialString.length) {
            if (condition === "both") {
                statement += " AND ";
            } else {
                statement += " OR ";
            }
        }

        for (let i = 0; i < materials.length; i++) {
            statement += `equipment_material=:material${i}`;
        }
        console.log(statement);
        const result = await connection.execute(
            statement,
            [...names, ...materials]
        );
        console.log(result);
        return result.rows;
    }).catch(() => {
        return [];
    });
}

async function projectMenuItemTable(...columns) {
    return await withOracleDB(async (connection) => {
        let statement = `SELECT ${columns.join(',')} FROM MenuItem`;
        const result = await connection.execute(statement);
        return result.rows;
    }).catch(() => {
        return [];
    });
}

async function joinRecipeIngTable(ingredient) {
    console.log(ingredient)
    return await withOracleDB(async (connection) => {
        let statement = `SELECT r.chef_name, r.recipe_ID, r.recipe_name, i.ingredient_name, h.quantity, h.unit
                        FROM RecipeOwns r, Has h, Ingredient i 
                        WHERE r.recipe_ID = h.recipe_ID AND h.ingredient_name = i.ingredient_name AND i.ingredient_name = :ing`;
        const result = await connection.execute(
            statement,
            [ingredient],
            { autoCommit: true }
        );
        console.log(result)
        return result.rows;
    }).catch(() => {
        return [];
    });
}



async function insertTable(name, ...attributes) {
    return await withOracleDB(async (connection) => {
        let statement = `INSERT INTO ${name} VALUES (`
        for (let i = 0; i < attributes.length; i++) {
            statement += `:${attributes[i]}`;
            if (i == attributes.length - 1) {
                statement += ')';
            } else {
                statement += ', ';
            }
        }

        const result = await connection.execute(
            statement,
            attributes,
            { autoCommit: true }
        );

        return result.rowsAffected && result.rowsAffected > 0;
    }).catch(() => {
        return false;
    });
}

async function countTable(name) {
    return await withOracleDB(async (connection) => {
        const result = await connection.execute(`SELECT Count(*) FROM ${name}`);
        return result.rows[0][0];
    }).catch(() => {
        return -1;
    });
}

async function updateNameRecipetable(oldName, newName, attribute) {
    console.log(oldName, newName, attribute)
    return await withOracleDB(async (connection) => {
        let statement = `UPDATE RecipeOwns SET ${attribute}=:newName WHERE ${attribute}= :oldName`;
        
        const result = await connection.execute(
            statement,
            [newName, oldName],
            { autoCommit: true }
        );
        return result.rowsAffected && result.rowsAffected > 0;
    }).catch(() => {
        return false;
    });
}

async function deleteIdRecipetable(recipeId) {
    return await withOracleDB(async (connection) => {
        const result = await connection.execute(
            `DELETE FROM RecipeOwns WHERE recipe_ID=:recipeId`,
            [recipeId],
            { autoCommit: true }
        );

        return result.rowsAffected && result.rowsAffected > 0;
    }).catch(() => {
        return false;
    });
}

module.exports = {
    testOracleConnection,
    fetchTableFromDb,
    initiateTable,
    insertTable,
    countTable,
    updateNameRecipetable,
    deleteIdRecipetable,
    selectEquipmentTable,
    projectMenuItemTable,
    joinRecipeIngTable
};