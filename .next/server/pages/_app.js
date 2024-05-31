(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-locomotive-scroll"
var external_react_locomotive_scroll_ = __webpack_require__(2966);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./src/constants/seo/index.ts
var seo = __webpack_require__(8814);
// EXTERNAL MODULE: ./src/lib/apollo/client.ts + 1 modules
var client = __webpack_require__(7139);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./src/constants/parameters/index.ts
var parameters = __webpack_require__(7729);
;// CONCATENATED MODULE: ./src/lib/gtag.ts

// type layer
// IDが取得できない場合を想定する
const existsGaId = parameters/* GA_ID */.qh !== "";
// PVを測定する
const pageview = (path)=>{
    window.gtag("config", GA_ID, {
        page_path: path
    });
};

;// CONCATENATED MODULE: ./src/components/GoogleAnalytics/presenter.tsx




// presenter
const Presenter = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: existsGaId && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    defer: true,
                    src: `https://www.googletagmanager.com/gtag/js?id=${parameters/* GA_ID */.qh}`,
                    strategy: "afterInteractive"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    id: "ga",
                    defer: true,
                    strategy: "afterInteractive",
                    children: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());    
              gtag('config', '${parameters/* GA_ID */.qh}');
          `
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/GoogleAnalytics/container.tsx


// container
const Container = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Presenter, {
        ...props
    });
};

;// CONCATENATED MODULE: ./src/components/GoogleAnalytics/index.ts
// export layer


;// CONCATENATED MODULE: ./src/pages/_app.tsx













function MyApp({ Component , pageProps  }) {
    const { asPath  } = (0,router_.useRouter)();
    const containerRef = (0,external_react_.useRef)(null);
    const apolloClient = (0,client/* useApollo */.Uk)(pageProps);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Container, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(client_.ApolloProvider, {
                client: apolloClient,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
                        ...seo/* SEO */.H
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_recoil_.RecoilRoot, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_locomotive_scroll_.LocomotiveScrollProvider, {
                            options: {
                                smooth: true
                            },
                            watch: [],
                            location: asPath,
                            onLocationChange: (scroll)=>scroll.scrollTo(0, {
                                    duration: 0,
                                    disableLerp: true
                                }),
                            containerRef: containerRef,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `site__main__contents`,
                                "data-scroll-container": true,
                                ref: containerRef,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                        ...pageProps
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3798)


/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 4394:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 7596:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6330:
/***/ ((module) => {

"use strict";
module.exports = require("deepmerge");

/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2966:
/***/ ((module) => {

"use strict";
module.exports = require("react-locomotive-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [798,814,729,139], () => (__webpack_exec__(5359)));
module.exports = __webpack_exports__;

})();