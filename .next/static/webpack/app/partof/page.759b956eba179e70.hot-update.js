"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/partof/page",{

/***/ "(app-pages-browser)/./src/app/components/page-layout/index.js":
/*!*************************************************!*\
  !*** ./src/app/components/page-layout/index.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PageComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_scripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/scripts.js */ \"(app-pages-browser)/./src/app/api/scripts.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction PageComponent(param) {\n    let { title, tableName, attributes, children } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PageComponent.useEffect\": ()=>{\n            (0,_api_scripts_js__WEBPACK_IMPORTED_MODULE_2__.checkDbConnection)();\n            (0,_api_scripts_js__WEBPACK_IMPORTED_MODULE_2__.fetchTableData)(tableName);\n        }\n    }[\"PageComponent.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Database App\"\n            }, void 0, false, {\n                fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginLeft: '15%'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Database Connection Status:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"dbStatus\",\n                                children: \" \"\n                            }, void 0, false, {\n                                fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                                lineNumber: 16,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                id: \"loadingGif\",\n                                className: \"loading-gif\",\n                                src: \"/loading_100px.gif\",\n                                alt: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                                lineNumber: 17,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 23\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Show \",\n                            title,\n                            \" table\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        id: \"Cheftable\",\n                        border: \"1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: attributes === null || attributes === void 0 ? void 0 : attributes.map((attr, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: attr\n                                        }, index, false, {\n                                            fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                                            lineNumber: 24,\n                                            columnNumber: 63\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {}, void 0, false, {\n                                fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 23\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Reset \",\n                            title,\n                            \" table\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"If you wish to reset the table press on the reset button. If this is the first time you're running this page, you MUST use reset\"\n                    }, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"resetCheftable\",\n                        onClick: ()=>(0,_api_scripts_js__WEBPACK_IMPORTED_MODULE_2__.resetTable)(tableName),\n                        children: \" reset \"\n                    }, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 100\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"resetResultMsg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    children ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                                lineNumber: 35,\n                                columnNumber: 31\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                                lineNumber: 35,\n                                columnNumber: 37\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                                lineNumber: 35,\n                                columnNumber: 43\n                            }, this)\n                        ]\n                    }, void 0, true) : null,\n                    children,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 23\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Count the Tuples in \",\n                            title,\n                            \" Table\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"countCheftable\",\n                        onClick: ()=>(0,_api_scripts_js__WEBPACK_IMPORTED_MODULE_2__.countTable)(tableName),\n                        children: \" count \"\n                    }, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 100\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 106\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"countResultMsg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 49\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/louisluo/Desktop/304-silly-billy/src/app/components/page-layout/index.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_s(PageComponent, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = PageComponent;\nvar _c;\n$RefreshReg$(_c, \"PageComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlLWxheW91dC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3lDO0FBQ3VEO0FBRWpGLFNBQVNNLGNBQWMsS0FBMEM7UUFBMUMsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFLEdBQTFDOztJQUNsQ1QsZ0RBQVNBO21DQUFDO1lBQ05HLGtFQUFpQkE7WUFDakJDLCtEQUFjQSxDQUFDRztRQUNuQjtrQ0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNHOzswQkFDRyw4REFBQ0o7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0k7Z0JBQUlDLE9BQU87b0JBQUVDLFlBQVk7Z0JBQU07O2tDQUM1Qiw4REFBQ0M7OzRCQUFHOzBDQUNBLDhEQUFDQztnQ0FBS0MsSUFBRzswQ0FBVzs7Ozs7OzBDQUNwQiw4REFBQ0M7Z0NBQUlELElBQUc7Z0NBQWFFLFdBQVU7Z0NBQWNDLEtBQUk7Z0NBQXFCQyxLQUFJOzs7Ozs7Ozs7Ozs7a0NBRTlFLDhEQUFDQzs7Ozs7a0NBQUssOERBQUNDOzs7OztrQ0FBSyw4REFBQ0Q7Ozs7O2tDQUNiLDhEQUFDRTs7NEJBQUc7NEJBQU9oQjs0QkFBTzs7Ozs7OztrQ0FDbEIsOERBQUNpQjt3QkFBTVIsSUFBRzt3QkFBWVMsUUFBTzs7MENBQ3pCLDhEQUFDQzswQ0FDRyw0RUFBQ0M7OENBQ0lsQix1QkFBQUEsaUNBQUFBLFdBQVltQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQVUsOERBQUNDO3NEQUFnQkY7MkNBQVJDOzs7Ozs7Ozs7Ozs7Ozs7MENBR25ELDhEQUFDRTs7Ozs7Ozs7Ozs7a0NBR0wsOERBQUNYOzs7OztrQ0FBSyw4REFBQ0M7Ozs7O2tDQUFLLDhEQUFDRDs7Ozs7a0NBQ2IsOERBQUNFOzs0QkFBRzs0QkFBUWhCOzRCQUFPOzs7Ozs7O2tDQUNuQiw4REFBQzBCO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNDO3dCQUFPbEIsSUFBRzt3QkFBaUJtQixTQUFTLElBQU1qQywyREFBVUEsQ0FBQ007a0NBQVk7Ozs7OztvQkFBZ0I7a0NBQUMsOERBQUNhOzs7OztrQ0FDcEYsOERBQUNWO3dCQUFJSyxJQUFHOzs7Ozs7b0JBQ1BOLHlCQUFXOzswQ0FBRSw4REFBQ1c7Ozs7OzBDQUFLLDhEQUFDQzs7Ozs7MENBQUssOERBQUNEOzs7Ozs7dUNBQVc7b0JBQ2hDWDtrQ0FDTiw4REFBQ1c7Ozs7O2tDQUFLLDhEQUFDQzs7Ozs7a0NBQUssOERBQUNEOzs7OztrQ0FDYiw4REFBQ0U7OzRCQUFHOzRCQUFzQmhCOzRCQUFPOzs7Ozs7O2tDQUNqQyw4REFBQzJCO3dCQUFPbEIsSUFBRzt3QkFBaUJtQixTQUFTLElBQU1oQywyREFBVUEsQ0FBQ0s7a0NBQVk7Ozs7OztvQkFBZ0I7a0NBQUMsOERBQUNhOzs7OztrQ0FBSyw4REFBQ0E7Ozs7O2tDQUMxRiw4REFBQ1Y7d0JBQUlLLElBQUc7Ozs7OztvQkFBdUI7a0NBQUMsOERBQUNLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRDtHQXZDd0JmO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvbG91aXNsdW8vRGVza3RvcC8zMDQtc2lsbHktYmlsbHkvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2UtbGF5b3V0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZXNldFRhYmxlLCBjb3VudFRhYmxlLCBjaGVja0RiQ29ubmVjdGlvbiwgZmV0Y2hUYWJsZURhdGEgfSBmcm9tICcuLi8uLi9hcGkvc2NyaXB0cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUNvbXBvbmVudCh7IHRpdGxlLCB0YWJsZU5hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0pIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjaGVja0RiQ29ubmVjdGlvbigpO1xuICAgICAgICBmZXRjaFRhYmxlRGF0YSh0YWJsZU5hbWUpO1xuICAgIH0sIFtdKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dGl0bGU+RGF0YWJhc2UgQXBwPC90aXRsZT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1JScgfX0+XG4gICAgICAgICAgICAgICAgPGgxPkRhdGFiYXNlIENvbm5lY3Rpb24gU3RhdHVzOlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImRiU3RhdHVzXCI+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cImxvYWRpbmdHaWZcIiBjbGFzc05hbWU9XCJsb2FkaW5nLWdpZlwiIHNyYz0nL2xvYWRpbmdfMTAwcHguZ2lmJyBhbHQ9XCJMb2FkaW5nLi4uXCIgLz5cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDxiciAvPjxociAvPjxiciAvPlxuICAgICAgICAgICAgICAgIDxoMj5TaG93IHsgdGl0bGUgfSB0YWJsZTwvaDI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGlkPVwiQ2hlZnRhYmxlXCIgYm9yZGVyPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0dHJpYnV0ZXM/Lm1hcCgoYXR0ciwgaW5kZXgpID0+IDx0aCBrZXk9e2luZGV4fT57YXR0cn08L3RoPil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8YnIgLz48aHIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICA8aDI+UmVzZXQgeyB0aXRsZSB9IHRhYmxlPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5JZiB5b3Ugd2lzaCB0byByZXNldCB0aGUgdGFibGUgcHJlc3Mgb24gdGhlIHJlc2V0IGJ1dHRvbi4gSWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB5b3UncmUgcnVubmluZyB0aGlzIHBhZ2UsIHlvdSBNVVNUIHVzZSByZXNldDwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVzZXRDaGVmdGFibGVcIiBvbkNsaWNrPXsoKSA9PiByZXNldFRhYmxlKHRhYmxlTmFtZSl9PiByZXNldCA8L2J1dHRvbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInJlc2V0UmVzdWx0TXNnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVuID8gPD48YnIgLz48aHIgLz48YnIgLz48Lz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgICAgICAgICA8YnIgLz48aHIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICA8aDI+Q291bnQgdGhlIFR1cGxlcyBpbiB7IHRpdGxlIH0gVGFibGU8L2gyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjb3VudENoZWZ0YWJsZVwiIG9uQ2xpY2s9eygpID0+IGNvdW50VGFibGUodGFibGVOYW1lKX0+IGNvdW50IDwvYnV0dG9uPiA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY291bnRSZXN1bHRNc2dcIj48L2Rpdj4gPGJyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInJlc2V0VGFibGUiLCJjb3VudFRhYmxlIiwiY2hlY2tEYkNvbm5lY3Rpb24iLCJmZXRjaFRhYmxlRGF0YSIsIlBhZ2VDb21wb25lbnQiLCJ0aXRsZSIsInRhYmxlTmFtZSIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImRpdiIsInN0eWxlIiwibWFyZ2luTGVmdCIsImgxIiwic3BhbiIsImlkIiwiaW1nIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiYnIiLCJociIsImgyIiwidGFibGUiLCJib3JkZXIiLCJ0aGVhZCIsInRyIiwibWFwIiwiYXR0ciIsImluZGV4IiwidGgiLCJ0Ym9keSIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/page-layout/index.js\n"));

/***/ })

});