/*
 * These functions below are for various webpage functionalities. 
 * Each function serves to process data on the frontend:
 *      - Before sending requests to the backend.
 *      - After receiving responses from the backend.
 * 
 * To tailor them to your specific needs,
 * adjust or expand these functions to match both your 
 *   backend endpoints 
 * and 
 *   HTML structure.
 * 
 */


// This function checks the database connection and updates its status on the frontend.
export async function checkDbConnection() {
    const statusElem = document.getElementById('dbStatus');
    const loadingGifElem = document.getElementById('loadingGif');

    const response = await fetch('/api/controller?action=check-db-connection', {
        method: "GET"
    });
    // Hide the loading GIF once the response is received.
    loadingGifElem.style.display = 'none';
    // Display the statusElem's text in the placeholder.
    statusElem.style.display = 'inline';

    response.json()
        .then((res) => {
            statusElem.textContent = " " + res.message;
        })
        .catch((error) => {
            statusElem.textContent = 'connection timed out';  // Adjust error handling if required.
        });
}

// Fetches data from the demotable and displays it.
export async function fetchAndDisplayUsers(name) {
    const tableElement = document.getElementById('Cheftable');
    const tableBody = tableElement.querySelector('tbody');

    const response = await fetch(`/api/controller?action=table&name=${name}`, {
        method: 'GET'
    });

    const responseData = await response.json();
    const demotableContent = responseData.data;

    // Always clear old, already fetched data before new fetching process.
    if (tableBody) {
        tableBody.innerHTML = '';
    }

    demotableContent.forEach(user => {
        const row = tableBody.insertRow();
        user.forEach((field, index) => {
            const cell = row.insertCell(index);
            cell.textContent = field;
        });
    });
}

// This function resets or initializes the demotable.
export async function resetTable(name) {
    const response = await fetch(`/api/controller?action=initiate-table&name=${name}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    });
    const responseData = await response.json();

    responseHandler(responseData, 'resetResultMsg', name, "Table reset successfully!", "Error initiating table!");
}

// Inserts new records into the demotable.
export async function insertCheftable(event, name) {
    event.preventDefault();

    const nameValue = event.target.elements[0].value
    const YOEValue = event.target.elements[1].value
    const seniorityValue = event.target.elements[2].value
    const licenseValue = event.target.elements[3].value

    const response = await fetch(`/api/controller?action=insert-table&name=${name}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chef_name: nameValue,
            years_of_experience: YOEValue,
            seniority: seniorityValue,
            cooking_license: licenseValue
        })
    });

    const responseData = await response.json();
    responseHandler(responseData, 'insertResultMsg', name, "Data inserted successfully!", "Error inserting data!");
}

export async function selectEquipmentTable(event, name) {
    event.preventDefault();
    const tableElement = document.getElementById('Cheftable');
    const tableBody = tableElement.querySelector('tbody');
    tableBody.innerHTML = '';

    const condition = event.target.elements[0].checked ? "both" : "individual";
    const nameString = event.target.elements[2].value
    const materialString = event.target.elements[3].value


    const response = await fetch(`/api/controller?action=select-equipment-table`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            condition,
            nameString,
            materialString
        })
    });

    const responseData = await response.json();
    const data = responseData.data;

    data.forEach(user => {
        const row = tableBody.insertRow();
        user.forEach((field, index) => {
            const cell = row.insertCell(index);
            cell.textContent = field;
        });
    });
    // cant refetch data from the table
}

export async function projectMenuItemTable(event, attributes) {
    event.preventDefault();
    const tableElement = document.getElementById('Cheftable');
    const tableBody = tableElement.querySelector('tbody');
    const tableHead = tableElement.querySelector('thead');
    tableBody.innerHTML = '';
    tableHead.innerHTML = '';

    const response = await fetch(`/api/controller?action=project-menu-item-table`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            attributes
        })
    });

    const responseData = await response.json();
    const data = responseData.data;
    
    attributes.forEach((attr, index) => {
        const th = document.createElement('th');
        th.textContent = attr;
        tableHead.appendChild(th);
    })
    
    data.forEach(user => {
        const row = tableBody.insertRow();
        user.forEach((field, index) => {
            const cell = row.insertCell(index);
            cell.textContent = field;
        });
    });
    // cant refetch data from the table
}

// Counts rows in the demotable.
// Modify the function accordingly if using different aggregate functions or procedures.
export async function countTable(name) {
    const response = await fetch(`/api/controller?action=count-table&name=${name}`, {
        method: 'GET'
    });

    const responseData = await response.json();
    const tupleCount = responseData.count;
    const message = `The number of tuples in demotable: ${tupleCount}`;
    console.log(message);
    responseHandler(responseData, 'countResultMsg', name, message, "Error counting tuples!");
}

// Updates names in the recipe table.
export async function updateNameRecipetable(event, name) {
    event.preventDefault();

    const oldNameValue = document.getElementById('updateOldName').value;
    const newNameValue = document.getElementById('updateNewName').value;
    const attribute = document.getElementById('updateAttribute').value;

    const response = await fetch(`/api/controller?action=update-name-recipetable&name=${name}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            oldName: oldNameValue,
            newName: newNameValue,
            attribute: attribute
        })
    });

    const responseData = await response.json();
    responseHandler(responseData, 'updateResultMsg', name, "Name updated successfully!", "Error updating name!");
}

// Delete ID in the recipe table.
export async function deleteIDRecipetable(event, name) {
    event.preventDefault();

    const recipeId = document.getElementById('deleteOldId').value;

    const response = await fetch(`/api/controller?action=delete-id-recipetable&name=${name}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            recipeId
        })
    });

    const responseData = await response.json();
    responseHandler(responseData, 'deleteIdResultMsg', name, "Recipe deleted successfully!", "Error deleting recipe!");
}

function responseHandler(data, id, name, message, errMessage) {
    const messageElement = document.getElementById(id);

    if (data.success) {
        messageElement.textContent = message;
        fetchTableData(name);
    } else {
        messageElement.textContent = errMessage;
    }
}
 
// General function to refresh the displayed table data. 
// You can invoke this after any table-modifying operation to keep consistency.
export function fetchTableData(name) {
    fetchAndDisplayUsers(name);
}
