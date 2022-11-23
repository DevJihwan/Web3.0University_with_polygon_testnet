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
/* harmony import */ var _scure_bip39__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scure/bip39 */ "./node_modules/@scure/bip39/index.js");
/* harmony import */ var _scure_bip39_wordlists_english__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scure/bip39/wordlists/english */ "./node_modules/@scure/bip39/wordlists/english.js");
/* harmony import */ var _maticnetwork_maticjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @maticnetwork/maticjs */ "./node_modules/@maticnetwork/maticjs/dist/matic.umd.js");
/* harmony import */ var _maticnetwork_maticjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_maticnetwork_maticjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _maticnetwork_maticjs_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @maticnetwork/maticjs-web3 */ "./node_modules/@maticnetwork/maticjs-web3/dist/npm.export.js");
/* harmony import */ var _maticnetwork_maticjs_web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_maticnetwork_maticjs_web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _truffle_hdwallet_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @truffle/hdwallet-provider */ "./node_modules/@truffle/hdwallet-provider/dist/index.js");
/* harmony import */ var _truffle_hdwallet_provider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_truffle_hdwallet_provider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3_eth_abi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3-eth-abi */ "./node_modules/web3-eth-abi/lib/index.js");
/* harmony import */ var web3_eth_abi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3_eth_abi__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const privateKey = "9cf3e34444a91a01307eb7a50210aa8a3faacb8dcbfb3435d2acbca9765f4460";
const TESTNET_RPC = "https://polygon-mumbai.g.alchemy.com/v2/zhG4gMMMoaqP7hmMQ52Y5KqunBN4ylUE";
const endPoint = "https://api-testnet.polygonscan.com/api";
const testAddress = "0xC17Ff54A781D0959C56dFe1fA2fC3613715470cb";
const myApikey = 'zhG4gMMMoaqP7hmMQ52Y5KqunBN4ylUE';
const _tokenAddress = "0x695D3B70310AD28320d375D95d9458630DbB6E15";
const _testNftAddress = "0xfbfed9cfbca305481bb9fcd42959a2baac198bd9";
(0,_maticnetwork_maticjs__WEBPACK_IMPORTED_MODULE_2__.use)(_maticnetwork_maticjs_web3__WEBPACK_IMPORTED_MODULE_3__.Web3ClientPlugin);
const matic = new _maticnetwork_maticjs__WEBPACK_IMPORTED_MODULE_2__.POSClient();
class Polygon {
  /*
  * 잔액조회
  */
  static async getTokenBalances() {
    await matic.init({
      // log: true,
      network: 'testnet',
      version: 'mumbai',
      parent: {
        provider: new (_truffle_hdwallet_provider__WEBPACK_IMPORTED_MODULE_4___default())(privateKey, TESTNET_RPC),
        defaultConfig: {
          from: testAddress
        }
      },
      child: {
        provider: new (_truffle_hdwallet_provider__WEBPACK_IMPORTED_MODULE_4___default())(privateKey, TESTNET_RPC),
        defaultConfig: {
          from: testAddress
        }
      }
    });
    const erc20Token = matic.erc20(_tokenAddress);
    console.log("erc20Token : " + erc20Token);
    const balance = await erc20Token.getBalance(testAddress);
    console.log("balance : " + balance);
    return balance;
  }
  /*
  *송금
  */


  static async sendDWT() {
    const erc20Token = matic.erc20(_tokenAddress); //token instance 생성

    console.log("erc20Token : " + erc20Token); //test를 위한 데이터

    const testToAddress = "0xE08ca9ab888f39E5c63b194aeDe313B09A35A6Dd";
    const testAmount = 10; //parameter (to, amount)

    const result = await erc20Token.transfer(testAmount, testToAddress);
    console.log("result : " + result);
    const txHash = await result.getTransactionHash();
    console.log("txHash : " + txHash);
    const txReceipt = await result.getReceipt();
    console.log("txReceipt : " + txReceipt);
  }
  /*
  *거래내역
  */


  static async getTransactionHistory() {
    const url = "https://api-testnet.polygonscan.com/api";
    const result = await axios__WEBPACK_IMPORTED_MODULE_5__.get(url, {
      params: {
        module: 'account',
        action: 'txlist',
        address: testAddress,
        startblock: 0,
        endblock: 99999999,
        page: 1,
        offset: 50,
        //조회건수
        sort: 'desc',
        //조회순서
        apikey: myApikey //endpoint api key

      }
    });
    const resultSize = result.data.result.length; //해당 주소로 조회한 모든 블록 거래내역

    const funcName = '0xa9059cbb'; //encode된 함수명

    let list = []; //decode된 거래내역만 리턴해줄 리스트

    for (let i = 0; i < resultSize; i++) {
      if (result.data.result[i].input.slice(0, 10) === funcName) {
        //트랜스퍼 함수명만 조회해서 데이터를 뽑아냄
        const encodeData = result.data.result[i].input.slice(10);
        console.log("encodeData : " + encodeData);
        const inputData = web3_eth_abi__WEBPACK_IMPORTED_MODULE_6__.decodeParameters(['address', 'uint256'], encodeData);
        console.log(`${i}번째 inputData : ${JSON.stringify(inputData)}`);
        list.push({
          transaction_digest: result.data.result[i].blockHash,
          transaction_type: "Transfer",
          transaction_flag: "Send",
          recipient: inputData[0],
          total_amount: inputData[1],
          total_gas_fee: result.data.result[i].gasPrice,
          timestamp: result.data.result[i].timestamp
        });
      }
    }

    console.log("End of Loop");
    return list;
  }
  /*
  * 소유한 NFT 리스트 
  */


  static async getMyOwnNFTS() {
    const url = "https://api-testnet.polygonscan.com/api";
    const result = await axios__WEBPACK_IMPORTED_MODULE_5__.get(url, {
      params: {
        module: 'account',
        action: 'tokennfttx',
        contractaddress: _testNftAddress,
        address: testAddress,
        page: 1,
        offset: 100,
        sort: 'asc',
        apikey: myApikey //endpoint api key

      }
    });
    const resutOfSize = result.data.result.length;
    const list = [];

    for (let i = 0; i < resutOfSize; i++) {
      if (result.data.result[i].contractAddress === _testNftAddress) {
        console.log(`${i}번째 block object : ${result.data.result[i].blockHash}`);
        list.push({
          object: result.data.result[i]
        });
      }
    }

    console.log("result : " + result);
    return result;
  }

}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(privateKey, "privateKey", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
  reactHotLoader.register(TESTNET_RPC, "TESTNET_RPC", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
  reactHotLoader.register(endPoint, "endPoint", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
  reactHotLoader.register(testAddress, "testAddress", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
  reactHotLoader.register(myApikey, "myApikey", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
  reactHotLoader.register(_tokenAddress, "_tokenAddress", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
  reactHotLoader.register(_testNftAddress, "_testNftAddress", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/modules/Polygon.js");
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
/******/ 	__webpack_require__.h = () => ("b405c161c84e5ad7f7fc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.b982cbda8f5ad74ce3ea.hot-update.js.map