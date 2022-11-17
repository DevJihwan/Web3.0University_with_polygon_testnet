"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("popup",{

/***/ "./src/pages/Popup/pages/Nfts/GetNfts.jsx":
/*!************************************************!*\
  !*** ./src/pages/Popup/pages/Nfts/GetNfts.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './SendToken.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/index.js");
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





/***/ }),

/***/ "./src/pages/Popup/router/index.js":
/*!*****************************************!*\
  !*** ./src/pages/Popup/router/index.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/index.js");
/* harmony import */ var _pages_CreateWallet_CreateWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/CreateWallet/CreateWallet */ "./src/pages/Popup/pages/CreateWallet/CreateWallet.jsx");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Home/Home */ "./src/pages/Popup/pages/Home/Home.jsx");
/* harmony import */ var _pages_SendToken_SendToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/SendToken/SendToken */ "./src/pages/Popup/pages/SendToken/SendToken.jsx");
/* harmony import */ var _recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recoil */ "./src/pages/Popup/recoil/index.js");
/* harmony import */ var _pages_Select_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Select/Select */ "./src/pages/Popup/pages/Select/Select.jsx");
/* harmony import */ var _pages_ConfirmRecoveryPhrase_ConfirmRecoveryPhrase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/ConfirmRecoveryPhrase/ConfirmRecoveryPhrase */ "./src/pages/Popup/pages/ConfirmRecoveryPhrase/ConfirmRecoveryPhrase.jsx");
/* harmony import */ var _pages_MyWallet_MyWallet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/MyWallet/MyWallet */ "./src/pages/Popup/pages/MyWallet/MyWallet.jsx");
/* harmony import */ var _pages_Login_Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Login/Login */ "./src/pages/Popup/pages/Login/Login.jsx");
/* harmony import */ var _pages_ImportWallet_ImportWallet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/ImportWallet/ImportWallet */ "./src/pages/Popup/pages/ImportWallet/ImportWallet.jsx");
/* harmony import */ var _pages_History_History__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/History/History */ "./src/pages/Popup/pages/History/History.jsx");
/* harmony import */ var _pages_Nfts_GetNfts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/Nfts/GetNfts */ "./src/pages/Popup/pages/Nfts/GetNfts.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};














const render = () => {
  const page = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_recoil__WEBPACK_IMPORTED_MODULE_5__.pageState);

  switch (page) {
    case 'Home':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Home_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null);

    case 'Select':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Select_Select__WEBPACK_IMPORTED_MODULE_6__["default"], null);

    case 'CreateWallet':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_CreateWallet_CreateWallet__WEBPACK_IMPORTED_MODULE_2__["default"], null);

    case 'ConfirmRecoveryPhrase':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ConfirmRecoveryPhrase_ConfirmRecoveryPhrase__WEBPACK_IMPORTED_MODULE_7__["default"], null);

    case 'Login':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Login_Login__WEBPACK_IMPORTED_MODULE_9__["default"], null);

    case 'MyWallet':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_MyWallet_MyWallet__WEBPACK_IMPORTED_MODULE_8__["default"], null);

    case 'ImportWallet':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ImportWallet_ImportWallet__WEBPACK_IMPORTED_MODULE_10__["default"], null);

    case 'History':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_History_History__WEBPACK_IMPORTED_MODULE_11__["default"], null);

    case 'SendToken':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SendToken_SendToken__WEBPACK_IMPORTED_MODULE_4__["default"], null);

    case 'GetNfts':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Nfts_GetNfts__WEBPACK_IMPORTED_MODULE_12__["default"], null);

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "no page");
  }
};

__signature__(render, "useRecoilValue{page}", () => [recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue]);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(render, "render", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/router/index.js");
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
/******/ 	__webpack_require__.h = () => ("5a7d607eaf7cd8d73daa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.435ec23554e00daaf6e3.hot-update.js.map