"use strict";
(() => {
var exports = {};
exports.id = 771;
exports.ids = [771];
exports.modules = {

/***/ 189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);

function handler({ query: { id  }  }, res) {
    const article1 = _data__WEBPACK_IMPORTED_MODULE_0__/* .articles.filter */ .D.filter((article)=>article.id === +id
    );
    if (article1.length > 0) {
        res.status(200).json(article1);
    } else {
        res.status(404).json({
            message: `article is not found ${id}`
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [388], () => (__webpack_exec__(189)));
module.exports = __webpack_exports__;

})();