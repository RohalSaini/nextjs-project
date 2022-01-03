"use strict";
(() => {
var exports = {};
exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./data.js
const articles = [
    {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\n' + 'suscipit recusandae consequuntur expedita et cum\n' + 'reprehenderit molestiae ut ut quas totam\n' + 'nostrum rerum est autem sunt rem eveniet architecto'
    },
    {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\n' + 'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' + 'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' + 'qui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\n' + 'voluptatem occaecati omnis eligendi aut ad\n' + 'voluptatem doloribus vel accusantium quis pariatur\n' + 'molestiae porro eius odio et labore et velit aut'
    },
    {
        userId: 1,
        id: 4,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci\n' + 'sit amet autem assumenda provident rerum culpa\n' + 'quis hic commodi nesciunt rem tenetur doloremque ipsam iure\n' + 'quis sunt voluptatem rerum illo velit'
    },
    {
        userId: 1,
        id: 5,
        title: 'nesciunt quas odio',
        body: 'repudiandae veniam quaerat sunt sed\n' + 'alias aut fugiat sit autem sed est\n' + 'voluptatem omnis possimus esse voluptatibus quis\n' + 'est aut tenetur dolor neque'
    },
    {
        userId: 1,
        id: 6,
        title: 'dolorem eum magni eos aperiam quia',
        body: 'ut aspernatur corporis harum nihil quis provident sequi\n' + 'mollitia nobis aliquid molestiae\n' + 'perspiciatis et ea nemo ab reprehenderit accusantium quas\n' + 'voluptate dolores velit et doloremque molestiae'
    }
];

// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(549);
;// CONCATENATED MODULE: ./pages/article/[id]/index.js





const Article = ({ article  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { id  } = router.query;
    console.log(article);
    console.log("Article is ");
    console.log(article);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
                title: articles[0].title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    " ",
                    id
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    " ",
                    article[0].userId
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    " ",
                    article[0].id
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    " ",
                    article[0].title
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    " ",
                    article[0].body
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: "Get Back"
            })
        ]
    }));
};
const getServerSideProps = async (context)=>{
    console.log("id is " + context.params.id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    //    console.log("url is "+`${server}/api/articles/${context.params.id}`);    
    const article = await res.json();
    console.log(article);
    return {
        props: {
            article
        }
    };
};
// export const getStaticPaths = async () => {
//     const res = await fetch(`${server}/api/articles`)
//     console.log("url is path : "+`${server}/api/articles`)
//     const articles = await res.json()
//     const ids = articles.map((article) => article.id)
//     const paths = ids.map((id) => ({params: { id: id.toString()}}))
//     return {
//         paths,
//         fallback: false
//     }
// }
/* harmony default export */ const _id_ = (Article);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,549], () => (__webpack_exec__(229)));
module.exports = __webpack_exports__;

})();