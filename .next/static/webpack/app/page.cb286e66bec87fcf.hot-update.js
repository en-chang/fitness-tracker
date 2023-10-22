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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   revalidate: function() { return /* binding */ revalidate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ revalidate,default auto */ \nvar _s = $RefreshSig$();\n\nconst revalidate = 0;\nconst App = ()=>{\n    _s();\n    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading...\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const requestCount = async ()=>{\n            try {\n                const response = await fetch(\"https://fitness-tracker-enchang.vercel.app/api/get-count\", {\n                    method: \"GET\",\n                    cache: \"no-store\"\n                });\n                const jsonResponse = await response.json();\n                console.log(jsonResponse);\n                const repCount = jsonResponse.result.rows[0].rep;\n                setCounter(repCount);\n            } catch (err) {\n                if (err.response) {\n                    console.log(err);\n                } else {\n                    console.log(\"Error: \".concat(err));\n                }\n            }\n        };\n        requestCount();\n    }, []);\n    const handleDecrement = ()=>{\n        const requestDecrement = async ()=>{\n            try {\n                const response = await fetch(\"https://fitness-tracker-enchang.vercel.app/api/decrement\", {\n                    method: \"PUT\"\n                });\n                const jsonResponse = await response.json();\n                console.log(jsonResponse);\n                setCounter(counter - 5);\n            } catch (err) {\n                if (err.response) {\n                    console.log(err);\n                } else {\n                    console.log(\"Error: \".concat(err));\n                }\n            }\n        };\n        requestDecrement();\n    };\n    const handleIncrement = ()=>{\n        const requestIncrement = async ()=>{\n            try {\n                const response = await fetch(\"https://fitness-tracker-enchang.vercel.app/api/increment\", {\n                    method: \"PUT\"\n                });\n                const jsonResponse = await response.json();\n                console.log(jsonResponse);\n                setCounter(counter + 5);\n            } catch (err) {\n                if (err.response) {\n                    console.log(err);\n                } else {\n                    console.log(\"Error: \".concat(err));\n                }\n            }\n        };\n        requestIncrement();\n    };\n    const handleReset = ()=>{\n        const requestReset = async ()=>{\n            try {\n                const response = await fetch(\"https://fitness-tracker-enchang.vercel.app/api/reset\", {\n                    method: \"PUT\"\n                });\n                const jsonResponse = await response.json();\n                console.log(jsonResponse);\n                setCounter(0);\n            } catch (err) {\n                if (err.response) {\n                    console.log(err);\n                } else {\n                    console.log(\"Error: \".concat(err));\n                }\n            }\n        };\n        requestReset();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen mx-5 mt-5 px-5 pt-5 grid grid-cols-1 justify-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-5xl\",\n                children: \"Fitness Tracker\"\n            }, void 0, false, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-5xl py-8\",\n                children: counter\n            }, void 0, false, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid justify-items-center gap-y-3 py-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"my-32 focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md px-5 py-2 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\",\n                                onClick: handleDecrement,\n                                children: \"Decrement\"\n                            }, void 0, false, {\n                                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"my-32 focus:outline-none bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md px-5 py-2 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800\",\n                                onClick: handleIncrement,\n                                children: \"Increment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"focus:outline-none bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-300 font-medium rounded-md px-10 py-2 mr-2 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800\",\n                        onClick: handleReset,\n                        children: \"Reset\"\n                    }, void 0, false, {\n                        fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                className: \"max-h-80 pt-6\",\n                controls: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"/Videos/Timer.mp4\",\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/enchang/GitHub/fitness-tracker/src/app/page.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"uQMSo6/A5i6LVTpra/lXqPGkx1g=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O2tDQUlILDhEQUFDUTt3QkFDQ0gsV0FBVTt3QkFDVkksU0FBU1A7a0NBQ1Y7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ1E7Z0JBQU1MLFdBQVU7Z0JBQWdCTSxRQUFROzBCQUN2Qyw0RUFBQ0M7b0JBQU9DLEtBQUk7b0JBQW9CQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QztHQXpITWpDO0tBQUFBO0FBMkhOLCtEQUFlQSxHQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCByZXZhbGlkYXRlID0gMDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgnTG9hZGluZy4uLicpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9maXRuZXNzLXRyYWNrZXItZW5jaGFuZy52ZXJjZWwuYXBwL2FwaS9nZXQtY291bnRgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICBjYWNoZTogJ25vLXN0b3JlJyBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coanNvblJlc3BvbnNlKTtcbiAgICAgICAgY29uc3QgcmVwQ291bnQgPSBqc29uUmVzcG9uc2UucmVzdWx0LnJvd3NbMF0ucmVwO1xuICAgICAgICBzZXRDb3VudGVyKHJlcENvdW50KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdENvdW50KCk7XG4gIH0sIFtdKVxuICBcbiAgY29uc3QgaGFuZGxlRGVjcmVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3REZWNyZW1lbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ZpdG5lc3MtdHJhY2tlci1lbmNoYW5nLnZlcmNlbC5hcHAvYXBpL2RlY3JlbWVudGAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb25SZXNwb25zZSk7XG4gICAgICAgIHNldENvdW50ZXIoY291bnRlciAtIDUpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0RGVjcmVtZW50KCk7XG4gIH1cbiAgXG4gIGNvbnN0IGhhbmRsZUluY3JlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0SW5jcmVtZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9maXRuZXNzLXRyYWNrZXItZW5jaGFuZy52ZXJjZWwuYXBwL2FwaS9pbmNyZW1lbnRgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUFVUJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uUmVzcG9uc2UpO1xuICAgICAgICBzZXRDb3VudGVyKGNvdW50ZXIgKyA1KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdEluY3JlbWVudCgpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdFJlc2V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9maXRuZXNzLXRyYWNrZXItZW5jaGFuZy52ZXJjZWwuYXBwL2FwaS9yZXNldGAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb25SZXNwb25zZSk7XG4gICAgICAgIHNldENvdW50ZXIoMClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlcXVlc3RSZXNldCgpO1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIG14LTUgbXQtNSBweC01IHB0LTUgZ3JpZCBncmlkLWNvbHMtMSBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNXhsXCI+XG4gICAgICAgIEZpdG5lc3MgVHJhY2tlclxuICAgICAgPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNXhsIHB5LThcIj5cbiAgICAgICAge2NvdW50ZXJ9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQganVzdGlmeS1pdGVtcy1jZW50ZXIgZ2FwLXktMyBweS0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMzIgZm9jdXM6b3V0bGluZS1ub25lIGJnLXJlZC03MDAgaG92ZXI6YmctcmVkLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1yZWQtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgcHgtNSBweS0yIG1yLTIgZGFyazpiZy1yZWQtNjAwIGRhcms6aG92ZXI6YmctcmVkLTcwMCBkYXJrOmZvY3VzOnJpbmctcmVkLTkwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWNyZW1lbnR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGVjcmVtZW50XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMzIgZm9jdXM6b3V0bGluZS1ub25lIGJnLWdyZWVuLTcwMCBob3ZlcjpiZy1ncmVlbi04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctZ3JlZW4tMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgcHgtNSBweS0yIG1yLTIgZGFyazpiZy1ncmVlbi02MDAgZGFyazpob3ZlcjpiZy1ncmVlbi03MDAgZGFyazpmb2N1czpyaW5nLWdyZWVuLTgwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbmNyZW1lbnR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSW5jcmVtZW50XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lIGJnLXppbmMtNzAwIGhvdmVyOmJnLXppbmMtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLXppbmMtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgcHgtMTAgcHktMiBtci0yIGRhcms6YmctemluYy02MDAgZGFyazpob3ZlcjpiZy16aW5jLTcwMCBkYXJrOmZvY3VzOnJpbmctemluYy04MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxuICAgICAgICA+XG4gICAgICAgICAgUmVzZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJtYXgtaC04MCBwdC02XCIgY29udHJvbHMgPlxuICAgICAgICA8c291cmNlIHNyYz1cIi9WaWRlb3MvVGltZXIubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiLz5cbiAgICAgIDwvdmlkZW8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBBcHAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInJldmFsaWRhdGUiLCJBcHAiLCJjb3VudGVyIiwic2V0Q291bnRlciIsInJlcXVlc3RDb3VudCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjYWNoZSIsImpzb25SZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicmVwQ291bnQiLCJyZXN1bHQiLCJyb3dzIiwicmVwIiwiZXJyIiwiaGFuZGxlRGVjcmVtZW50IiwicmVxdWVzdERlY3JlbWVudCIsImhhbmRsZUluY3JlbWVudCIsInJlcXVlc3RJbmNyZW1lbnQiLCJoYW5kbGVSZXNldCIsInJlcXVlc3RSZXNldCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2aWRlbyIsImNvbnRyb2xzIiwic291cmNlIiwic3JjIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});