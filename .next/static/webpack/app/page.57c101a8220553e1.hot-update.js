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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst App = ()=>{\n    _s();\n    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading...\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const requestCount = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:3000/api/get-count\");\n                const jsonResponse = await response.json();\n                const repCount = jsonResponse.result.rows[0].rep;\n                setCounter(repCount);\n            } catch (err) {\n                if (err.response) {\n                    console.log(err);\n                } else {\n                    console.log(\"Error: \".concat(err));\n                }\n            }\n        };\n        requestCount();\n    }, []);\n    const handleDecrement = ()=>{\n        const requestDecrement = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:3000/api/decrement\", {\n                    method: \"PUT\"\n                });\n                const jsonResponse = await response.json();\n                setCounter(counter - 5);\n            } catch (err) {\n                if (err.response) {\n                    console.log(err);\n                } else {\n                    console.log(\"Error: \".concat(err));\n                }\n            }\n        };\n        requestDecrement();\n    };\n    const handleIncrement = ()=>{\n        const requestIncrement = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:3000/api/increment\", {\n                    method: \"PUT\"\n                });\n                const jsonResponse = await response.json();\n                setCounter(counter + 5);\n            } catch (err) {\n                if (err.response) {\n                    console.log(err);\n                } else {\n                    console.log(\"Error: \".concat(err));\n                }\n            }\n        };\n        requestIncrement();\n    };\n    const handleReset = ()=>{\n        const requestReset = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:3000/api/reset\", {\n                    method: \"PUT\"\n                });\n                const jsonResponse = await response.json();\n                setCounter(0);\n            } catch (err) {\n                if (err.response) {\n                    console.log(err);\n                } else {\n                    console.log(\"Error: \".concat(err));\n                }\n            }\n        };\n        requestReset();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex justify-center pt-14 text-4xl\",\n                children: \"Fitness Tracker\"\n            }, void 0, false, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"flex justify-center py-16 text-4xl\",\n                children: counter\n            }, void 0, false, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center space-x-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md px-5 py-3 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\",\n                        onClick: handleDecrement,\n                        children: \"Decrement\"\n                    }, void 0, false, {\n                        fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"focus:outline-none bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md px-5 py-3 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800\",\n                        onClick: handleIncrement,\n                        children: \"Increment\"\n                    }, void 0, false, {\n                        fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center my-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"focus:outline-none bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-300 font-medium rounded-md px-5 py-3 mr-2 mb-2 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800\",\n                    onClick: handleReset,\n                    children: \"Reset\"\n                }, void 0, false, {\n                    fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    className: \"\",\n                    controls: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: \"/Videos/Timer.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"uQMSo6/A5i6LVTpra/lXqPGkx1g=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFbUQ7QUFFbkQsTUFBTUcsTUFBTTs7SUFDVixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssZUFBZTtZQUNuQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTztnQkFDOUIsTUFBTUMsZUFBZSxNQUFNRixTQUFTRyxJQUFJO2dCQUN4QyxNQUFNQyxXQUFXRixhQUFhRyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUNDLEdBQUc7Z0JBQ2hEVCxXQUFXTTtZQUNiLEVBQUUsT0FBT0ksS0FBSztnQkFDWixJQUFJQSxJQUFJUixRQUFRLEVBQUU7b0JBQ2hCUyxRQUFRQyxHQUFHLENBQUNGO2dCQUNkLE9BQU87b0JBQ0xDLFFBQVFDLEdBQUcsQ0FBQyxVQUFjLE9BQUpGO2dCQUN4QjtZQUNGO1FBQ0Y7UUFFQVQ7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNWSxrQkFBa0I7UUFDdEIsTUFBTUMsbUJBQW1CO1lBQ3ZCLElBQUk7Z0JBQ0YsTUFBTVosV0FBVyxNQUFNQyxNQUFPLHVDQUEyQztvQkFBRVksUUFBUTtnQkFBTTtnQkFDekYsTUFBTVgsZUFBZSxNQUFNRixTQUFTRyxJQUFJO2dCQUN4Q0wsV0FBV0QsVUFBVTtZQUN2QixFQUFFLE9BQU9XLEtBQUs7Z0JBQ1osSUFBSUEsSUFBSVIsUUFBUSxFQUFFO29CQUNoQlMsUUFBUUMsR0FBRyxDQUFDRjtnQkFDZCxPQUFPO29CQUNMQyxRQUFRQyxHQUFHLENBQUMsVUFBYyxPQUFKRjtnQkFDeEI7WUFDRjtRQUNGO1FBQ0FJO0lBQ0Y7SUFFQSxNQUFNRSxrQkFBa0I7UUFDdEIsTUFBTUMsbUJBQW1CO1lBQ3ZCLElBQUk7Z0JBQ0YsTUFBTWYsV0FBVyxNQUFNQyxNQUFPLHVDQUEyQztvQkFBRVksUUFBUTtnQkFBTTtnQkFDekYsTUFBTVgsZUFBZSxNQUFNRixTQUFTRyxJQUFJO2dCQUN4Q0wsV0FBV0QsVUFBVTtZQUN2QixFQUFFLE9BQU9XLEtBQUs7Z0JBQ1osSUFBSUEsSUFBSVIsUUFBUSxFQUFFO29CQUNoQlMsUUFBUUMsR0FBRyxDQUFDRjtnQkFDZCxPQUFPO29CQUNMQyxRQUFRQyxHQUFHLENBQUMsVUFBYyxPQUFKRjtnQkFDeEI7WUFDRjtRQUNGO1FBQ0FPO0lBQ0Y7SUFFQSxNQUFNQyxjQUFjO1FBQ2xCLE1BQU1DLGVBQWU7WUFDbkIsSUFBSTtnQkFDRixNQUFNakIsV0FBVyxNQUFNQyxNQUFPLG1DQUF1QztvQkFBRVksUUFBUTtnQkFBTTtnQkFDckYsTUFBTVgsZUFBZSxNQUFNRixTQUFTRyxJQUFJO2dCQUN4Q0wsV0FBVztZQUNiLEVBQUUsT0FBT1UsS0FBSztnQkFDWixJQUFJQSxJQUFJUixRQUFRLEVBQUU7b0JBQ2hCUyxRQUFRQyxHQUFHLENBQUNGO2dCQUNkLE9BQU87b0JBQ0xDLFFBQVFDLEdBQUcsQ0FBQyxVQUFjLE9BQUpGO2dCQUN4QjtZQUNGO1FBQ0Y7UUFDQVM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXFDOzs7Ozs7MEJBR25ELDhEQUFDRTtnQkFBRUYsV0FBVTswQkFDVnRCOzs7Ozs7MEJBRUgsOERBQUNxQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUNDSCxXQUFVO3dCQUNWSSxTQUFTWjtrQ0FDVjs7Ozs7O2tDQUdELDhEQUFDVzt3QkFDQ0gsV0FBVTt3QkFDVkksU0FBU1Q7a0NBQ1Y7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ0k7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNHO29CQUNDSCxXQUFVO29CQUNWSSxTQUFTUDs4QkFDVjs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNFO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDSztvQkFBTUwsV0FBVTtvQkFBR00sUUFBUTs4QkFDMUIsNEVBQUNDO3dCQUFPQyxLQUFJO3dCQUFvQkMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQztHQTlHTWhDO0tBQUFBO0FBZ0hOLCtEQUFlQSxHQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoJ0xvYWRpbmcuLi4nKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3RDb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknfS9nZXQtY291bnRgKTtcbiAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCByZXBDb3VudCA9IGpzb25SZXNwb25zZS5yZXN1bHQucm93c1swXS5yZXA7XG4gICAgICAgIHNldENvdW50ZXIocmVwQ291bnQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0Q291bnQoKTtcbiAgfSwgW10pXG4gIFxuICBjb25zdCBoYW5kbGVEZWNyZW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdERlY3JlbWVudCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknfS9kZWNyZW1lbnRgLCB7IG1ldGhvZDogJ1BVVCcgfSk7XG4gICAgICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0Q291bnRlcihjb3VudGVyIC0gNSlcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlcXVlc3REZWNyZW1lbnQoKTtcbiAgfVxuICBcbiAgY29uc3QgaGFuZGxlSW5jcmVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3RJbmNyZW1lbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAkeydodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJ30vaW5jcmVtZW50YCwgeyBtZXRob2Q6ICdQVVQnIH0pO1xuICAgICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldENvdW50ZXIoY291bnRlciArIDUpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0SW5jcmVtZW50KCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0UmVzZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAkeydodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJ30vcmVzZXRgLCB7IG1ldGhvZDogJ1BVVCcgfSk7XG4gICAgICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0Q291bnRlcigwKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdFJlc2V0KCk7XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC05NlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHQtMTQgdGV4dC00eGxcIj5cbiAgICAgICAgRml0bmVzcyBUcmFja2VyXG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweS0xNiB0ZXh0LTR4bFwiPlxuICAgICAgICB7Y291bnRlcn1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTE2XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgYmctcmVkLTcwMCBob3ZlcjpiZy1yZWQtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLXJlZC0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1tZCBweC01IHB5LTMgbXItMiBtYi0yIGRhcms6YmctcmVkLTYwMCBkYXJrOmhvdmVyOmJnLXJlZC03MDAgZGFyazpmb2N1czpyaW5nLXJlZC05MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlY3JlbWVudH1cbiAgICAgICAgPlxuICAgICAgICAgIERlY3JlbWVudFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSBiZy1ncmVlbi03MDAgaG92ZXI6YmctZ3JlZW4tODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLWdyZWVuLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLW1kIHB4LTUgcHktMyBtci0yIG1iLTIgZGFyazpiZy1ncmVlbi02MDAgZGFyazpob3ZlcjpiZy1ncmVlbi03MDAgZGFyazpmb2N1czpyaW5nLWdyZWVuLTgwMFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlSW5jcmVtZW50fVxuICAgICAgICA+XG4gICAgICAgICAgSW5jcmVtZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXktOFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lIGJnLXppbmMtNzAwIGhvdmVyOmJnLXppbmMtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLXppbmMtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgcHgtNSBweS0zIG1yLTIgbWItMiBkYXJrOmJnLXppbmMtNjAwIGRhcms6aG92ZXI6YmctemluYy03MDAgZGFyazpmb2N1czpyaW5nLXppbmMtODAwXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNldH1cbiAgICAgICAgPlxuICAgICAgICAgIFJlc2V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPVwiXCIgY29udHJvbHMgPlxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL1ZpZGVvcy9UaW1lci5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIvPlxuICAgICAgICA8L3ZpZGVvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBBcHAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwcCIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwicmVxdWVzdENvdW50IiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb25SZXNwb25zZSIsImpzb24iLCJyZXBDb3VudCIsInJlc3VsdCIsInJvd3MiLCJyZXAiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVjcmVtZW50IiwicmVxdWVzdERlY3JlbWVudCIsIm1ldGhvZCIsImhhbmRsZUluY3JlbWVudCIsInJlcXVlc3RJbmNyZW1lbnQiLCJoYW5kbGVSZXNldCIsInJlcXVlc3RSZXNldCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2aWRlbyIsImNvbnRyb2xzIiwic291cmNlIiwic3JjIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});