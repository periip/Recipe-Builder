"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/has/page",{

/***/ "(app-pages-browser)/./src/app/api/scripts.js":
/*!********************************!*\
  !*** ./src/app/api/scripts.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkDbConnection: () => (/* binding */ checkDbConnection),\n/* harmony export */   countTable: () => (/* binding */ countTable),\n/* harmony export */   deleteIDRecipetable: () => (/* binding */ deleteIDRecipetable),\n/* harmony export */   fetchAndDisplayUsers: () => (/* binding */ fetchAndDisplayUsers),\n/* harmony export */   fetchTableData: () => (/* binding */ fetchTableData),\n/* harmony export */   insertCheftable: () => (/* binding */ insertCheftable),\n/* harmony export */   resetTable: () => (/* binding */ resetTable),\n/* harmony export */   updateNameRecipetable: () => (/* binding */ updateNameRecipetable)\n/* harmony export */ });\n/*\n * These functions below are for various webpage functionalities. \n * Each function serves to process data on the frontend:\n *      - Before sending requests to the backend.\n *      - After receiving responses from the backend.\n * \n * To tailor them to your specific needs,\n * adjust or expand these functions to match both your \n *   backend endpoints \n * and \n *   HTML structure.\n * \n */ // This function checks the database connection and updates its status on the frontend.\nasync function checkDbConnection() {\n    const statusElem = document.getElementById('dbStatus');\n    const loadingGifElem = document.getElementById('loadingGif');\n    const response = await fetch('/api/controller?action=check-db-connection', {\n        method: \"GET\"\n    });\n    // Hide the loading GIF once the response is received.\n    loadingGifElem.style.display = 'none';\n    // Display the statusElem's text in the placeholder.\n    statusElem.style.display = 'inline';\n    response.json().then((res)=>{\n        statusElem.textContent = \" \" + res.message;\n    }).catch((error)=>{\n        statusElem.textContent = 'connection timed out'; // Adjust error handling if required.\n    });\n}\n// Fetches data from the demotable and displays it.\nasync function fetchAndDisplayUsers(name) {\n    const tableElement = document.getElementById('Cheftable');\n    const tableBody = tableElement.querySelector('tbody');\n    const response = await fetch(\"/api/controller?action=table&name=\".concat(name), {\n        method: 'GET'\n    });\n    const responseData = await response.json();\n    const demotableContent = responseData.data;\n    // Always clear old, already fetched data before new fetching process.\n    if (tableBody) {\n        tableBody.innerHTML = '';\n    }\n    demotableContent.forEach((user)=>{\n        const row = tableBody.insertRow();\n        user.forEach((field, index)=>{\n            const cell = row.insertCell(index);\n            cell.textContent = field;\n        });\n    });\n}\n// This function resets or initializes the demotable.\nasync function resetTable(name) {\n    const response = await fetch(\"/api/controller?action=initiate-table&name=\".concat(name), {\n        method: 'POST'\n    });\n    const responseData = await response.json();\n    responseHandler(responseData, 'resetResultMsg', name, \"Table reset successfully!\", \"Error initiating table!\");\n}\n// Inserts new records into the demotable.\nasync function insertCheftable(event, name) {\n    event.preventDefault();\n    const nameValue = event.target.elements[0].value;\n    const YOEValue = event.target.elements[1].value;\n    const seniorityValue = event.target.elements[2].value;\n    const licenseValue = event.target.elements[3].value;\n    const response = await fetch(\"/api/controller?action=insert-table&name=\".concat(name), {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            chef_name: nameValue,\n            years_of_experience: YOEValue,\n            seniority: seniorityValue,\n            cooking_license: licenseValue\n        })\n    });\n    const responseData = await response.json();\n    responseHandler(responseData, 'insertResultMsg', name, \"Data inserted successfully!\", \"Error inserting data!\");\n}\n// Counts rows in the demotable.\n// Modify the function accordingly if using different aggregate functions or procedures.\nasync function countTable(name) {\n    const response = await fetch(\"/api/controller?action=count-table&name=\".concat(name), {\n        method: 'GET'\n    });\n    const responseData = await response.json();\n    const tupleCount = responseData.count;\n    const message = \"The number of tuples in demotable: \".concat(tupleCount);\n    console.log(message);\n    responseHandler(responseData, 'countResultMsg', name, message, \"Error counting tuples!\");\n}\n// Updates names in the recipe table.\nasync function updateNameRecipetable(event, name) {\n    event.preventDefault();\n    const oldNameValue = document.getElementById('updateOldName').value;\n    const newNameValue = document.getElementById('updateNewName').value;\n    const response = await fetch(\"/api/controller?action=update-name-recipetable&name=\".concat(name), {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            oldName: oldNameValue,\n            newName: newNameValue\n        })\n    });\n    const responseData = await response.json();\n    responseHandler(responseData, 'updateResultMsg', name, \"Name updated successfully!\", \"Error updating name!\");\n}\n// Delete ID in the recipe table.\nasync function deleteIDRecipetable(event, name) {\n    event.preventDefault();\n    const recipeId = document.getElementById('deleteOldId').value;\n    const response = await fetch(\"/api/controller?action=delete-id-recipetable&name=\".concat(name), {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            recipeId\n        })\n    });\n    const responseData = await response.json();\n    responseHandler(responseData, 'deleteIdResultMsg', name, \"Recipe deleted successfully!\", \"Error deleting recipe!\");\n}\nfunction responseHandler(data, id, name, message, errMessage) {\n    const messageElement = document.getElementById(id);\n    if (data.success) {\n        data.textContent = message;\n        fetchTableData(name);\n    } else {\n        messageElement.textContent = errMessage;\n    }\n}\n// General function to refresh the displayed table data. \n// You can invoke this after any table-modifying operation to keep consistency.\nfunction fetchTableData(name) {\n    fetchAndDisplayUsers(name);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpL3NjcmlwdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0NBWUMsR0FHRCx1RkFBdUY7QUFDaEYsZUFBZUE7SUFDbEIsTUFBTUMsYUFBYUMsU0FBU0MsY0FBYyxDQUFDO0lBQzNDLE1BQU1DLGlCQUFpQkYsU0FBU0MsY0FBYyxDQUFDO0lBRS9DLE1BQU1FLFdBQVcsTUFBTUMsTUFBTSw4Q0FBOEM7UUFDdkVDLFFBQVE7SUFDWjtJQUNBLHNEQUFzRDtJQUN0REgsZUFBZUksS0FBSyxDQUFDQyxPQUFPLEdBQUc7SUFDL0Isb0RBQW9EO0lBQ3BEUixXQUFXTyxLQUFLLENBQUNDLE9BQU8sR0FBRztJQUUzQkosU0FBU0ssSUFBSSxHQUNSQyxJQUFJLENBQUMsQ0FBQ0M7UUFDSFgsV0FBV1ksV0FBVyxHQUFHLE1BQU1ELElBQUlFLE9BQU87SUFDOUMsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO1FBQ0pmLFdBQVdZLFdBQVcsR0FBRyx3QkFBeUIscUNBQXFDO0lBQzNGO0FBQ1I7QUFFQSxtREFBbUQ7QUFDNUMsZUFBZUkscUJBQXFCQyxJQUFJO0lBQzNDLE1BQU1DLGVBQWVqQixTQUFTQyxjQUFjLENBQUM7SUFDN0MsTUFBTWlCLFlBQVlELGFBQWFFLGFBQWEsQ0FBQztJQUU3QyxNQUFNaEIsV0FBVyxNQUFNQyxNQUFNLHFDQUEwQyxPQUFMWSxPQUFRO1FBQ3RFWCxRQUFRO0lBQ1o7SUFFQSxNQUFNZSxlQUFlLE1BQU1qQixTQUFTSyxJQUFJO0lBQ3hDLE1BQU1hLG1CQUFtQkQsYUFBYUUsSUFBSTtJQUUxQyxzRUFBc0U7SUFDdEUsSUFBSUosV0FBVztRQUNYQSxVQUFVSyxTQUFTLEdBQUc7SUFDMUI7SUFFQUYsaUJBQWlCRyxPQUFPLENBQUNDLENBQUFBO1FBQ3JCLE1BQU1DLE1BQU1SLFVBQVVTLFNBQVM7UUFDL0JGLEtBQUtELE9BQU8sQ0FBQyxDQUFDSSxPQUFPQztZQUNqQixN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STtJQUN4Q3lCLGdCQUFnQmIsY0FBYyxxQkFBcUJKLE1BQU0sZ0NBQWdDO0FBQzdGO0FBRUEsU0FBU2lCLGdCQUFnQlgsSUFBSSxFQUFFMEMsRUFBRSxFQUFFaEQsSUFBSSxFQUFFSixPQUFPLEVBQUVxRCxVQUFVO0lBQ3hELE1BQU1DLGlCQUFpQmxFLFNBQVNDLGNBQWMsQ0FBQytEO0lBRS9DLElBQUkxQyxLQUFLNkMsT0FBTyxFQUFFO1FBQ2Q3QyxLQUFLWCxXQUFXLEdBQUdDO1FBQ25Cd0QsZUFBZXBEO0lBQ25CLE9BQU87UUFDSGtELGVBQWV2RCxXQUFXLEdBQUdzRDtJQUNqQztBQUNKO0FBRUEseURBQXlEO0FBQ3pELCtFQUErRTtBQUN4RSxTQUFTRyxlQUFlcEQsSUFBSTtJQUMvQkQscUJBQXFCQztBQUN6QiIsInNvdXJjZXMiOlsiL1VzZXJzL2xvdWlzbHVvL0Rlc2t0b3AvMzA0LXNpbGx5LWJpbGx5L3NyYy9hcHAvYXBpL3NjcmlwdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBiZWxvdyBhcmUgZm9yIHZhcmlvdXMgd2VicGFnZSBmdW5jdGlvbmFsaXRpZXMuIFxuICogRWFjaCBmdW5jdGlvbiBzZXJ2ZXMgdG8gcHJvY2VzcyBkYXRhIG9uIHRoZSBmcm9udGVuZDpcbiAqICAgICAgLSBCZWZvcmUgc2VuZGluZyByZXF1ZXN0cyB0byB0aGUgYmFja2VuZC5cbiAqICAgICAgLSBBZnRlciByZWNlaXZpbmcgcmVzcG9uc2VzIGZyb20gdGhlIGJhY2tlbmQuXG4gKiBcbiAqIFRvIHRhaWxvciB0aGVtIHRvIHlvdXIgc3BlY2lmaWMgbmVlZHMsXG4gKiBhZGp1c3Qgb3IgZXhwYW5kIHRoZXNlIGZ1bmN0aW9ucyB0byBtYXRjaCBib3RoIHlvdXIgXG4gKiAgIGJhY2tlbmQgZW5kcG9pbnRzIFxuICogYW5kIFxuICogICBIVE1MIHN0cnVjdHVyZS5cbiAqIFxuICovXG5cblxuLy8gVGhpcyBmdW5jdGlvbiBjaGVja3MgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb24gYW5kIHVwZGF0ZXMgaXRzIHN0YXR1cyBvbiB0aGUgZnJvbnRlbmQuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tEYkNvbm5lY3Rpb24oKSB7XG4gICAgY29uc3Qgc3RhdHVzRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYlN0YXR1cycpO1xuICAgIGNvbnN0IGxvYWRpbmdHaWZFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmdHaWYnKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY29udHJvbGxlcj9hY3Rpb249Y2hlY2stZGItY29ubmVjdGlvbicsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgfSk7XG4gICAgLy8gSGlkZSB0aGUgbG9hZGluZyBHSUYgb25jZSB0aGUgcmVzcG9uc2UgaXMgcmVjZWl2ZWQuXG4gICAgbG9hZGluZ0dpZkVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyBEaXNwbGF5IHRoZSBzdGF0dXNFbGVtJ3MgdGV4dCBpbiB0aGUgcGxhY2Vob2xkZXIuXG4gICAgc3RhdHVzRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cbiAgICByZXNwb25zZS5qc29uKClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgc3RhdHVzRWxlbS50ZXh0Q29udGVudCA9IFwiIFwiICsgcmVzLm1lc3NhZ2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHN0YXR1c0VsZW0udGV4dENvbnRlbnQgPSAnY29ubmVjdGlvbiB0aW1lZCBvdXQnOyAgLy8gQWRqdXN0IGVycm9yIGhhbmRsaW5nIGlmIHJlcXVpcmVkLlxuICAgICAgICB9KTtcbn1cblxuLy8gRmV0Y2hlcyBkYXRhIGZyb20gdGhlIGRlbW90YWJsZSBhbmQgZGlzcGxheXMgaXQuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbmREaXNwbGF5VXNlcnMobmFtZSkge1xuICAgIGNvbnN0IHRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDaGVmdGFibGUnKTtcbiAgICBjb25zdCB0YWJsZUJvZHkgPSB0YWJsZUVsZW1lbnQucXVlcnlTZWxlY3RvcigndGJvZHknKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvY29udHJvbGxlcj9hY3Rpb249dGFibGUmbmFtZT0ke25hbWV9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgZGVtb3RhYmxlQ29udGVudCA9IHJlc3BvbnNlRGF0YS5kYXRhO1xuXG4gICAgLy8gQWx3YXlzIGNsZWFyIG9sZCwgYWxyZWFkeSBmZXRjaGVkIGRhdGEgYmVmb3JlIG5ldyBmZXRjaGluZyBwcm9jZXNzLlxuICAgIGlmICh0YWJsZUJvZHkpIHtcbiAgICAgICAgdGFibGVCb2R5LmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIGRlbW90YWJsZUNvbnRlbnQuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGFibGVCb2R5Lmluc2VydFJvdygpO1xuICAgICAgICB1c2VyLmZvckVhY2goKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKGluZGV4KTtcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBmaWVsZDtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmVzZXRzIG9yIGluaXRpYWxpemVzIHRoZSBkZW1vdGFibGUuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRUYWJsZShuYW1lKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9jb250cm9sbGVyP2FjdGlvbj1pbml0aWF0ZS10YWJsZSZuYW1lPSR7bmFtZX1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSk7XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmVzcG9uc2VIYW5kbGVyKHJlc3BvbnNlRGF0YSwgJ3Jlc2V0UmVzdWx0TXNnJywgbmFtZSwgXCJUYWJsZSByZXNldCBzdWNjZXNzZnVsbHkhXCIsIFwiRXJyb3IgaW5pdGlhdGluZyB0YWJsZSFcIik7XG59XG5cbi8vIEluc2VydHMgbmV3IHJlY29yZHMgaW50byB0aGUgZGVtb3RhYmxlLlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc2VydENoZWZ0YWJsZShldmVudCwgbmFtZSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBuYW1lVmFsdWUgPSBldmVudC50YXJnZXQuZWxlbWVudHNbMF0udmFsdWVcbiAgICBjb25zdCBZT0VWYWx1ZSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1sxXS52YWx1ZVxuICAgIGNvbnN0IHNlbmlvcml0eVZhbHVlID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzJdLnZhbHVlXG4gICAgY29uc3QgbGljZW5zZVZhbHVlID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzNdLnZhbHVlXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2NvbnRyb2xsZXI/YWN0aW9uPWluc2VydC10YWJsZSZuYW1lPSR7bmFtZX1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGNoZWZfbmFtZTogbmFtZVZhbHVlLFxuICAgICAgICAgICAgeWVhcnNfb2ZfZXhwZXJpZW5jZTogWU9FVmFsdWUsXG4gICAgICAgICAgICBzZW5pb3JpdHk6IHNlbmlvcml0eVZhbHVlLFxuICAgICAgICAgICAgY29va2luZ19saWNlbnNlOiBsaWNlbnNlVmFsdWVcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXNwb25zZUhhbmRsZXIocmVzcG9uc2VEYXRhLCAnaW5zZXJ0UmVzdWx0TXNnJywgbmFtZSwgXCJEYXRhIGluc2VydGVkIHN1Y2Nlc3NmdWxseSFcIiwgXCJFcnJvciBpbnNlcnRpbmcgZGF0YSFcIik7XG59XG5cbi8vIENvdW50cyByb3dzIGluIHRoZSBkZW1vdGFibGUuXG4vLyBNb2RpZnkgdGhlIGZ1bmN0aW9uIGFjY29yZGluZ2x5IGlmIHVzaW5nIGRpZmZlcmVudCBhZ2dyZWdhdGUgZnVuY3Rpb25zIG9yIHByb2NlZHVyZXMuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY291bnRUYWJsZShuYW1lKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9jb250cm9sbGVyP2FjdGlvbj1jb3VudC10YWJsZSZuYW1lPSR7bmFtZX1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCB0dXBsZUNvdW50ID0gcmVzcG9uc2VEYXRhLmNvdW50O1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIG51bWJlciBvZiB0dXBsZXMgaW4gZGVtb3RhYmxlOiAke3R1cGxlQ291bnR9YDtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIHJlc3BvbnNlSGFuZGxlcihyZXNwb25zZURhdGEsICdjb3VudFJlc3VsdE1zZycsIG5hbWUsIG1lc3NhZ2UsIFwiRXJyb3IgY291bnRpbmcgdHVwbGVzIVwiKTtcbn1cblxuLy8gVXBkYXRlcyBuYW1lcyBpbiB0aGUgcmVjaXBlIHRhYmxlLlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU5hbWVSZWNpcGV0YWJsZShldmVudCwgbmFtZSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBvbGROYW1lVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlT2xkTmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IG5ld05hbWVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGVOZXdOYW1lJykudmFsdWU7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2NvbnRyb2xsZXI/YWN0aW9uPXVwZGF0ZS1uYW1lLXJlY2lwZXRhYmxlJm5hbWU9JHtuYW1lfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgb2xkTmFtZTogb2xkTmFtZVZhbHVlLFxuICAgICAgICAgICAgbmV3TmFtZTogbmV3TmFtZVZhbHVlXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmVzcG9uc2VIYW5kbGVyKHJlc3BvbnNlRGF0YSwgJ3VwZGF0ZVJlc3VsdE1zZycsIG5hbWUsIFwiTmFtZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFcIiwgXCJFcnJvciB1cGRhdGluZyBuYW1lIVwiKTtcbn1cblxuLy8gRGVsZXRlIElEIGluIHRoZSByZWNpcGUgdGFibGUuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSURSZWNpcGV0YWJsZShldmVudCwgbmFtZSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCByZWNpcGVJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVPbGRJZCcpLnZhbHVlO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9jb250cm9sbGVyP2FjdGlvbj1kZWxldGUtaWQtcmVjaXBldGFibGUmbmFtZT0ke25hbWV9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICByZWNpcGVJZFxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJlc3BvbnNlSGFuZGxlcihyZXNwb25zZURhdGEsICdkZWxldGVJZFJlc3VsdE1zZycsIG5hbWUsIFwiUmVjaXBlIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiLCBcIkVycm9yIGRlbGV0aW5nIHJlY2lwZSFcIik7XG59XG5cbmZ1bmN0aW9uIHJlc3BvbnNlSGFuZGxlcihkYXRhLCBpZCwgbmFtZSwgbWVzc2FnZSwgZXJyTWVzc2FnZSkge1xuICAgIGNvbnN0IG1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICBkYXRhLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgZmV0Y2hUYWJsZURhdGEobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJNZXNzYWdlO1xuICAgIH1cbn1cbiBcbi8vIEdlbmVyYWwgZnVuY3Rpb24gdG8gcmVmcmVzaCB0aGUgZGlzcGxheWVkIHRhYmxlIGRhdGEuIFxuLy8gWW91IGNhbiBpbnZva2UgdGhpcyBhZnRlciBhbnkgdGFibGUtbW9kaWZ5aW5nIG9wZXJhdGlvbiB0byBrZWVwIGNvbnNpc3RlbmN5LlxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVGFibGVEYXRhKG5hbWUpIHtcbiAgICBmZXRjaEFuZERpc3BsYXlVc2VycyhuYW1lKTtcbn1cbiJdLCJuYW1lcyI6WyJjaGVja0RiQ29ubmVjdGlvbiIsInN0YXR1c0VsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZGluZ0dpZkVsZW0iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwic3R5bGUiLCJkaXNwbGF5IiwianNvbiIsInRoZW4iLCJyZXMiLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2UiLCJjYXRjaCIsImVycm9yIiwiZmV0Y2hBbmREaXNwbGF5VXNlcnMiLCJuYW1lIiwidGFibGVFbGVtZW50IiwidGFibGVCb2R5IiwicXVlcnlTZWxlY3RvciIsInJlc3BvbnNlRGF0YSIsImRlbW90YWJsZUNvbnRlbnQiLCJkYXRhIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsInVzZXIiLCJyb3ciLCJpbnNlcnRSb3ciLCJmaWVsZCIsImluZGV4IiwiY2VsbCIsImluc2VydENlbGwiLCJyZXNldFRhYmxlIiwicmVzcG9uc2VIYW5kbGVyIiwiaW5zZXJ0Q2hlZnRhYmxlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWVWYWx1ZSIsInRhcmdldCIsImVsZW1lbnRzIiwidmFsdWUiLCJZT0VWYWx1ZSIsInNlbmlvcml0eVZhbHVlIiwibGljZW5zZVZhbHVlIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hlZl9uYW1lIiwieWVhcnNfb2ZfZXhwZXJpZW5jZSIsInNlbmlvcml0eSIsImNvb2tpbmdfbGljZW5zZSIsImNvdW50VGFibGUiLCJ0dXBsZUNvdW50IiwiY291bnQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlTmFtZVJlY2lwZXRhYmxlIiwib2xkTmFtZVZhbHVlIiwibmV3TmFtZVZhbHVlIiwib2xkTmFtZSIsIm5ld05hbWUiLCJkZWxldGVJRFJlY2lwZXRhYmxlIiwicmVjaXBlSWQiLCJpZCIsImVyck1lc3NhZ2UiLCJtZXNzYWdlRWxlbWVudCIsInN1Y2Nlc3MiLCJmZXRjaFRhYmxlRGF0YSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api/scripts.js\n"));

/***/ })

});