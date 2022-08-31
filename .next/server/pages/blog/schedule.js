"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/schedule";
exports.ids = ["pages/blog/schedule"];
exports.modules = {

/***/ "./pages/blog/schedule.js":
/*!********************************!*\
  !*** ./pages/blog/schedule.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Schedule),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! microcms-js-sdk */ \"microcms-js-sdk\");\n/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(microcms_js_sdk__WEBPACK_IMPORTED_MODULE_1__);\n\n//環境変数入力//\n\nconst client = (0,microcms_js_sdk__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    serviceDomain: \"7fed8ab1da424c62927c3afa949910a19479\",\n    apiKey: \"c73blog\"\n});\n///////////////\nfunction Schedule() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"記事のタイトル\"\n    }, void 0, false, {\n        fileName: \"/Users/takanoshoma/Desktop/tutorial/pages/blog/schedule.js\",\n        lineNumber: 10,\n        columnNumber: 12\n    }, this);\n};\nasync function getStaticProps() {\n    const resPromise = client.get({\n        endpoint: \"blogs\"\n    });\n    try {\n        const res = await resPromise;\n        console.log(res);\n    } catch (err) {\n        console.log(err);\n    }\n    return {\n        props: {}\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL3NjaGVkdWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBREEsVUFBVTtBQUNvQztBQUM5QyxNQUFNQyxNQUFNLEdBQUdELDZEQUFZLENBQUM7SUFDeEJFLGFBQWEsRUFBRSxzQ0FBc0M7SUFDckRDLE1BQU0sRUFBRSxTQUFTO0NBQ3BCLENBQUM7QUFDRixlQUFlO0FBRUEsU0FBU0MsUUFBUSxHQUFHO0lBQy9CLHFCQUFPLDhEQUFDQyxJQUFFO2tCQUFDLFNBQU87Ozs7O1lBQUs7Q0FDMUI7QUFHTSxlQUFlQyxjQUFjLEdBQUc7SUFDbkMsTUFBTUMsVUFBVSxHQUFHTixNQUFNLENBQUNPLEdBQUcsQ0FBQztRQUMxQkMsUUFBUSxFQUFFLE9BQU87S0FDcEIsQ0FBQztJQUVGLElBQUk7UUFDQSxNQUFNQyxHQUFHLEdBQUcsTUFBTUgsVUFBVTtRQUM1QkksT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQztLQUNuQixDQUFDLE9BQU9HLEdBQUcsRUFBRTtRQUNWRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDO0tBQ25CO0lBQ0QsT0FBTztRQUNIQyxLQUFLLEVBQUUsRUFBRTtLQUNaO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLy4vcGFnZXMvYmxvZy9zY2hlZHVsZS5qcz9iY2MzIl0sInNvdXJjZXNDb250ZW50IjpbIi8v55Kw5aKD5aSJ5pWw5YWl5YqbLy9cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJtaWNyb2Ntcy1qcy1zZGtcIlxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICBzZXJ2aWNlRG9tYWluOiBcIjdmZWQ4YWIxZGE0MjRjNjI5MjdjM2FmYTk0OTkxMGExOTQ3OVwiLFxuICAgIGFwaUtleTogXCJjNzNibG9nXCIsXG59KVxuLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjaGVkdWxlKCkge1xuICAgIHJldHVybiA8aDE+6KiY5LqL44Gu44K/44Kk44OI44OrPC9oMT5cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzUHJvbWlzZSA9IGNsaWVudC5nZXQoe1xuICAgICAgICBlbmRwb2ludDogJ2Jsb2dzJyxcbiAgICB9KVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVzUHJvbWlzZVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHt9LFxuICAgIH1cbn0iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiY2xpZW50Iiwic2VydmljZURvbWFpbiIsImFwaUtleSIsIlNjaGVkdWxlIiwiaDEiLCJnZXRTdGF0aWNQcm9wcyIsInJlc1Byb21pc2UiLCJnZXQiLCJlbmRwb2ludCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/schedule.js\n");

/***/ }),

/***/ "microcms-js-sdk":
/*!**********************************!*\
  !*** external "microcms-js-sdk" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("microcms-js-sdk");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/schedule.js"));
module.exports = __webpack_exports__;

})();