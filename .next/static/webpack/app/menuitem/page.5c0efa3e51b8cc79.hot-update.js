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

/***/ "(app-pages-browser)/./src/app/menuitem/page.js":
/*!**********************************!*\
  !*** ./src/app/menuitem/page.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuItemPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_page_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page-layout */ \"(app-pages-browser)/./src/app/components/page-layout/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst title = \"Menu Items\";\nconst tableName = \"MenuItem\";\nconst attributes = [\n    \"menu_item_name\",\n    \"cuisine\",\n    \"price\",\n    \"dietary_restrictions\",\n    \"license_requirement\",\n    \"isGourmet\"\n];\nfunction MenuItemPage() {\n    _s();\n    const [isAllSelected, setIsAllSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedAttributes, setSelectedAttributes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleClick = (e)=>{\n        if (e.target.value === \"all\") {\n            setIsAllSelected(e.target.checked);\n            setSelectedAttributes(e.target.checked ? attributes : []);\n        } else {\n            if (e.target.checked) {\n                setSelectedAttributes([\n                    ...selectedAttributes,\n                    e.target.value\n                ]);\n            } else {\n                setSelectedAttributes(selectedAttributes.filter((attr)=>attr !== e.target.value));\n                setIsAllSelected(false);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_page_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: title,\n        tableName: tableName,\n        attributes: attributes,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Filter columns in \",\n                    title,\n                    \" Table\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Choose which columns you want to view in the table.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>projectMenuItemTable(e, tableName),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                id: \"all\",\n                                name: \"all\",\n                                value: \"all\",\n                                onClick: handleClick\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"all\",\n                                children: \"Select all\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    attributes.map((attr, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    id: attr,\n                                    name: attr,\n                                    value: attr,\n                                    onClick: handleClick,\n                                    checked: isAllSelected || selectedAttributes.includes(attr)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: attr,\n                                    children: attr\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \" Apply \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n                        lineNumber: 41,\n                        columnNumber: 56\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"updateNameResultMsg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\perry\\\\OneDrive\\\\Desktop\\\\College\\\\Year 3\\\\T2\\\\CPSC 304\\\\project_j4m1n_n0t1v_v7l9t-main\\\\src\\\\app\\\\menuitem\\\\page.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(MenuItemPage, \"EObE43GJxXHnR9OfiuDYXauOors=\");\n_c = MenuItemPage;\nvar _c;\n$RefreshReg$(_c, \"MenuItemPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWVudWl0ZW0vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ1c7QUFFbkQsTUFBTUcsUUFBUTtBQUNkLE1BQU1DLFlBQVk7QUFDbEIsTUFBTUMsYUFBYTtJQUFDO0lBQWtCO0lBQVc7SUFBUztJQUF3QjtJQUF1QjtDQUFZO0FBQ3RHLFNBQVNDOztJQUNwQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNRLG9CQUFvQkMsc0JBQXNCLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFL0QsTUFBTVUsY0FBYyxDQUFDQztRQUNqQixJQUFJQSxFQUFFQyxNQUFNLENBQUNDLEtBQUssS0FBSyxPQUFPO1lBQzFCTixpQkFBaUJJLEVBQUVDLE1BQU0sQ0FBQ0UsT0FBTztZQUNqQ0wsc0JBQXNCRSxFQUFFQyxNQUFNLENBQUNFLE9BQU8sR0FBR1YsYUFBYSxFQUFFO1FBQzVELE9BQU87WUFDSCxJQUFJTyxFQUFFQyxNQUFNLENBQUNFLE9BQU8sRUFBRTtnQkFDbEJMLHNCQUFzQjt1QkFBSUQ7b0JBQW9CRyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7aUJBQUM7WUFDakUsT0FBTztnQkFDSEosc0JBQXNCRCxtQkFBbUJPLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsU0FBU0wsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dCQUMvRU4saUJBQWlCO1lBQ3JCO1FBQ0o7SUFDSjtJQUVBLHFCQUNJLDhEQUFDTiwrREFBVUE7UUFBQ0MsT0FBT0E7UUFBT0MsV0FBV0E7UUFBV0MsWUFBWUE7OzBCQUN4RCw4REFBQ2E7O29CQUFHO29CQUFtQmY7b0JBQU07Ozs7Ozs7MEJBQzdCLDhEQUFDZ0I7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7Z0JBQUtDLFVBQVUsQ0FBQ1QsSUFBTVUscUJBQXFCVixHQUFHUjs7a0NBQzNDLDhEQUFDbUI7OzBDQUNHLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBV0MsSUFBRztnQ0FBTUMsTUFBSztnQ0FBTWIsT0FBTTtnQ0FBTWMsU0FBU2pCOzs7Ozs7MENBQ2hFLDhEQUFDa0I7Z0NBQU1DLEtBQUk7MENBQU07Ozs7Ozs7Ozs7OztvQkFFcEJ6QixXQUFXMEIsR0FBRyxDQUFDLENBQUNkLE1BQU1lLHNCQUNuQiw4REFBQ1Q7OzhDQUNHLDhEQUFDQztvQ0FBTUMsTUFBSztvQ0FBV0MsSUFBSVQ7b0NBQU1VLE1BQU1WO29DQUFNSCxPQUFPRztvQ0FBTVcsU0FBU2pCO29DQUFhSSxTQUFTUixpQkFBaUJFLG1CQUFtQndCLFFBQVEsQ0FBQ2hCOzs7Ozs7OENBQ3RJLDhEQUFDWTtvQ0FBTUMsS0FBS2I7OENBQU9BOzs7Ozs7OzJCQUZiZTs7Ozs7a0NBS2QsOERBQUNFO3dCQUFPVCxNQUFLO2tDQUFTOzs7Ozs7b0JBQWdCO2tDQUFDLDhEQUFDVTs7Ozs7Ozs7Ozs7MEJBRTVDLDhEQUFDWjtnQkFBSUcsSUFBRzs7Ozs7Ozs7Ozs7O0FBR3BCO0dBdEN3QnBCO0tBQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHBlcnJ5XFxPbmVEcml2ZVxcRGVza3RvcFxcQ29sbGVnZVxcWWVhciAzXFxUMlxcQ1BTQyAzMDRcXHByb2plY3RfajRtMW5fbjB0MXZfdjdsOXQtbWFpblxcc3JjXFxhcHBcXG1lbnVpdGVtXFxwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2UtbGF5b3V0XCI7XHJcblxyXG5jb25zdCB0aXRsZSA9IFwiTWVudSBJdGVtc1wiO1xyXG5jb25zdCB0YWJsZU5hbWUgPSBcIk1lbnVJdGVtXCI7XHJcbmNvbnN0IGF0dHJpYnV0ZXMgPSBbXCJtZW51X2l0ZW1fbmFtZVwiLCBcImN1aXNpbmVcIiwgXCJwcmljZVwiLCBcImRpZXRhcnlfcmVzdHJpY3Rpb25zXCIsIFwibGljZW5zZV9yZXF1aXJlbWVudFwiLCBcImlzR291cm1ldFwiXTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUl0ZW1QYWdlKCkge1xyXG4gICAgY29uc3QgW2lzQWxsU2VsZWN0ZWQsIHNldElzQWxsU2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQXR0cmlidXRlcywgc2V0U2VsZWN0ZWRBdHRyaWJ1dGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIHNldElzQWxsU2VsZWN0ZWQoZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQXR0cmlidXRlcyhlLnRhcmdldC5jaGVja2VkID8gYXR0cmlidXRlcyA6IFtdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRBdHRyaWJ1dGVzKFsuLi5zZWxlY3RlZEF0dHJpYnV0ZXMsIGUudGFyZ2V0LnZhbHVlXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEF0dHJpYnV0ZXMoc2VsZWN0ZWRBdHRyaWJ1dGVzLmZpbHRlcihhdHRyID0+IGF0dHIgIT09IGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0FsbFNlbGVjdGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYWdlTGF5b3V0IHRpdGxlPXt0aXRsZX0gdGFibGVOYW1lPXt0YWJsZU5hbWV9IGF0dHJpYnV0ZXM9e2F0dHJpYnV0ZXN9ID5cclxuICAgICAgICAgICAgPGgyPkZpbHRlciBjb2x1bW5zIGluIHt0aXRsZX0gVGFibGU8L2gyPlxyXG4gICAgICAgICAgICA8cD5DaG9vc2Ugd2hpY2ggY29sdW1ucyB5b3Ugd2FudCB0byB2aWV3IGluIHRoZSB0YWJsZS48L3A+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gcHJvamVjdE1lbnVJdGVtVGFibGUoZSwgdGFibGVOYW1lKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImFsbFwiIG5hbWU9XCJhbGxcIiB2YWx1ZT1cImFsbFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhbGxcIj5TZWxlY3QgYWxsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2F0dHJpYnV0ZXMubWFwKChhdHRyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17YXR0cn0gbmFtZT17YXR0cn0gdmFsdWU9e2F0dHJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjaGVja2VkPXtpc0FsbFNlbGVjdGVkIHx8IHNlbGVjdGVkQXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj17YXR0cn0+e2F0dHJ9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+IEFwcGx5IDwvYnV0dG9uPiA8YnIgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwidXBkYXRlTmFtZVJlc3VsdE1zZ1wiPjwvZGl2PlxyXG4gICAgICAgIDwvUGFnZUxheW91dD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUGFnZUxheW91dCIsInRpdGxlIiwidGFibGVOYW1lIiwiYXR0cmlidXRlcyIsIk1lbnVJdGVtUGFnZSIsImlzQWxsU2VsZWN0ZWQiLCJzZXRJc0FsbFNlbGVjdGVkIiwic2VsZWN0ZWRBdHRyaWJ1dGVzIiwic2V0U2VsZWN0ZWRBdHRyaWJ1dGVzIiwiaGFuZGxlQ2xpY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjaGVja2VkIiwiZmlsdGVyIiwiYXR0ciIsImgyIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsInByb2plY3RNZW51SXRlbVRhYmxlIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwib25DbGljayIsImxhYmVsIiwiZm9yIiwibWFwIiwiaW5kZXgiLCJpbmNsdWRlcyIsImJ1dHRvbiIsImJyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/menuitem/page.js\n"));

/***/ })

});