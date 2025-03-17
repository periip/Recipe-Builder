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
        oracledb.initOracleClient({ libDir: process.env.ORACLE_DIR })
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

async function fetchCheftableFromDb() {
    return await withOracleDB(async (connection) => {
        const result = await connection.execute('SELECT * FROM Chef');
        console.log(result.metaData);
        console.log(result.rows);
        return result.rows;
    }).catch(() => {
        return [];
    });
}

async function initiateCheftable() {
    return await withOracleDB(async (connection) => {
        try {
            await connection.execute(`DROP TABLE Chef`);
        } catch (err) {
            console.log('Table might not exist, proceeding to create...');
        }

        const result = await connection.execute(`
            CREATE TABLE Chef (
                chef_name VARCHAR(255),
                years_of_experience INTEGER,
                seniority VARCHAR(255),
                cooking_license VARCHAR(255) NOT NULL,
                PRIMARY KEY(chef_name)
            )
        `);
        return true;
    }).catch(() => {
        return false;
    });
}

async function insertCheftable(chef_name, years_of_experience, seniority, cooking_license) {
    return await withOracleDB(async (connection) => {
        const result = await connection.execute(
            `INSERT INTO Chef VALUES (:chef_name, :years_of_experience, :seniority, :cooking_license)`,
            [chef_name, years_of_experience, seniority, cooking_license],
            { autoCommit: true }
        );

        return result.rowsAffected && result.rowsAffected > 0;
    }).catch(() => {
        return false;
    });
}

async function updateNameDemotable(oldName, newName) {
    return await withOracleDB(async (connection) => {
        const result = await connection.execute(
            `UPDATE DEMOTABLE SET name=:newName where name=:oldName`,
            [newName, oldName],
            { autoCommit: true }
        );

        return result.rowsAffected && result.rowsAffected > 0;
    }).catch(() => {
        return false;
    });
}

async function countCheftable() {
    return await withOracleDB(async (connection) => {
        const result = await connection.execute('SELECT Count(*) FROM Chef');
        return result.rows[0][0];
    }).catch(() => {
        return -1;
    });
}

async function fetchRecipetableFromDb() {
    return await withOracleDB(async (connection) => {
        const result = await connection.execute('SELECT * FROM RecipeOwns');
        console.log(result.metaData);
        console.log(result.rows);
        return result.rows;
    }).catch(() => {
        return [];
    });
}

async function initiateRecipetable() {
    return await withOracleDB(async (connection) => {
        try {
            await connection.execute(`DROP TABLE RecipeOwns`);
        } catch (err) {
            console.log('Table might not exist, proceeding to create...');
        }

        const result = await connection.execute(`
            CREATE TABLE RecipeOwns (
                recipe_ID INTEGER,
                chef_name VARCHAR(255) NOT NULL,
                recipe_name VARCHAR(255) NOT NULL,
                PRIMARY KEY(recipe_ID),
                FOREIGN KEY(chef_name) REFERENCES Chef
                    ON DELETE SET NULL
            )
        `);
        return true;
    }).catch(() => {
        return false;
    });
}

async function updateNameRecipetable(oldName, newName) {
    return await withOracleDB(async (connection) => {
        const result = await connection.execute(
            `UPDATE RecipeOwns SET recipe_name=:newName where recipe_name=:oldName`,
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

async function countRecipetable() {
    return await withOracleDB(async (connection) => {
        const result = await connection.execute('SELECT Count(*) FROM RecipeOwns');
        return result.rows[0][0];
    }).catch(() => {
        return -1;
    });
}

async function fetchHastableFromDb() {
    return await withOracleDB(async (connection) => {
        const result = await connection.execute('SELECT * FROM Has');
        console.log(result.metaData);
        console.log(result.rows);
        return result.rows;
    }).catch(() => {
        return [];
    });
}

async function initiateHastable() {
    return await withOracleDB(async (connection) => {
        try {
            await connection.execute(`DROP TABLE Has`);
        } catch (err) {
            console.log('Table might not exist, proceeding to create...');
        }

        const result = await connection.execute(`
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
        `);
        return true;
    }).catch(() => {
        return false;
    });
}

async function countHastable() {
    return await withOracleDB(async (connection) => {
        const result = await connection.execute('SELECT Count(*) FROM Has');
        return result.rows[0][0];
    }).catch(() => {
        return -1;
    });
}

module.exports = {
    testOracleConnection,
    fetchCheftableFromDb,
    initiateCheftable,
    insertCheftable,
    updateNameDemotable,
    countCheftable,
    fetchRecipetableFromDb,
    initiateRecipetable,
    updateNameRecipetable,
    deleteIdRecipetable,
    countRecipetable,
    fetchHastableFromDb,
    initiateHastable,
    countHastable
};