"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("popup",{

/***/ "./src/pages/Popup/modules/Polygon.js":
/*!********************************************!*\
  !*** ./src/pages/Popup/modules/Polygon.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Polygon": () => (/* binding */ Polygon)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const {
  use,
  POSClient
} = __webpack_require__(/*! @maticnetwork/maticjs */ "./node_modules/@maticnetwork/maticjs/dist/matic.umd.js");

const {
  Web3ClientPlugin
} = __webpack_require__(/*! @maticnetwork/maticjs-web3 */ "./node_modules/@maticnetwork/maticjs-web3/dist/npm.export.js");

const HDWalletProvider = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@truffle/hdwallet-provider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

const privateKey = "9cf3e34444a91a01307eb7a50210aa8a3faacb8dcbfb3435d2acbca9765f4460";
const endPoint = "https://api-testnet.polygonscan.com/api";
const testAddress = "0xC17Ff54A781D0959C56dFe1fA2fC3613715470cb";
const myApikey = 'NB422QYZ5VZSQTAXTDG1ZU2U9GFBSAVP4Q';
const matic = new POSClient();
class Polygon {
  static async getTokenBalances() {
    await matic.init({
      // log: true,
      network: 'testnet',
      version: 'mumbai',
      parent: {
        provider: new HDWalletProvider(privateKey, rpc.root),
        defaultConfig: {
          from
        }
      },
      child: {
        provider: new HDWalletProvider(privateKey, rpc.child),
        defaultConfig: {
          from
        }
      }
    });
  }

}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(privateKey, "privateKey", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
  reactHotLoader.register(endPoint, "endPoint", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
  reactHotLoader.register(testAddress, "testAddress", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
  reactHotLoader.register(myApikey, "myApikey", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
  reactHotLoader.register(matic, "matic", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
  reactHotLoader.register(Polygon, "Polygon", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
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
/******/ 	__webpack_require__.h = () => ("18eb64433067fda381e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.f3b42b7c0e18b44f3ccf.hot-update.js.map