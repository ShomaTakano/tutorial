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

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"getPostBySlug\": () => (/* binding */ getPostBySlug)\n/* harmony export */ });\n/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! microcms-js-sdk */ \"microcms-js-sdk\");\n/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = (0,microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    serviceDomain: process.env.SERVICE_DOMAIN,\n    apikey: process.env.API_KEY\n});\nasync function getPostBySlug(slug) {\n    try {\n        const post = await client.get({\n            endpoint: \"blogs\",\n            queries: {\n                filters: `slug[equals]$[slug]`\n            }\n        });\n        return post.contents[0];\n    } catch (err) {\n        console.log(\"~~ getPostBySlug ~~\");\n        console.log(err);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFFdkMsTUFBTUMsTUFBTSxHQUFHRCw2REFBWSxDQUFDO0lBQy9CRSxhQUFhLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjO0lBQ3pDQyxNQUFNLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxPQUFPO0NBQzlCLENBQUM7QUFFSyxlQUFlQyxhQUFhLENBQUNDLElBQUksRUFBRTtJQUN0QyxJQUFJO1FBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQU1ULE1BQU0sQ0FBQ1UsR0FBRyxDQUFDO1lBQzFCQyxRQUFRLEVBQUUsT0FBTztZQUNqQkMsT0FBTyxFQUFFO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUFFO1NBQzlDLENBQUM7UUFDTixPQUFPSixJQUFJLENBQUNLLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDeEIsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7UUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7UUFDbENELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7S0FDaEI7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9saWIvYXBpLmpzPzQ1NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnbWljcm9jbXMtanMtc2RrJ1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICBzZXJ2aWNlRG9tYWluOiBwcm9jZXNzLmVudi5TRVJWSUNFX0RPTUFJTixcbiAgICBhcGlrZXk6IHByb2Nlc3MuZW52LkFQSV9LRVksXG59KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdEJ5U2x1ZyhzbHVnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5nZXQoe1xuICAgICAgICAgICAgZW5kcG9pbnQ6ICdibG9ncycsXG4gICAgICAgICAgICBxdWVyaWVzOiB7IGZpbHRlcnM6IGBzbHVnW2VxdWFsc10kW3NsdWddYCB9LFxuICAgICAgICB9KVxuICAgIHJldHVybiBwb3N0LmNvbnRlbnRzWzBdICAgIFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZygnfn4gZ2V0UG9zdEJ5U2x1ZyB+ficpXG4gICAgY29uc29sZS5sb2coZXJyKSAgICBcbiAgIH1cbn0iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiY2xpZW50Iiwic2VydmljZURvbWFpbiIsInByb2Nlc3MiLCJlbnYiLCJTRVJWSUNFX0RPTUFJTiIsImFwaWtleSIsIkFQSV9LRVkiLCJnZXRQb3N0QnlTbHVnIiwic2x1ZyIsInBvc3QiLCJnZXQiLCJlbmRwb2ludCIsInF1ZXJpZXMiLCJmaWx0ZXJzIiwiY29udGVudHMiLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./pages/blog/schedule.js":
/*!********************************!*\
  !*** ./pages/blog/schedule.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Schedule),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/api.js */ \"./lib/api.js\");\n\n\nfunction Schedule() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"記事のタイトル\"\n    }, void 0, false, {\n        fileName: \"/Users/takanoshoma/Desktop/tutorial/pages/blog/schedule.js\",\n        lineNumber: 4,\n        columnNumber: 12\n    }, this);\n};\nasync function getStaticProps() {\n    const resPromise = lib_api_js__WEBPACK_IMPORTED_MODULE_1__.client.get({\n        endpoint: \"blogs\"\n    });\n    try {\n        const res = await resPromise;\n        console.log(res);\n    } catch (err) {\n        console.log(err);\n    }\n    return {\n        props: {}\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL3NjaGVkdWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBbUM7QUFFcEIsU0FBU0MsUUFBUSxHQUFHO0lBQy9CLHFCQUFPLDhEQUFDQyxJQUFFO2tCQUFDLFNBQU87Ozs7O1lBQUs7Q0FDMUI7QUFFTSxlQUFlQyxjQUFjLEdBQUc7SUFDbkMsTUFBTUMsVUFBVSxHQUFHSixrREFBVSxDQUFDO1FBQzFCTSxRQUFRLEVBQUUsT0FBTztLQUNwQixDQUFDO0lBRUYsSUFBSTtRQUNBLE1BQU1DLEdBQUcsR0FBRyxNQUFNSCxVQUFVO1FBQzVCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0tBQ25CLENBQUMsT0FBT0csR0FBRyxFQUFFO1FBQ1ZGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxHQUFHLENBQUM7S0FDbkI7SUFFRCxPQUFPO1FBQ0hDLEtBQUssRUFBRSxFQUFFO0tBQ1o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9wYWdlcy9ibG9nL3NjaGVkdWxlLmpzP2JjYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnbGliL2FwaS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NoZWR1bGUoKSB7XG4gICAgcmV0dXJuIDxoMT7oqJjkuovjga7jgr/jgqTjg4jjg6s8L2gxPlxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzUHJvbWlzZSA9IGNsaWVudC5nZXQoe1xuICAgICAgICBlbmRwb2ludDogJ2Jsb2dzJyxcbiAgICB9KVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc1Byb21pc2VcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHt9LFxuICAgIH1cbn0iXSwibmFtZXMiOlsiY2xpZW50IiwiU2NoZWR1bGUiLCJoMSIsImdldFN0YXRpY1Byb3BzIiwicmVzUHJvbWlzZSIsImdldCIsImVuZHBvaW50IiwicmVzIiwiY29uc29sZSIsImxvZyIsImVyciIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/schedule.js\n");

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