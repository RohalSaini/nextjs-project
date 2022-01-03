(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 776:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Header_title__duTZ8",
	"description": "Header_description__NtTnp"
};


/***/ }),

/***/ 4:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__97eC3",
	"main": "Home_main__OVLM4",
	"footer": "Home_footer__zed0_",
	"title": "Home_title__q0Qg4",
	"description": "Home_description__JhekB",
	"code": "Home_code__2i1pD"
};


/***/ }),

/***/ 358:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Nav_nav__bbBcN"
};


/***/ }),

/***/ 57:
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
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(4);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./styles/Nav.module.scss
var Nav_module = __webpack_require__(358);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./components/Nav.js



const Nav = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (Nav_module_default()).nav,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/about",
                        children: "About"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: "Contact"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Nav = (Nav);

// EXTERNAL MODULE: ./styles/Header.module.scss
var Header_module = __webpack_require__(776);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header.js


const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: (Header_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "WebDev"
                    }),
                    " News"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Header_module_default()).description,
                children: "Keep up to date"
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(549);
;// CONCATENATED MODULE: ./components/Layout.js





const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).container,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                    className: (Home_module_default()).main,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                        }),
                        children
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Layout, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Hello"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,549], () => (__webpack_exec__(57)));
module.exports = __webpack_exports__;

})();