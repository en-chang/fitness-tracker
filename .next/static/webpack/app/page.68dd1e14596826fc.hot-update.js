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

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    //  Counter is a state initialized to 0\n    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Function is called everytime increment button is clicked\n    const handleClick1 = ()=>{\n        // Counter state is incremented\n        setCounter(counter + 5);\n    };\n    // Function is called everytime decrement button is clicked\n    const handleClick2 = ()=>{\n        // Counter state is decremented\n        setCounter(counter - 5);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            fontSize: \"300%\",\n            position: \"absolute\",\n            width: \"100%\",\n            height: \"100%\",\n            top: \"-25%\"\n        },\n        children: [\n            \"Fitness Tracker\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontSize: \"120%\",\n                    position: \"relative\",\n                    top: \"10vh\"\n                },\n                children: counter\n            }, void 0, false, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/app/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            fontSize: \"60%\",\n                            padding: \"5px\",\n                            position: \"relative\",\n                            top: \"20vh\",\n                            marginRight: \"5px\",\n                            backgroundColor: \"red\",\n                            borderRadius: \"8%\",\n                            color: \"white\"\n                        },\n                        onClick: handleClick2,\n                        children: \"Decrement\"\n                    }, void 0, false, {\n                        fileName: \"/Users/enchang/GitHub/fitness-tracker/app/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            fontSize: \"60%\",\n                            padding: \"5px\",\n                            position: \"relative\",\n                            top: \"20vh\",\n                            marginLeft: \"5px\",\n                            backgroundColor: \"green\",\n                            borderRadius: \"8%\",\n                            color: \"white\"\n                        },\n                        onClick: handleClick1,\n                        children: \"Increment\"\n                    }, void 0, false, {\n                        fileName: \"/Users/enchang/GitHub/fitness-tracker/app/page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/enchang/GitHub/fitness-tracker/app/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"mgO7WMHyhiBnLtH7uw/qAj2Cy9A=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV3QztBQUV6QixTQUFTRTs7SUFDdEIsdUNBQXVDO0lBQ3ZDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV2QywyREFBMkQ7SUFDM0QsTUFBTUksZUFBZTtRQUNuQiwrQkFBK0I7UUFDL0JELFdBQVdELFVBQVU7SUFDdkI7SUFFQSwyREFBMkQ7SUFDM0QsTUFBTUcsZUFBZTtRQUNuQiwrQkFBK0I7UUFDL0JGLFdBQVdELFVBQVU7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsT0FBTztZQUNWQyxTQUFTO1lBQ1RDLGVBQWU7WUFDZkMsWUFBWTtZQUNaQyxnQkFBZ0I7WUFDaEJDLFVBQVU7WUFDVkMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsS0FBSztRQUNQOztZQUFHOzBCQUVELDhEQUFDVjtnQkFBSUMsT0FBTztvQkFDVkssVUFBVTtvQkFDVkMsVUFBVTtvQkFDVkcsS0FBSztnQkFDUDswQkFDR2Q7Ozs7OzswQkFFSCw4REFBQ0k7Z0JBQUlXLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBT1gsT0FBTzs0QkFDYkssVUFBVTs0QkFDVk8sU0FBUzs0QkFDVE4sVUFBVTs0QkFDVkcsS0FBSzs0QkFDTEksYUFBYTs0QkFDYkMsaUJBQWlCOzRCQUNqQkMsY0FBYzs0QkFDZEMsT0FBTzt3QkFDVDt3QkFDRUMsU0FBU25CO2tDQUNWOzs7Ozs7a0NBR0QsOERBQUNhO3dCQUFPWCxPQUFPOzRCQUNiSyxVQUFVOzRCQUNWTyxTQUFTOzRCQUNUTixVQUFVOzRCQUNWRyxLQUFLOzRCQUNMUyxZQUFZOzRCQUNaSixpQkFBaUI7NEJBQ2pCQyxjQUFjOzRCQUNkQyxPQUFPO3dCQUNUO3dCQUNFQyxTQUFTcEI7a0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBcEV3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyAgQ291bnRlciBpcyBhIHN0YXRlIGluaXRpYWxpemVkIHRvIDBcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMClcbiAgXG4gIC8vIEZ1bmN0aW9uIGlzIGNhbGxlZCBldmVyeXRpbWUgaW5jcmVtZW50IGJ1dHRvbiBpcyBjbGlja2VkXG4gIGNvbnN0IGhhbmRsZUNsaWNrMSA9ICgpID0+IHtcbiAgICAvLyBDb3VudGVyIHN0YXRlIGlzIGluY3JlbWVudGVkXG4gICAgc2V0Q291bnRlcihjb3VudGVyICsgNSlcbiAgfVxuICBcbiAgLy8gRnVuY3Rpb24gaXMgY2FsbGVkIGV2ZXJ5dGltZSBkZWNyZW1lbnQgYnV0dG9uIGlzIGNsaWNrZWRcbiAgY29uc3QgaGFuZGxlQ2xpY2syID0gKCkgPT4ge1xuICAgIC8vIENvdW50ZXIgc3RhdGUgaXMgZGVjcmVtZW50ZWRcbiAgICBzZXRDb3VudGVyKGNvdW50ZXIgLSA1KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgZm9udFNpemU6ICczMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgdG9wOiAnLTI1JScsXG4gICAgfX0+XG4gICAgICBGaXRuZXNzIFRyYWNrZXJcbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6ICcxMjAlJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHRvcDogJzEwdmgnLFxuICAgICAgfX0+XG4gICAgICAgIHtjb3VudGVyfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17e1xuICAgICAgICAgIGZvbnRTaXplOiAnNjAlJyxcbiAgICAgICAgICBwYWRkaW5nOiAnNXB4JyxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICB0b3A6ICcyMHZoJyxcbiAgICAgICAgICBtYXJnaW5SaWdodDogJzVweCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc4JScsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2syfVxuICAgICAgICA+XG4gICAgICAgICAgRGVjcmVtZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7XG4gICAgICAgICAgZm9udFNpemU6ICc2MCUnLFxuICAgICAgICAgIHBhZGRpbmc6ICc1cHgnLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIHRvcDogJzIwdmgnLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc4JScsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2sxfVxuICAgICAgICA+XG4gICAgICAgICAgSW5jcmVtZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSG9tZSIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiaGFuZGxlQ2xpY2sxIiwiaGFuZGxlQ2xpY2syIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwib25DbGljayIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});