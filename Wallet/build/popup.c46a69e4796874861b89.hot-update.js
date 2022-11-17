"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("popup",{

/***/ "./src/pages/Popup/pages/SendToken/SendToken.jsx":
/*!*******************************************************!*\
  !*** ./src/pages/Popup/pages/SendToken/SendToken.jsx ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SendToken_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SendToken.css */ "./src/pages/Popup/pages/SendToken/SendToken.css");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/index.js");
/* harmony import */ var _recoil_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../recoil/index */ "./src/pages/Popup/recoil/index.js");
/* harmony import */ var _component_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Header/Header */ "./src/pages/Popup/component/Header/Header.jsx");
/* harmony import */ var _component_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Footer/Footer */ "./src/pages/Popup/component/Footer/Footer.jsx");
/* harmony import */ var _modules_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/sdk */ "./src/pages/Popup/modules/sdk.js");
/* harmony import */ var _modules_Polygon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/Polygon */ "./src/pages/Popup/modules/Polygon.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};










const SendToken = () => {
  const setPageState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_recoil_index__WEBPACK_IMPORTED_MODULE_3__.pageState);
  const pair = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_index__WEBPACK_IMPORTED_MODULE_3__.pairState);
  const [toAddress, setToAddress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [pubkey, setPubkey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('pending');
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const addressOfPub = _modules_sdk__WEBPACK_IMPORTED_MODULE_6__.SDK.getAddress(pair.getPublicKey());
    getBalance(addressOfPub);
    setPubkey(addressOfPub);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (checkSuiAddressVerify(toAddress) && checkAmount(amount)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [toAddress, amount]);

  const getBalance = async publickKey => {
    setBalance('pending');
    setBalance(await _modules_Polygon__WEBPACK_IMPORTED_MODULE_7__.Polygon.getTokenBalances());
  };
  /*
  * 화면에서 상대방 공개키 + 보내는 sui 받아서 송금 실행 
  */


  const send = async () => {
    try {
      setMessage("..."); //공개키 메인에서 페이지 전환 시 전달 받을 것, 
      // const result = await SDK.sendToken(pair, pubkey, toAddress, amount);

      const result = await _modules_Polygon__WEBPACK_IMPORTED_MODULE_7__.Polygon.sendDWT();
      setDisabled(true);
      setToAddress('');
      setAmount('');
      setMessage(`digest : ${result.EffectsCert.certificate.transactionDigest}`);
    } catch (e) {
      console.log(e);
      setMessage("Transaction failed to send");
    }
  };
  /*
  * 상대방의 주소가 입력되면 계좌 검증을 통해, 검증 결과가 true인 경우 송금 버튼을 활성화
  */


  const checkSuiAddressVerify = _toAddress => {
    //입력받은 pubkey 검증
    if (_toAddress !== '' && _toAddress.length === 42) {
      return true;
    } else {
      return false;
    }
  };

  const checkAmount = _amount => {
    try {
      if (_amount === '') {
        throw 'empty';
      }

      if (isNaN(Number(_amount)) === true) {
        throw 'NaN';
      }

      return true;
    } catch (e) {
      return false;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Send"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Send-title"
  }, "SendToken"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Send-Address-input-subtitle"
  }, "Enter or search the address of the recepient below to start sending coins."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "Send-Address-input",
    value: toAddress,
    onChange: e => setToAddress(e.target.value),
    name: "toaddress",
    placeholder: "Address"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "Send-Amuount-input",
    value: amount,
    onChange: e => setAmount(e.target.value),
    name: "amount",
    placeholder: "Amount"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "balance-check"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      'display': 'flex',
      'justifyContent': 'space-between',
      'alignItems': 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Available"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "refresh-btn",
    onClick: () => getBalance(pubkey)
  }, "refresh")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "balance"
  }, balance === 'pending' ? '...' : '0.' + balance, "  DWT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "result-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Result"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sent-message"
  }, message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: `submit-button-${disabled}`,
    onClick: send,
    type: "submit"
  }, "Transfer DWT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

__signature__(SendToken, "useSetRecoilState{setPageState}\nuseRecoilValue{pair}\nuseState{[toAddress, setToAddress]('')}\nuseState{[amount, setAmount]('')}\nuseState{[disabled, setDisabled](true)}\nuseState{[pubkey, setPubkey]('')}\nuseState{[balance, setBalance]('pending')}\nuseState{[message, setMessage]('')}\nuseEffect{}\nuseEffect{}", () => [recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue]);

const _default = SendToken;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SendToken, "SendToken", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/pages/SendToken/SendToken.jsx");
  reactHotLoader.register(_default, "default", "/Users/hana/CoP_final_project/Web3.0University_with_polygon_testnet/Wallet/src/pages/Popup/pages/SendToken/SendToken.jsx");
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
/******/ 	__webpack_require__.h = () => ("e728d44c5b2c2b257df7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.c46a69e4796874861b89.hot-update.js.map