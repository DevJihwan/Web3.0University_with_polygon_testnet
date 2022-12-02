"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("popup",{

/***/ "./src/pages/Popup/pages/Nfts/GetNfts.jsx":
/*!************************************************!*\
  !*** ./src/pages/Popup/pages/Nfts/GetNfts.jsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _GetNfts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetNfts.css */ "./src/pages/Popup/pages/Nfts/GetNfts.css");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/index.js");
/* harmony import */ var _recoil_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../recoil/index */ "./src/pages/Popup/recoil/index.js");
/* harmony import */ var _component_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Header/Header */ "./src/pages/Popup/component/Header/Header.jsx");
/* harmony import */ var _component_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Footer/Footer */ "./src/pages/Popup/component/Footer/Footer.jsx");
/* harmony import */ var _modules_Polygon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/Polygon */ "./src/pages/Popup/modules/Polygon.js");
/* harmony import */ var _component_NFTitem_NFTitem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/NFTitem/NFTitem */ "./src/pages/Popup/component/NFTitem/NFTitem.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};










const GetNfts = () => {
  const setPageState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_recoil_index__WEBPACK_IMPORTED_MODULE_3__.pageState);
  const pair = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_index__WEBPACK_IMPORTED_MODULE_3__.pairState);
  const [tokenList, setTokenList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getNFTS();
  }, []);

  const getNFTS = async () => {
    const toAddress = "0xE08ca9ab888f39E5c63b194aeDe313B09A35A6Dd";
    const tokenResult = await _modules_Polygon__WEBPACK_IMPORTED_MODULE_6__.Polygon.getMyOwnNFTS(toAddress);
    const tokenList = tokenResult.data.result.length;
    console.log("tokenResult : " + tokenResult);
    setTokenList(tokenList);
  };

  const rendering = () => {
    const result = [];

    for (let i = 0; i < tokenList; i++) {
      result.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NFTitem_NFTitem__WEBPACK_IMPORTED_MODULE_7__["default"], null, " "));
    }

    return result;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "GetNfts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "GetNfts-box"
  }, tokenList === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "GetNfts-loading"
  }, " empty ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, rendering())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

__signature__(GetNfts, "useSetRecoilState{setPageState}\nuseRecoilValue{pair}\nuseState{[tokenList, setTokenList]([])}\nuseEffect{}", () => [recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue]);

const _default = GetNfts;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GetNfts, "GetNfts", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/pages/Nfts/GetNfts.jsx");
  reactHotLoader.register(_default, "default", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/pages/Nfts/GetNfts.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7c2a50752f7aa2f239d2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.e78d54787df812fee419.hot-update.js.map