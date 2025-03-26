"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/menuitem/page",{

/***/ "(app-pages-browser)/./src/app/api/scripts.js":
/*!********************************!*\
  !*** ./src/app/api/scripts.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkDbConnection: () => (/* binding */ checkDbConnection),\n/* harmony export */   countTable: () => (/* binding */ countTable),\n/* harmony export */   deleteIDRecipetable: () => (/* binding */ deleteIDRecipetable),\n/* harmony export */   fetchAndDisplayUsers: () => (/* binding */ fetchAndDisplayUsers),\n/* harmony export */   fetchTableData: () => (/* binding */ fetchTableData),\n/* harmony export */   insertCheftable: () => (/* binding */ insertCheftable),\n/* harmony export */   projectMenuItemTable: () => (/* binding */ projectMenuItemTable),\n/* harmony export */   resetTable: () => (/* binding */ resetTable),\n/* harmony export */   selectEquipmentTable: () => (/* binding */ selectEquipmentTable),\n/* harmony export */   updateNameRecipetable: () => (/* binding */ updateNameRecipetable)\n/* harmony export */ });\n/*\r\n * These functions below are for various webpage functionalities. \r\n * Each function serves to process data on the frontend:\r\n *      - Before sending requests to the backend.\r\n *      - After receiving responses from the backend.\r\n * \r\n * To tailor them to your specific needs,\r\n * adjust or expand these functions to match both your \r\n *   backend endpoints \r\n * and \r\n *   HTML structure.\r\n * \r\n */ // This function checks the database connection and updates its status on the frontend.\nasync function checkDbConnection() {\n    const statusElem = document.getElementById('dbStatus');\n    const loadingGifElem = document.getElementById('loadingGif');\n    const response = await fetch('/api/controller?action=check-db-connection', {\n        method: \"GET\"\n    });\n    // Hide the loading GIF once the response is received.\n    loadingGifElem.style.display = 'none';\n    // Display the statusElem's text in the placeholder.\n    statusElem.style.display = 'inline';\n    response.json().then((res)=>{\n        statusElem.textContent = \" \" + res.message;\n    }).catch((error)=>{\n        statusElem.textContent = 'connection timed out'; // Adjust error handling if required.\n    });\n}\n// Fetches data from the demotable and displays it.\nasync function fetchAndDisplayUsers(name) {\n    const tableElement = document.getElementById('Cheftable');\n    const tableBody1 = tableElement.querySelector('tbody');\n    const response = await fetch(\"/api/controller?action=table&name=\".concat(name), {\n        method: 'GET'\n    });\n    const responseData = await response.json();\n    const demotableContent = responseData.data;\n    // Always clear old, already fetched data before new fetching process.\n    if (tableBody1) {\n        tableBody1.innerHTML = '';\n    }\n    demotableContent.forEach((user)=>{\n        const row = tableBody1.insertRow();\n        user.forEach((field, index)=>{\n            const cell = row.insertCell(index);\n            cell.textContent = field;\n        });\n    });\n}\n// This function resets or initializes the demotable.\nasync function resetTable(name) {\n    const response = await fetch(\"/api/controller?action=initiate-table&name=\".concat(name), {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({})\n    });\n    const responseData = await response.json();\n    responseHandler(responseData, 'resetResultMsg', name, \"Table reset successfully!\", \"Error initiating table!\");\n}\n// Inserts new records into the demotable.\nasync function insertCheftable(event, name) {\n    event.preventDefault();\n    const nameValue = event.target.elements[0].value;\n    const YOEValue = event.target.elements[1].value;\n    const seniorityValue = event.target.elements[2].value;\n    const licenseValue = event.target.elements[3].value;\n    const response = await fetch(\"/api/controller?action=insert-table&name=\".concat(name), {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            chef_name: nameValue,\n            years_of_experience: YOEValue,\n            seniority: seniorityValue,\n            cooking_license: licenseValue\n        })\n    });\n    const responseData = await response.json();\n    responseHandler(responseData, 'insertResultMsg', name, \"Data inserted successfully!\", \"Error inserting data!\");\n}\nasync function selectEquipmentTable(event, name) {\n    event.preventDefault();\n    const tableElement = document.getElementById('Cheftable');\n    const tableBody1 = tableElement.querySelector('tbody');\n    tableBody1.innerHTML = '';\n    const condition = event.target.elements[0].checked ? \"both\" : \"individual\";\n    const nameString = event.target.elements[2].value;\n    const materialString = event.target.elements[3].value;\n    const response = await fetch(\"/api/controller?action=select-equipment-table\", {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            condition,\n            nameString,\n            materialString\n        })\n    });\n    const responseData = await response.json();\n    const data = responseData.data;\n    data.forEach((user)=>{\n        const row = tableBody1.insertRow();\n        user.forEach((field, index)=>{\n            const cell = row.insertCell(index);\n            cell.textContent = field;\n        });\n    });\n// cant refetch data from the table\n}\nasync function projectMenuItemTable(event, attributes) {\n    event.preventDefault();\n    const response = await fetch(\"/api/controller?action=project-menu-item-table\", {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            attributes\n        })\n    });\n    const responseData = await response.json();\n    const data = responseData.data;\n    data.forEach((user)=>{\n        const row = tableBody.insertRow();\n        user.forEach((field, index)=>{\n            const cell = row.insertCell(index);\n            cell.textContent = field;\n        });\n    });\n// cant refetch data from the table\n}\n// Counts rows in the demotable.\n// Modify the function accordingly if using different aggregate functions or procedures.\nasync function countTable(name) {\n    const response = await fetch(\"/api/controller?action=count-table&name=\".concat(name), {\n        method: 'GET'\n    });\n    const responseData = await response.json();\n    const tupleCount = responseData.count;\n    const message = \"The number of tuples in demotable: \".concat(tupleCount);\n    responseHandler(responseData, 'countResultMsg', name, message, \"Error counting tuples!\");\n}\n// Updates names in the recipe table.\nasync function updateNameRecipetable(event, name) {\n    event.preventDefault();\n    const oldNameValue = document.getElementById('updateOldName').value;\n    const newNameValue = document.getElementById('updateNewName').value;\n    const response = await fetch(\"/api/controller?action=update-name-recipetable&name=\".concat(name), {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            oldName: oldNameValue,\n            newName: newNameValue\n        })\n    });\n    const responseData = await response.json();\n    responseHandler(responseData, 'updateResultMsg', name, \"Name updated successfully!\", \"Error updating name!\");\n}\n// Delete ID in the recipe table.\nasync function deleteIDRecipetable(event, name) {\n    event.preventDefault();\n    const recipeId = document.getElementById('deleteOldId').value;\n    const response = await fetch(\"/api/controller?action=delete-id-recipetable&name=\".concat(name), {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            recipeId\n        })\n    });\n    const responseData = await response.json();\n    responseHandler(responseData, 'deleteIdResultMsg', name, \"Recipe deleted successfully!\", \"Error deleting recipe!\");\n}\nfunction responseHandler(data, id, name, message, errMessage) {\n    const messageElement = document.getElementById(id);\n    if (data.success) {\n        data.textContent = message;\n        fetchTableData(name);\n    } else {\n        messageElement.textContent = errMessage;\n    }\n}\n// General function to refresh the displayed table data. \n// You can invoke this after any table-modifying operation to keep consistency.\nfunction fetchTableData(name) {\n    fetchAndDisplayUsers(name);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpL3NjcmlwdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Q0FZQyxHQUdELHVGQUF1RjtBQUNoRixlQUFlQTtJQUNsQixNQUFNQyxhQUFhQyxTQUFTQyxjQUFjLENBQUM7SUFDM0MsTUFBTUMsaUJBQWlCRixTQUFTQyxjQUFjLENBQUM7SUFFL0MsTUFBTUUsV0FBVyxNQUFNQyxNQUFNLDhDQUE4QztRQUN2RUMsUUFBUTtJQUNaO0lBQ0Esc0RBQXNEO0lBQ3RESCxlQUFlSSxLQUFLLENBQUNDLE9BQU8sR0FBRztJQUMvQixvREFBb0Q7SUFDcERSLFdBQVdPLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO0lBRTNCSixTQUFTSyxJQUFJLEdBQ1JDLElBQUksQ0FBQyxDQUFDQztRQUNIWCxXQUFXWSxXQUFXLEdBQUcsTUFBTUQsSUFBSUUsT0FBTztJQUM5QyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7UUFDSmYsV0FBV1ksV0FBVyxHQUFHLHdCQUF5QixxQ0FBcUM7SUFDM0Y7QUFDUjtBQUVBLG1EQUFtRDtBQUM1QyxlQUFlSSxxQkFBcUJDLElBQUk7SUFDM0MsTUFBTUMsZUFBZWpCLFNBQVNDLGNBQWMsQ0FBQztJQUM3QyxNQUFNaUIsYUFBWUQsYUFBYUUsYUFBYSxDQUFDO0lBRTdDLE1BQU1oQixXQUFXLE1BQU1DLE1BQU0scUNBQTBDLE9BQUxZLE9BQVE7UUFDdEVYLFFBQVE7SUFDWjtJQUVBLE1BQU1lLGVBQWUsTUFBTWpCLFNBQVNLLElBQUk7SUFDeEMsTUFBTWEsbUJBQW1CRCxhQUFhRSxJQUFJO0lBRTFDLHNFQUFzRTtJQUN0RSxJQUFJSixZQUFXO1FBQ1hBLFdBQVVLLFNBQVMsR0FBRztJQUMxQjtJQUVBRixpQkFBaUJHLE9BQU8sQ0FBQ0MsQ0FBQUE7UUFDckIsTUFBTUMsTUFBTVIsV0FBVVMsU0FBUztRQUMvQkYsS0FBS0QsT0FBTyxDQUFDLENBQUNJLE9BQU9DO1lBQ2pC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QkosTUFBTSw4QkFBOEI7QUFDekY7QUFFQSxpQ0FBaUM7QUFDMUIsZUFBZW1ELG9CQUFvQjVCLEtBQUssRUFBRXZCLElBQUk7SUFDakR1QixNQUFNQyxjQUFjO0lBRXBCLE1BQU00QixXQUFXcEUsU0FBU0MsY0FBYyxDQUFDLGVBQWUyQyxLQUFLO0lBRTdELE1BQU16QyxXQUFXLE1BQU1DLE1BQU0scURBQTBELE9BQUxZLE9BQVE7UUFDdEZYLFFBQVE7UUFDUjRCLFNBQVM7WUFDTCxnQkFBZ0I7UUFDcEI7UUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ2pCZ0M7UUFDSjtJQUNKO0lBRUEsTUFBTWhELGVBQWUsTUFBTWpCLFNBQVNLLElBQUk7SUFDeEM2QixnQkFBZ0JqQixjQUFjLHFCQUFxQkosTUFBTSxnQ0FBZ0M7QUFDN0Y7QUFFQSxTQUFTcUIsZ0JBQWdCZixJQUFJLEVBQUUrQyxFQUFFLEVBQUVyRCxJQUFJLEVBQUVKLE9BQU8sRUFBRTBELFVBQVU7SUFDeEQsTUFBTUMsaUJBQWlCdkUsU0FBU0MsY0FBYyxDQUFDb0U7SUFFL0MsSUFBSS9DLEtBQUtrRCxPQUFPLEVBQUU7UUFDZGxELEtBQUtYLFdBQVcsR0FBR0M7UUFDbkI2RCxlQUFlekQ7SUFDbkIsT0FBTztRQUNIdUQsZUFBZTVELFdBQVcsR0FBRzJEO0lBQ2pDO0FBQ0o7QUFFQSx5REFBeUQ7QUFDekQsK0VBQStFO0FBQ3hFLFNBQVNHLGVBQWV6RCxJQUFJO0lBQy9CRCxxQkFBcUJDO0FBQ3pCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHBlcnJ5XFxPbmVEcml2ZVxcRGVza3RvcFxcQ29sbGVnZVxcWWVhciAzXFxUMlxcQ1BTQyAzMDRcXHByb2plY3RfajRtMW5fbjB0MXZfdjdsOXQtbWFpblxcc3JjXFxhcHBcXGFwaVxcc2NyaXB0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGVzZSBmdW5jdGlvbnMgYmVsb3cgYXJlIGZvciB2YXJpb3VzIHdlYnBhZ2UgZnVuY3Rpb25hbGl0aWVzLiBcclxuICogRWFjaCBmdW5jdGlvbiBzZXJ2ZXMgdG8gcHJvY2VzcyBkYXRhIG9uIHRoZSBmcm9udGVuZDpcclxuICogICAgICAtIEJlZm9yZSBzZW5kaW5nIHJlcXVlc3RzIHRvIHRoZSBiYWNrZW5kLlxyXG4gKiAgICAgIC0gQWZ0ZXIgcmVjZWl2aW5nIHJlc3BvbnNlcyBmcm9tIHRoZSBiYWNrZW5kLlxyXG4gKiBcclxuICogVG8gdGFpbG9yIHRoZW0gdG8geW91ciBzcGVjaWZpYyBuZWVkcyxcclxuICogYWRqdXN0IG9yIGV4cGFuZCB0aGVzZSBmdW5jdGlvbnMgdG8gbWF0Y2ggYm90aCB5b3VyIFxyXG4gKiAgIGJhY2tlbmQgZW5kcG9pbnRzIFxyXG4gKiBhbmQgXHJcbiAqICAgSFRNTCBzdHJ1Y3R1cmUuXHJcbiAqIFxyXG4gKi9cclxuXHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGNoZWNrcyB0aGUgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgdXBkYXRlcyBpdHMgc3RhdHVzIG9uIHRoZSBmcm9udGVuZC5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrRGJDb25uZWN0aW9uKCkge1xyXG4gICAgY29uc3Qgc3RhdHVzRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYlN0YXR1cycpO1xyXG4gICAgY29uc3QgbG9hZGluZ0dpZkVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZ0dpZicpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY29udHJvbGxlcj9hY3Rpb249Y2hlY2stZGItY29ubmVjdGlvbicsIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCJcclxuICAgIH0pO1xyXG4gICAgLy8gSGlkZSB0aGUgbG9hZGluZyBHSUYgb25jZSB0aGUgcmVzcG9uc2UgaXMgcmVjZWl2ZWQuXHJcbiAgICBsb2FkaW5nR2lmRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gRGlzcGxheSB0aGUgc3RhdHVzRWxlbSdzIHRleHQgaW4gdGhlIHBsYWNlaG9sZGVyLlxyXG4gICAgc3RhdHVzRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcblxyXG4gICAgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBzdGF0dXNFbGVtLnRleHRDb250ZW50ID0gXCIgXCIgKyByZXMubWVzc2FnZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgc3RhdHVzRWxlbS50ZXh0Q29udGVudCA9ICdjb25uZWN0aW9uIHRpbWVkIG91dCc7ICAvLyBBZGp1c3QgZXJyb3IgaGFuZGxpbmcgaWYgcmVxdWlyZWQuXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8vIEZldGNoZXMgZGF0YSBmcm9tIHRoZSBkZW1vdGFibGUgYW5kIGRpc3BsYXlzIGl0LlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbmREaXNwbGF5VXNlcnMobmFtZSkge1xyXG4gICAgY29uc3QgdGFibGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NoZWZ0YWJsZScpO1xyXG4gICAgY29uc3QgdGFibGVCb2R5ID0gdGFibGVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9jb250cm9sbGVyP2FjdGlvbj10YWJsZSZuYW1lPSR7bmFtZX1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgZGVtb3RhYmxlQ29udGVudCA9IHJlc3BvbnNlRGF0YS5kYXRhO1xyXG5cclxuICAgIC8vIEFsd2F5cyBjbGVhciBvbGQsIGFscmVhZHkgZmV0Y2hlZCBkYXRhIGJlZm9yZSBuZXcgZmV0Y2hpbmcgcHJvY2Vzcy5cclxuICAgIGlmICh0YWJsZUJvZHkpIHtcclxuICAgICAgICB0YWJsZUJvZHkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZGVtb3RhYmxlQ29udGVudC5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IHRhYmxlQm9keS5pbnNlcnRSb3coKTtcclxuICAgICAgICB1c2VyLmZvckVhY2goKGZpZWxkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoaW5kZXgpO1xyXG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZmllbGQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiByZXNldHMgb3IgaW5pdGlhbGl6ZXMgdGhlIGRlbW90YWJsZS5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0VGFibGUobmFtZSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9jb250cm9sbGVyP2FjdGlvbj1pbml0aWF0ZS10YWJsZSZuYW1lPSR7bmFtZX1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7fSlcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJlc3BvbnNlSGFuZGxlcihyZXNwb25zZURhdGEsICdyZXNldFJlc3VsdE1zZycsIG5hbWUsIFwiVGFibGUgcmVzZXQgc3VjY2Vzc2Z1bGx5IVwiLCBcIkVycm9yIGluaXRpYXRpbmcgdGFibGUhXCIpO1xyXG59XHJcblxyXG4vLyBJbnNlcnRzIG5ldyByZWNvcmRzIGludG8gdGhlIGRlbW90YWJsZS5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc2VydENoZWZ0YWJsZShldmVudCwgbmFtZSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBuYW1lVmFsdWUgPSBldmVudC50YXJnZXQuZWxlbWVudHNbMF0udmFsdWVcclxuICAgIGNvbnN0IFlPRVZhbHVlID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzFdLnZhbHVlXHJcbiAgICBjb25zdCBzZW5pb3JpdHlWYWx1ZSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1syXS52YWx1ZVxyXG4gICAgY29uc3QgbGljZW5zZVZhbHVlID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzNdLnZhbHVlXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9jb250cm9sbGVyP2FjdGlvbj1pbnNlcnQtdGFibGUmbmFtZT0ke25hbWV9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBjaGVmX25hbWU6IG5hbWVWYWx1ZSxcclxuICAgICAgICAgICAgeWVhcnNfb2ZfZXhwZXJpZW5jZTogWU9FVmFsdWUsXHJcbiAgICAgICAgICAgIHNlbmlvcml0eTogc2VuaW9yaXR5VmFsdWUsXHJcbiAgICAgICAgICAgIGNvb2tpbmdfbGljZW5zZTogbGljZW5zZVZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJlc3BvbnNlSGFuZGxlcihyZXNwb25zZURhdGEsICdpbnNlcnRSZXN1bHRNc2cnLCBuYW1lLCBcIkRhdGEgaW5zZXJ0ZWQgc3VjY2Vzc2Z1bGx5IVwiLCBcIkVycm9yIGluc2VydGluZyBkYXRhIVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbGVjdEVxdWlwbWVudFRhYmxlKGV2ZW50LCBuYW1lKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdGFibGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NoZWZ0YWJsZScpO1xyXG4gICAgY29uc3QgdGFibGVCb2R5ID0gdGFibGVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XHJcbiAgICB0YWJsZUJvZHkuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgY29uZGl0aW9uID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzBdLmNoZWNrZWQgPyBcImJvdGhcIiA6IFwiaW5kaXZpZHVhbFwiO1xyXG4gICAgY29uc3QgbmFtZVN0cmluZyA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1syXS52YWx1ZVxyXG4gICAgY29uc3QgbWF0ZXJpYWxTdHJpbmcgPSBldmVudC50YXJnZXQuZWxlbWVudHNbM10udmFsdWVcclxuXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9jb250cm9sbGVyP2FjdGlvbj1zZWxlY3QtZXF1aXBtZW50LXRhYmxlYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBjb25kaXRpb24sXHJcbiAgICAgICAgICAgIG5hbWVTdHJpbmcsXHJcbiAgICAgICAgICAgIG1hdGVyaWFsU3RyaW5nXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZURhdGEuZGF0YTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gdGFibGVCb2R5Lmluc2VydFJvdygpO1xyXG4gICAgICAgIHVzZXIuZm9yRWFjaCgoZmllbGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbChpbmRleCk7XHJcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBmaWVsZDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gY2FudCByZWZldGNoIGRhdGEgZnJvbSB0aGUgdGFibGVcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2plY3RNZW51SXRlbVRhYmxlKGV2ZW50LCBhdHRyaWJ1dGVzKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2NvbnRyb2xsZXI/YWN0aW9uPXByb2plY3QtbWVudS1pdGVtLXRhYmxlYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZURhdGEuZGF0YTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gdGFibGVCb2R5Lmluc2VydFJvdygpO1xyXG4gICAgICAgIHVzZXIuZm9yRWFjaCgoZmllbGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbChpbmRleCk7XHJcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBmaWVsZDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gY2FudCByZWZldGNoIGRhdGEgZnJvbSB0aGUgdGFibGVcclxufVxyXG5cclxuLy8gQ291bnRzIHJvd3MgaW4gdGhlIGRlbW90YWJsZS5cclxuLy8gTW9kaWZ5IHRoZSBmdW5jdGlvbiBhY2NvcmRpbmdseSBpZiB1c2luZyBkaWZmZXJlbnQgYWdncmVnYXRlIGZ1bmN0aW9ucyBvciBwcm9jZWR1cmVzLlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY291bnRUYWJsZShuYW1lKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2NvbnRyb2xsZXI/YWN0aW9uPWNvdW50LXRhYmxlJm5hbWU9JHtuYW1lfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCB0dXBsZUNvdW50ID0gcmVzcG9uc2VEYXRhLmNvdW50O1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgbnVtYmVyIG9mIHR1cGxlcyBpbiBkZW1vdGFibGU6ICR7dHVwbGVDb3VudH1gO1xyXG4gICAgcmVzcG9uc2VIYW5kbGVyKHJlc3BvbnNlRGF0YSwgJ2NvdW50UmVzdWx0TXNnJywgbmFtZSwgbWVzc2FnZSwgXCJFcnJvciBjb3VudGluZyB0dXBsZXMhXCIpO1xyXG59XHJcblxyXG4vLyBVcGRhdGVzIG5hbWVzIGluIHRoZSByZWNpcGUgdGFibGUuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVOYW1lUmVjaXBldGFibGUoZXZlbnQsIG5hbWUpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3Qgb2xkTmFtZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZU9sZE5hbWUnKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld05hbWVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGVOZXdOYW1lJykudmFsdWU7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9jb250cm9sbGVyP2FjdGlvbj11cGRhdGUtbmFtZS1yZWNpcGV0YWJsZSZuYW1lPSR7bmFtZX1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG9sZE5hbWU6IG9sZE5hbWVWYWx1ZSxcclxuICAgICAgICAgICAgbmV3TmFtZTogbmV3TmFtZVZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJlc3BvbnNlSGFuZGxlcihyZXNwb25zZURhdGEsICd1cGRhdGVSZXN1bHRNc2cnLCBuYW1lLCBcIk5hbWUgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIsIFwiRXJyb3IgdXBkYXRpbmcgbmFtZSFcIik7XHJcbn1cclxuXHJcbi8vIERlbGV0ZSBJRCBpbiB0aGUgcmVjaXBlIHRhYmxlLlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSURSZWNpcGV0YWJsZShldmVudCwgbmFtZSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCByZWNpcGVJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVPbGRJZCcpLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvY29udHJvbGxlcj9hY3Rpb249ZGVsZXRlLWlkLXJlY2lwZXRhYmxlJm5hbWU9JHtuYW1lfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgcmVjaXBlSWRcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmVzcG9uc2VIYW5kbGVyKHJlc3BvbnNlRGF0YSwgJ2RlbGV0ZUlkUmVzdWx0TXNnJywgbmFtZSwgXCJSZWNpcGUgZGVsZXRlZCBzdWNjZXNzZnVsbHkhXCIsIFwiRXJyb3IgZGVsZXRpbmcgcmVjaXBlIVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzcG9uc2VIYW5kbGVyKGRhdGEsIGlkLCBuYW1lLCBtZXNzYWdlLCBlcnJNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHJcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgZGF0YS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgICAgICAgZmV0Y2hUYWJsZURhdGEobmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gZXJyTWVzc2FnZTtcclxuICAgIH1cclxufVxyXG4gXHJcbi8vIEdlbmVyYWwgZnVuY3Rpb24gdG8gcmVmcmVzaCB0aGUgZGlzcGxheWVkIHRhYmxlIGRhdGEuIFxyXG4vLyBZb3UgY2FuIGludm9rZSB0aGlzIGFmdGVyIGFueSB0YWJsZS1tb2RpZnlpbmcgb3BlcmF0aW9uIHRvIGtlZXAgY29uc2lzdGVuY3kuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFRhYmxlRGF0YShuYW1lKSB7XHJcbiAgICBmZXRjaEFuZERpc3BsYXlVc2VycyhuYW1lKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2hlY2tEYkNvbm5lY3Rpb24iLCJzdGF0dXNFbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvYWRpbmdHaWZFbGVtIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsInN0eWxlIiwiZGlzcGxheSIsImpzb24iLCJ0aGVuIiwicmVzIiwidGV4dENvbnRlbnQiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnJvciIsImZldGNoQW5kRGlzcGxheVVzZXJzIiwibmFtZSIsInRhYmxlRWxlbWVudCIsInRhYmxlQm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJyZXNwb25zZURhdGEiLCJkZW1vdGFibGVDb250ZW50IiwiZGF0YSIsImlubmVySFRNTCIsImZvckVhY2giLCJ1c2VyIiwicm93IiwiaW5zZXJ0Um93IiwiZmllbGQiLCJpbmRleCIsImNlbGwiLCJpbnNlcnRDZWxsIiwicmVzZXRUYWJsZSIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlSGFuZGxlciIsImluc2VydENoZWZ0YWJsZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYW1lVmFsdWUiLCJ0YXJnZXQiLCJlbGVtZW50cyIsInZhbHVlIiwiWU9FVmFsdWUiLCJzZW5pb3JpdHlWYWx1ZSIsImxpY2Vuc2VWYWx1ZSIsImNoZWZfbmFtZSIsInllYXJzX29mX2V4cGVyaWVuY2UiLCJzZW5pb3JpdHkiLCJjb29raW5nX2xpY2Vuc2UiLCJzZWxlY3RFcXVpcG1lbnRUYWJsZSIsImNvbmRpdGlvbiIsImNoZWNrZWQiLCJuYW1lU3RyaW5nIiwibWF0ZXJpYWxTdHJpbmciLCJwcm9qZWN0TWVudUl0ZW1UYWJsZSIsImF0dHJpYnV0ZXMiLCJjb3VudFRhYmxlIiwidHVwbGVDb3VudCIsImNvdW50IiwidXBkYXRlTmFtZVJlY2lwZXRhYmxlIiwib2xkTmFtZVZhbHVlIiwibmV3TmFtZVZhbHVlIiwib2xkTmFtZSIsIm5ld05hbWUiLCJkZWxldGVJRFJlY2lwZXRhYmxlIiwicmVjaXBlSWQiLCJpZCIsImVyck1lc3NhZ2UiLCJtZXNzYWdlRWxlbWVudCIsInN1Y2Nlc3MiLCJmZXRjaFRhYmxlRGF0YSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api/scripts.js\n"));

/***/ })

});