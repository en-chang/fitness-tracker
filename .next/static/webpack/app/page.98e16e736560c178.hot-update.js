"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst App = ()=>{\n    _s();\n    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleDecrement = ()=>{\n        setCounter(counter - 5);\n    };\n    const handleIncrement = ()=>{\n        setCounter(counter + 5);\n    };\n    const handleReset = ()=>{\n        setCounter(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            fontSize: \"300%\",\n            position: \"absolute\",\n            width: \"100%\",\n            height: \"100%\",\n            top: \"-15%\"\n        },\n        children: [\n            \"Fitness Tracker\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontSize: \"120%\",\n                    position: \"relative\",\n                    top: \"10vh\"\n                },\n                children: counter\n            }, void 0, false, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            fontSize: \"60%\",\n                            position: \"relative\",\n                            top: \"20vh\",\n                            marginRight: \"5px\",\n                            backgroundColor: \"red\",\n                            padding: \"4px\",\n                            borderRadius: \"3%\",\n                            color: \"white\"\n                        },\n                        onClick: handleDecrement,\n                        children: \"Decrement\"\n                    }, void 0, false, {\n                        fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            fontSize: \"60%\",\n                            position: \"relative\",\n                            top: \"20vh\",\n                            marginLeft: \"5px\",\n                            backgroundColor: \"green\",\n                            padding: \"4px\",\n                            borderRadius: \"3%\",\n                            color: \"white\"\n                        },\n                        onClick: handleIncrement,\n                        children: \"Increment\"\n                    }, void 0, false, {\n                        fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    style: {\n                        fontSize: \"60%\",\n                        position: \"relative\",\n                        top: \"20vh\",\n                        marginLeft: \"5px\",\n                        backgroundColor: \"grey\",\n                        padding: \"4px\",\n                        borderRadius: \"3%\",\n                        color: \"white\"\n                    },\n                    onClick: handleReset,\n                    children: \"Reset\"\n                }, void 0, false, {\n                    fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                    lineNumber: 71,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"relative\",\n                    top: \"25vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    width: \"600\",\n                    controls: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: \"/Videos/Timer.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"mgO7WMHyhiBnLtH7uw/qAj2Cy9A=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFd0M7QUFFeEMsTUFBTUUsTUFBTTs7SUFDVixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUM7SUFFdkMsTUFBTUksa0JBQWtCO1FBQ3RCRCxXQUFXRCxVQUFVO0lBQ3ZCO0lBRUEsTUFBTUcsa0JBQWtCO1FBQ3RCRixXQUFXRCxVQUFVO0lBQ3ZCO0lBRUEsTUFBTUksY0FBYztRQUNsQkgsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLE9BQU87WUFDVkMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLFlBQVk7WUFDWkMsZ0JBQWdCO1lBQ2hCQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLEtBQUs7UUFDUDs7WUFBRzswQkFFRCw4REFBQ1Y7Z0JBQUlDLE9BQU87b0JBQ1ZLLFVBQVU7b0JBQ1ZDLFVBQVU7b0JBQ1ZHLEtBQUs7Z0JBQ1A7MEJBQ0dmOzs7Ozs7MEJBRUgsOERBQUNLO2dCQUFJVyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQU9YLE9BQU87NEJBQ2JLLFVBQVU7NEJBQ1ZDLFVBQVU7NEJBQ1ZHLEtBQUs7NEJBQ0xHLGFBQWE7NEJBQ2JDLGlCQUFpQjs0QkFDakJDLFNBQVM7NEJBQ1RDLGNBQWM7NEJBQ2RDLE9BQU87d0JBQ1Q7d0JBQ0VDLFNBQVNyQjtrQ0FDVjs7Ozs7O2tDQUdELDhEQUFDZTt3QkFBT1gsT0FBTzs0QkFDYkssVUFBVTs0QkFDVkMsVUFBVTs0QkFDVkcsS0FBSzs0QkFDTFMsWUFBWTs0QkFDWkwsaUJBQWlCOzRCQUNqQkMsU0FBUzs0QkFDVEMsY0FBYzs0QkFDZEMsT0FBTzt3QkFDVDt3QkFDRUMsU0FBU3BCO2tDQUNWOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNFOzBCQUNELDRFQUFDWTtvQkFBT1gsT0FBTzt3QkFDWEssVUFBVTt3QkFDVkMsVUFBVTt3QkFDVkcsS0FBSzt3QkFDTFMsWUFBWTt3QkFDWkwsaUJBQWlCO3dCQUNqQkMsU0FBUzt3QkFDVEMsY0FBYzt3QkFDZEMsT0FBTztvQkFDVDtvQkFDRUMsU0FBU25COzhCQUNaOzs7Ozs7Ozs7OzswQkFJRCw4REFBQ0M7Z0JBQUlDLE9BQU87b0JBQ1ZNLFVBQVU7b0JBQ1ZHLEtBQUs7Z0JBQ1A7MEJBQ0UsNEVBQUNVO29CQUFNWixPQUFNO29CQUFNYSxRQUFROzhCQUN6Qiw0RUFBQ0M7d0JBQU9DLEtBQUk7d0JBQW9CQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9DO0dBM0ZNOUI7S0FBQUE7QUE2Rk4sK0RBQWVBLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMClcbiAgXG4gIGNvbnN0IGhhbmRsZURlY3JlbWVudCA9ICgpID0+IHtcbiAgICBzZXRDb3VudGVyKGNvdW50ZXIgLSA1KVxuICB9XG4gIFxuICBjb25zdCBoYW5kbGVJbmNyZW1lbnQgPSAoKSA9PiB7XG4gICAgc2V0Q291bnRlcihjb3VudGVyICsgNSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHNldENvdW50ZXIoMClcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgZm9udFNpemU6ICczMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgdG9wOiAnLTE1JScsXG4gICAgfX0+XG4gICAgICBGaXRuZXNzIFRyYWNrZXJcbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6ICcxMjAlJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHRvcDogJzEwdmgnLFxuICAgICAgfX0+XG4gICAgICAgIHtjb3VudGVyfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17e1xuICAgICAgICAgIGZvbnRTaXplOiAnNjAlJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICB0b3A6ICcyMHZoJyxcbiAgICAgICAgICBtYXJnaW5SaWdodDogJzVweCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgICBwYWRkaW5nOiAnNHB4JyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICczJScsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlRGVjcmVtZW50fVxuICAgICAgICA+XG4gICAgICAgICAgRGVjcmVtZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7XG4gICAgICAgICAgZm9udFNpemU6ICc2MCUnLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIHRvcDogJzIwdmgnLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICBwYWRkaW5nOiAnNHB4JyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICczJScsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlSW5jcmVtZW50fVxuICAgICAgICA+XG4gICAgICAgICAgSW5jcmVtZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBzdHlsZT17e1xuICAgICAgICAgIGZvbnRTaXplOiAnNjAlJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICB0b3A6ICcyMHZoJyxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnNXB4JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmV5JyxcbiAgICAgICAgICBwYWRkaW5nOiAnNHB4JyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICczJScsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZXR9XG4gICAgICA+XG4gICAgICAgIFJlc2V0XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdG9wOiAnMjV2aCcsXG4gICAgICB9fT5cbiAgICAgICAgPHZpZGVvIHdpZHRoPVwiNjAwXCIgY29udHJvbHMgPlxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL1ZpZGVvcy9UaW1lci5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIvPlxuICAgICAgICA8L3ZpZGVvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBBcHAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFwcCIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiaGFuZGxlRGVjcmVtZW50IiwiaGFuZGxlSW5jcmVtZW50IiwiaGFuZGxlUmVzZXQiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJvbkNsaWNrIiwibWFyZ2luTGVmdCIsInZpZGVvIiwiY29udHJvbHMiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});