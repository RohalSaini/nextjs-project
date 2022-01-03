(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 517:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "Article_grid__SpR8S",
	"card": "Article_card__lpYba",
	"logo": "Article_logo__0GlVS",
	"title": "Article_title__VZJwp"
};


/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./styles/Article.module.scss
var Article_module = __webpack_require__(517);
var Article_module_default = /*#__PURE__*/__webpack_require__.n(Article_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/ArticleItem.js



const ArticleItem = ({ article  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/article/[id]",
        as: `/article/${article.id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: (Article_module_default()).card,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    children: [
                        article.title,
                        " →"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: article.body
                })
            ]
        })
    }));
};
/* harmony default export */ const components_ArticleItem = (ArticleItem);

;// CONCATENATED MODULE: ./components/ArticleList.js



const ArticleList = ({ articles  })=>{
    console.log(articles);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Article_module_default()).grid,
        children: [
            " ",
            articles.map((article)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ArticleItem, {
                    article: article
                }, article.id)
            )
        ]
    }));
};
/* harmony default export */ const components_ArticleList = (ArticleList);

;// CONCATENATED MODULE: ./pages/index.js



function Home({ articles  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_ArticleList, {
            articles: articles
        })
    }));
};
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }
const getServerSideProps = async ()=>{
    const res = await fetch(`https://nextjs-pr.herokuapp.com/api/articles`);
    const articles = await res.json();
    return {
        props: {
            articles
        }
    };
};


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(35)));
module.exports = __webpack_exports__;

})();