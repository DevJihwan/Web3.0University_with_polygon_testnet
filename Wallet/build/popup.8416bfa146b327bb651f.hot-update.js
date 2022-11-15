self["webpackHotUpdatechrome_extension_boilerplate_react"]("popup",{

/***/ "./node_modules/@truffle/hdwallet-provider/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@truffle/hdwallet-provider/dist/index.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _HDWalletProvider_wallets, _HDWalletProvider_addresses;
const bip39_1 = __webpack_require__(/*! ethereum-cryptography/bip39 */ "./node_modules/@truffle/hdwallet-provider/node_modules/ethereum-cryptography/bip39/index.js");
const english_1 = __webpack_require__(/*! ethereum-cryptography/bip39/wordlists/english */ "./node_modules/@truffle/hdwallet-provider/node_modules/ethereum-cryptography/bip39/wordlists/english.js");
const EthUtil = __importStar(__webpack_require__(/*! ethereumjs-util */ "./node_modules/ethereumjs-util/dist.browser/index.js"));
const tx_1 = __webpack_require__(/*! @ethereumjs/tx */ "./node_modules/@ethereumjs/tx/dist.browser/index.js");
const common_1 = __importDefault(__webpack_require__(/*! @ethereumjs/common */ "./node_modules/@ethereumjs/common/dist.browser/index.js"));
const web3_provider_engine_1 = __importDefault(__webpack_require__(/*! web3-provider-engine */ "./node_modules/web3-provider-engine/index.js"));
// @ts-ignore - web3-provider-engine doesn't have declaration files for these subproviders
const filters_1 = __importDefault(__webpack_require__(/*! web3-provider-engine/subproviders/filters */ "./node_modules/web3-provider-engine/subproviders/filters.js"));
// @ts-ignore
const nonce_tracker_1 = __importDefault(__webpack_require__(/*! web3-provider-engine/subproviders/nonce-tracker */ "./node_modules/web3-provider-engine/subproviders/nonce-tracker.js"));
// @ts-ignore
const hooked_wallet_1 = __importDefault(__webpack_require__(/*! web3-provider-engine/subproviders/hooked-wallet */ "./node_modules/web3-provider-engine/subproviders/hooked-wallet.js"));
// @ts-ignore
const provider_1 = __importDefault(__webpack_require__(/*! web3-provider-engine/subproviders/provider */ "./node_modules/web3-provider-engine/subproviders/provider.js"));
// @ts-ignore
const rpc_1 = __importDefault(__webpack_require__(/*! web3-provider-engine/subproviders/rpc */ "./node_modules/web3-provider-engine/subproviders/rpc.js"));
// @ts-ignore
const websocket_1 = __importDefault(__webpack_require__(/*! web3-provider-engine/subproviders/websocket */ "./node_modules/web3-provider-engine/subproviders/websocket.js"));
const url_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'url'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const getOptions_1 = __webpack_require__(/*! ./constructor/getOptions */ "./node_modules/@truffle/hdwallet-provider/dist/constructor/getOptions.js");
const getPrivateKeys_1 = __webpack_require__(/*! ./constructor/getPrivateKeys */ "./node_modules/@truffle/hdwallet-provider/dist/constructor/getPrivateKeys.js");
const getMnemonic_1 = __webpack_require__(/*! ./constructor/getMnemonic */ "./node_modules/@truffle/hdwallet-provider/dist/constructor/getMnemonic.js");
const eth_sig_util_1 = __webpack_require__(/*! @metamask/eth-sig-util */ "./node_modules/@metamask/eth-sig-util/dist/index.js");
const hdwallet_1 = __webpack_require__(/*! @truffle/hdwallet */ "./node_modules/@truffle/hdwallet/dist/src/index.js");
// Important: do not use debug module. Reason: https://github.com/trufflesuite/truffle/issues/2374#issuecomment-536109086
// This line shares nonce state across multiple provider instances. Necessary
// because within truffle the wallet is repeatedly newed if it's declared in the config within a
// function, resetting nonce from tx to tx. An instance can opt out
// of this behavior by passing `shareNonce=false` to the constructor.
// See issue #65 for more
const singletonNonceSubProvider = new nonce_tracker_1.default();
class HDWalletProvider {
    constructor(...args) {
        _HDWalletProvider_wallets.set(this, void 0);
        _HDWalletProvider_addresses.set(this, void 0);
        const _a = (0, getOptions_1.getOptions)(...args), { provider, url, providerOrUrl, addressIndex = 0, numberOfAddresses = 10, shareNonce = true, derivationPath = `m/44'/60'/0'/0/`, pollingInterval = 4000, chainId, chainSettings = {} } = _a, 
        // what's left is either a mnemonic or a list of private keys
        signingAuthority = __rest(_a, ["provider", "url", "providerOrUrl", "addressIndex", "numberOfAddresses", "shareNonce", "derivationPath", "pollingInterval", "chainId", "chainSettings"]);
        const mnemonic = (0, getMnemonic_1.getMnemonic)(signingAuthority);
        const privateKeys = (0, getPrivateKeys_1.getPrivateKeys)(signingAuthority);
        this.walletHdpath = derivationPath;
        __classPrivateFieldSet(this, _HDWalletProvider_wallets, {}, "f");
        __classPrivateFieldSet(this, _HDWalletProvider_addresses, [], "f");
        this.chainSettings = chainSettings;
        this.engine = new web3_provider_engine_1.default({
            pollingInterval
        });
        let providerToUse;
        if (HDWalletProvider.isValidProvider(provider)) {
            providerToUse = provider;
        }
        else if (HDWalletProvider.isValidProvider(url)) {
            providerToUse = url;
        }
        else {
            providerToUse = providerOrUrl;
        }
        if (!HDWalletProvider.isValidProvider(providerToUse)) {
            throw new Error([
                `No provider or an invalid provider was specified: '${providerToUse}'`,
                "Please specify a valid provider or URL, using the http, https, " +
                    "ws, or wss protocol.",
                ""
            ].join("\n"));
        }
        if (mnemonic && mnemonic.phrase) {
            this.checkBIP39Mnemonic(Object.assign(Object.assign({}, mnemonic), { addressIndex,
                numberOfAddresses }));
        }
        else if (privateKeys) {
            const options = Object.assign({}, { privateKeys }, { addressIndex });
            this.ethUtilValidation(options);
        } // no need to handle else case here, since matchesNewOptions() covers it
        if (__classPrivateFieldGet(this, _HDWalletProvider_addresses, "f").length === 0) {
            throw new Error(`Could not create addresses from your mnemonic or private key(s). ` +
                `Please check that your inputs are correct.`);
        }
        const tmpAccounts = __classPrivateFieldGet(this, _HDWalletProvider_addresses, "f");
        const tmpWallets = __classPrivateFieldGet(this, _HDWalletProvider_wallets, "f");
        // if user supplied the chain id, use that - otherwise fetch it
        if (typeof chainId !== "undefined" ||
            (chainSettings && typeof chainSettings.chainId !== "undefined")) {
            this.chainId = chainId || chainSettings.chainId;
            this.initialized = Promise.resolve();
        }
        else {
            this.initialized = this.initialize();
        }
        // EIP155 compliant transactions are enabled for hardforks later
        // than or equal to "spurious dragon"
        this.hardfork =
            chainSettings && chainSettings.hardfork
                ? chainSettings.hardfork
                : "london";
        const self = this;
        this.engine.addProvider(new hooked_wallet_1.default({
            getAccounts(cb) {
                cb(null, tmpAccounts);
            },
            getPrivateKey(address, cb) {
                if (!tmpWallets[address]) {
                    cb("Account not found");
                    return;
                }
                else {
                    cb(null, tmpWallets[address].toString("hex"));
                }
            },
            signTransaction(txParams, cb) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield self.initialized;
                    // we need to rename the 'gas' field
                    txParams.gasLimit = txParams.gas;
                    delete txParams.gas;
                    let pkey;
                    const from = txParams.from.toLowerCase();
                    if (tmpWallets[from]) {
                        pkey = tmpWallets[from];
                    }
                    else {
                        cb("Account not found");
                        return;
                    }
                    const chain = self.chainId;
                    const KNOWN_CHAIN_IDS = new Set([1, 3, 4, 5, 42]);
                    let txOptions;
                    if (typeof chain !== "undefined" && KNOWN_CHAIN_IDS.has(chain)) {
                        txOptions = {
                            common: new common_1.default({ chain, hardfork: self.hardfork })
                        };
                    }
                    else if (typeof chain !== "undefined") {
                        txOptions = {
                            common: common_1.default.forCustomChain(1, {
                                name: "custom chain",
                                chainId: chain
                            }, self.hardfork)
                        };
                    }
                    // Taken from https://github.com/ethers-io/ethers.js/blob/2a7ce0e72a1e0c9469e10392b0329e75e341cf18/packages/abstract-signer/src.ts/index.ts#L215
                    const hasEip1559 = txParams.maxFeePerGas !== undefined ||
                        txParams.maxPriorityFeePerGas !== undefined;
                    const tx = hasEip1559
                        ? tx_1.FeeMarketEIP1559Transaction.fromTxData(txParams, txOptions)
                        : tx_1.Transaction.fromTxData(txParams, txOptions);
                    const signedTx = tx.sign(pkey);
                    const rawTx = `0x${signedTx.serialize().toString("hex")}`;
                    cb(null, rawTx);
                });
            },
            signMessage({ data, from }, cb) {
                const dataIfExists = data;
                if (!dataIfExists) {
                    cb("No data to sign");
                    return;
                }
                if (!tmpWallets[from]) {
                    cb("Account not found");
                    return;
                }
                let pkey = tmpWallets[from];
                const dataBuff = EthUtil.toBuffer(dataIfExists);
                const msgHashBuff = EthUtil.hashPersonalMessage(dataBuff);
                const sig = EthUtil.ecsign(msgHashBuff, pkey);
                const rpcSig = EthUtil.toRpcSig(sig.v, sig.r, sig.s);
                cb(null, rpcSig);
            },
            signPersonalMessage(...args) {
                this.signMessage(...args);
            },
            signTypedMessage({ data, from }, cb) {
                if (!data) {
                    cb("No data to sign");
                    return;
                }
                // convert address to lowercase in case it is in checksum format
                const fromAddress = from.toLowerCase();
                if (!tmpWallets[fromAddress]) {
                    cb("Account not found");
                    return;
                }
                const signature = (0, eth_sig_util_1.signTypedData)({
                    data: JSON.parse(data),
                    privateKey: tmpWallets[fromAddress],
                    version: eth_sig_util_1.SignTypedDataVersion.V4
                });
                cb(null, signature);
            }
        }));
        !shareNonce
            ? this.engine.addProvider(new nonce_tracker_1.default())
            : this.engine.addProvider(singletonNonceSubProvider);
        this.engine.addProvider(new filters_1.default());
        if (typeof providerToUse === "string") {
            const url = providerToUse;
            const providerProtocol = (url_1.default.parse(url).protocol || "http:").toLowerCase();
            switch (providerProtocol) {
                case "ws:":
                case "wss:":
                    this.engine.addProvider(new websocket_1.default({ rpcUrl: url }));
                    break;
                default:
                    this.engine.addProvider(new rpc_1.default({ rpcUrl: url }));
            }
        }
        else {
            this.engine.addProvider(new provider_1.default(providerToUse));
        }
        // Required by the provider engine.
        this.engine.start();
    }
    initialize() {
        return new Promise((resolve, reject) => {
            this.engine.sendAsync({
                jsonrpc: "2.0",
                id: Date.now(),
                method: "eth_chainId",
                params: []
            }, 
            // @ts-ignore - the type doesn't take into account the possibility
            // that response.error could be a thing
            (error, response) => {
                if (error) {
                    reject(error);
                    return;
                }
                else if (response.error) {
                    reject(response.error);
                    return;
                }
                if (isNaN(parseInt(response.result, 16))) {
                    const message = "When requesting the chain id from the node, it" +
                        `returned the malformed result ${response.result}.`;
                    throw new Error(message);
                }
                this.chainId = parseInt(response.result, 16);
                resolve();
            });
        });
    }
    // private helper to check if given mnemonic uses BIP39 passphrase protection
    checkBIP39Mnemonic({ addressIndex, numberOfAddresses, phrase, password }) {
        if (!(0, bip39_1.validateMnemonic)(phrase, english_1.wordlist)) {
            throw new Error("Mnemonic invalid or undefined");
        }
        const hdwallet = (0, hdwallet_1.createAccountGeneratorFromSeedAndPath)((0, bip39_1.mnemonicToSeedSync)(phrase, password), this.walletHdpath.replace(/\/$/, "").split("/"));
        // crank the addresses out
        for (let i = addressIndex; i < addressIndex + numberOfAddresses; i++) {
            const wallet = hdwallet(i);
            const addr = `0x${Buffer.from((0, hdwallet_1.uncompressedPublicKeyToAddress)(wallet.publicKey)).toString("hex")}`;
            __classPrivateFieldGet(this, _HDWalletProvider_addresses, "f").push(addr);
            __classPrivateFieldGet(this, _HDWalletProvider_wallets, "f")[addr] = wallet.privateKey;
        }
    }
    // private helper leveraging ethUtils to populate wallets/addresses
    ethUtilValidation({ addressIndex, privateKeys }) {
        // crank the addresses out
        for (let i = addressIndex; i < privateKeys.length; i++) {
            const privateKey = Buffer.from(privateKeys[i].replace("0x", ""), "hex");
            if (EthUtil.isValidPrivate(privateKey)) {
                const wallet = EthUtil.privateToAddress(privateKey);
                const address = `0x${wallet.toString("hex")}`;
                __classPrivateFieldGet(this, _HDWalletProvider_addresses, "f").push(address);
                __classPrivateFieldGet(this, _HDWalletProvider_wallets, "f")[address] = privateKey;
            }
        }
    }
    send(payload, 
    // @ts-ignore we patch this method so it doesn't conform to type
    callback) {
        this.initialized.then(() => {
            this.engine.sendAsync(payload, callback);
        });
    }
    sendAsync(payload, callback) {
        this.initialized.then(() => {
            this.engine.sendAsync(payload, callback);
        });
    }
    getAddress(idx) {
        if (!idx) {
            return __classPrivateFieldGet(this, _HDWalletProvider_addresses, "f")[0];
        }
        else {
            return __classPrivateFieldGet(this, _HDWalletProvider_addresses, "f")[idx];
        }
    }
    getAddresses() {
        return __classPrivateFieldGet(this, _HDWalletProvider_addresses, "f");
    }
    static isValidProvider(provider) {
        if (!provider)
            return false;
        if (typeof provider === "string") {
            const validProtocols = ["http:", "https:", "ws:", "wss:"];
            const url = url_1.default.parse(provider.toLowerCase());
            return !!(validProtocols.includes(url.protocol || "") && url.slashes);
        }
        else if ("request" in provider) {
            // provider is an 1193 provider
            return true;
        }
        else if ("send" in provider) {
            // provider is a "legacy" provider
            return true;
        }
        return false;
    }
}
_HDWalletProvider_wallets = new WeakMap(), _HDWalletProvider_addresses = new WeakMap();
module.exports = HDWalletProvider;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/backoff/index.js":
/*!***************************************!*\
  !*** ./node_modules/backoff/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var Backoff = __webpack_require__(/*! ./lib/backoff */ "./node_modules/backoff/lib/backoff.js");
var ExponentialBackoffStrategy = __webpack_require__(/*! ./lib/strategy/exponential */ "./node_modules/backoff/lib/strategy/exponential.js");
var FibonacciBackoffStrategy = __webpack_require__(/*! ./lib/strategy/fibonacci */ "./node_modules/backoff/lib/strategy/fibonacci.js");
var FunctionCall = __webpack_require__(/*! ./lib/function_call.js */ "./node_modules/backoff/lib/function_call.js");

module.exports.Backoff = Backoff;
module.exports.FunctionCall = FunctionCall;
module.exports.FibonacciStrategy = FibonacciBackoffStrategy;
module.exports.ExponentialStrategy = ExponentialBackoffStrategy;

// Constructs a Fibonacci backoff.
module.exports.fibonacci = function(options) {
    return new Backoff(new FibonacciBackoffStrategy(options));
};

// Constructs an exponential backoff.
module.exports.exponential = function(options) {
    return new Backoff(new ExponentialBackoffStrategy(options));
};

// Constructs a FunctionCall for the given function and arguments.
module.exports.call = function(fn, vargs, callback) {
    var args = Array.prototype.slice.call(arguments);
    fn = args[0];
    vargs = args.slice(1, args.length - 1);
    callback = args[args.length - 1];
    return new FunctionCall(fn, vargs, callback);
};


/***/ }),

/***/ "./node_modules/backoff/lib/backoff.js":
/*!*********************************************!*\
  !*** ./node_modules/backoff/lib/backoff.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var events = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var precond = __webpack_require__(/*! precond */ "./node_modules/precond/index.js");
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

// A class to hold the state of a backoff operation. Accepts a backoff strategy
// to generate the backoff delays.
function Backoff(backoffStrategy) {
    events.EventEmitter.call(this);

    this.backoffStrategy_ = backoffStrategy;
    this.maxNumberOfRetry_ = -1;
    this.backoffNumber_ = 0;
    this.backoffDelay_ = 0;
    this.timeoutID_ = -1;

    this.handlers = {
        backoff: this.onBackoff_.bind(this)
    };
}
util.inherits(Backoff, events.EventEmitter);

// Sets a limit, greater than 0, on the maximum number of backoffs. A 'fail'
// event will be emitted when the limit is reached.
Backoff.prototype.failAfter = function(maxNumberOfRetry) {
    precond.checkArgument(maxNumberOfRetry > 0,
        'Expected a maximum number of retry greater than 0 but got %s.',
        maxNumberOfRetry);

    this.maxNumberOfRetry_ = maxNumberOfRetry;
};

// Starts a backoff operation. Accepts an optional parameter to let the
// listeners know why the backoff operation was started.
Backoff.prototype.backoff = function(err) {
    precond.checkState(this.timeoutID_ === -1, 'Backoff in progress.');

    if (this.backoffNumber_ === this.maxNumberOfRetry_) {
        this.emit('fail', err);
        this.reset();
    } else {
        this.backoffDelay_ = this.backoffStrategy_.next();
        this.timeoutID_ = setTimeout(this.handlers.backoff, this.backoffDelay_);
        this.emit('backoff', this.backoffNumber_, this.backoffDelay_, err);
    }
};

// Handles the backoff timeout completion.
Backoff.prototype.onBackoff_ = function() {
    this.timeoutID_ = -1;
    this.emit('ready', this.backoffNumber_, this.backoffDelay_);
    this.backoffNumber_++;
};

// Stops any backoff operation and resets the backoff delay to its inital value.
Backoff.prototype.reset = function() {
    this.backoffNumber_ = 0;
    this.backoffStrategy_.reset();
    clearTimeout(this.timeoutID_);
    this.timeoutID_ = -1;
};

module.exports = Backoff;


/***/ }),

/***/ "./node_modules/backoff/lib/function_call.js":
/*!***************************************************!*\
  !*** ./node_modules/backoff/lib/function_call.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var events = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var precond = __webpack_require__(/*! precond */ "./node_modules/precond/index.js");
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var Backoff = __webpack_require__(/*! ./backoff */ "./node_modules/backoff/lib/backoff.js");
var FibonacciBackoffStrategy = __webpack_require__(/*! ./strategy/fibonacci */ "./node_modules/backoff/lib/strategy/fibonacci.js");

// Wraps a function to be called in a backoff loop.
function FunctionCall(fn, args, callback) {
    events.EventEmitter.call(this);

    precond.checkIsFunction(fn, 'Expected fn to be a function.');
    precond.checkIsArray(args, 'Expected args to be an array.');
    precond.checkIsFunction(callback, 'Expected callback to be a function.');

    this.function_ = fn;
    this.arguments_ = args;
    this.callback_ = callback;
    this.lastResult_ = [];
    this.numRetries_ = 0;

    this.backoff_ = null;
    this.strategy_ = null;
    this.failAfter_ = -1;
    this.retryPredicate_ = FunctionCall.DEFAULT_RETRY_PREDICATE_;

    this.state_ = FunctionCall.State_.PENDING;
}
util.inherits(FunctionCall, events.EventEmitter);

// States in which the call can be.
FunctionCall.State_ = {
    // Call isn't started yet.
    PENDING: 0,
    // Call is in progress.
    RUNNING: 1,
    // Call completed successfully which means that either the wrapped function
    // returned successfully or the maximal number of backoffs was reached.
    COMPLETED: 2,
    // The call was aborted.
    ABORTED: 3
};

// The default retry predicate which considers any error as retriable.
FunctionCall.DEFAULT_RETRY_PREDICATE_ = function(err) {
  return true;
};

// Checks whether the call is pending.
FunctionCall.prototype.isPending = function() {
    return this.state_ == FunctionCall.State_.PENDING;
};

// Checks whether the call is in progress.
FunctionCall.prototype.isRunning = function() {
    return this.state_ == FunctionCall.State_.RUNNING;
};

// Checks whether the call is completed.
FunctionCall.prototype.isCompleted = function() {
    return this.state_ == FunctionCall.State_.COMPLETED;
};

// Checks whether the call is aborted.
FunctionCall.prototype.isAborted = function() {
    return this.state_ == FunctionCall.State_.ABORTED;
};

// Sets the backoff strategy to use. Can only be called before the call is
// started otherwise an exception will be thrown.
FunctionCall.prototype.setStrategy = function(strategy) {
    precond.checkState(this.isPending(), 'FunctionCall in progress.');
    this.strategy_ = strategy;
    return this; // Return this for chaining.
};

// Sets the predicate which will be used to determine whether the errors
// returned from the wrapped function should be retried or not, e.g. a
// network error would be retriable while a type error would stop the
// function call.
FunctionCall.prototype.retryIf = function(retryPredicate) {
    precond.checkState(this.isPending(), 'FunctionCall in progress.');
    this.retryPredicate_ = retryPredicate;
    return this;
};

// Returns all intermediary results returned by the wrapped function since
// the initial call.
FunctionCall.prototype.getLastResult = function() {
    return this.lastResult_.concat();
};

// Returns the number of times the wrapped function call was retried.
FunctionCall.prototype.getNumRetries = function() {
    return this.numRetries_;
};

// Sets the backoff limit.
FunctionCall.prototype.failAfter = function(maxNumberOfRetry) {
    precond.checkState(this.isPending(), 'FunctionCall in progress.');
    this.failAfter_ = maxNumberOfRetry;
    return this; // Return this for chaining.
};

// Aborts the call.
FunctionCall.prototype.abort = function() {
    if (this.isCompleted() || this.isAborted()) {
      return;
    }

    if (this.isRunning()) {
        this.backoff_.reset();
    }

    this.state_ = FunctionCall.State_.ABORTED;
    this.lastResult_ = [new Error('Backoff aborted.')];
    this.emit('abort');
    this.doCallback_();
};

// Initiates the call to the wrapped function. Accepts an optional factory
// function used to create the backoff instance; used when testing.
FunctionCall.prototype.start = function(backoffFactory) {
    precond.checkState(!this.isAborted(), 'FunctionCall is aborted.');
    precond.checkState(this.isPending(), 'FunctionCall already started.');

    var strategy = this.strategy_ || new FibonacciBackoffStrategy();

    this.backoff_ = backoffFactory ?
        backoffFactory(strategy) :
        new Backoff(strategy);

    this.backoff_.on('ready', this.doCall_.bind(this, true /* isRetry */));
    this.backoff_.on('fail', this.doCallback_.bind(this));
    this.backoff_.on('backoff', this.handleBackoff_.bind(this));

    if (this.failAfter_ > 0) {
        this.backoff_.failAfter(this.failAfter_);
    }

    this.state_ = FunctionCall.State_.RUNNING;
    this.doCall_(false /* isRetry */);
};

// Calls the wrapped function.
FunctionCall.prototype.doCall_ = function(isRetry) {
    if (isRetry) {
        this.numRetries_++;
    }
    var eventArgs = ['call'].concat(this.arguments_);
    events.EventEmitter.prototype.emit.apply(this, eventArgs);
    var callback = this.handleFunctionCallback_.bind(this);
    this.function_.apply(null, this.arguments_.concat(callback));
};

// Calls the wrapped function's callback with the last result returned by the
// wrapped function.
FunctionCall.prototype.doCallback_ = function() {
    this.callback_.apply(null, this.lastResult_);
};

// Handles wrapped function's completion. This method acts as a replacement
// for the original callback function.
FunctionCall.prototype.handleFunctionCallback_ = function() {
    if (this.isAborted()) {
        return;
    }

    var args = Array.prototype.slice.call(arguments);
    this.lastResult_ = args; // Save last callback arguments.
    events.EventEmitter.prototype.emit.apply(this, ['callback'].concat(args));

    var err = args[0];
    if (err && this.retryPredicate_(err)) {
        this.backoff_.backoff(err);
    } else {
        this.state_ = FunctionCall.State_.COMPLETED;
        this.doCallback_();
    }
};

// Handles the backoff event by reemitting it.
FunctionCall.prototype.handleBackoff_ = function(number, delay, err) {
    this.emit('backoff', number, delay, err);
};

module.exports = FunctionCall;


/***/ }),

/***/ "./node_modules/backoff/lib/strategy/exponential.js":
/*!**********************************************************!*\
  !*** ./node_modules/backoff/lib/strategy/exponential.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");
var precond = __webpack_require__(/*! precond */ "./node_modules/precond/index.js");

var BackoffStrategy = __webpack_require__(/*! ./strategy */ "./node_modules/backoff/lib/strategy/strategy.js");

// Exponential backoff strategy.
function ExponentialBackoffStrategy(options) {
    BackoffStrategy.call(this, options);
    this.backoffDelay_ = 0;
    this.nextBackoffDelay_ = this.getInitialDelay();
    this.factor_ = ExponentialBackoffStrategy.DEFAULT_FACTOR;

    if (options && options.factor !== undefined) {
        precond.checkArgument(options.factor > 1,
            'Exponential factor should be greater than 1 but got %s.',
            options.factor);
        this.factor_ = options.factor;
    }
}
util.inherits(ExponentialBackoffStrategy, BackoffStrategy);

// Default multiplication factor used to compute the next backoff delay from
// the current one. The value can be overridden by passing a custom factor as
// part of the options.
ExponentialBackoffStrategy.DEFAULT_FACTOR = 2;

ExponentialBackoffStrategy.prototype.next_ = function() {
    this.backoffDelay_ = Math.min(this.nextBackoffDelay_, this.getMaxDelay());
    this.nextBackoffDelay_ = this.backoffDelay_ * this.factor_;
    return this.backoffDelay_;
};

ExponentialBackoffStrategy.prototype.reset_ = function() {
    this.backoffDelay_ = 0;
    this.nextBackoffDelay_ = this.getInitialDelay();
};

module.exports = ExponentialBackoffStrategy;


/***/ }),

/***/ "./node_modules/backoff/lib/strategy/fibonacci.js":
/*!********************************************************!*\
  !*** ./node_modules/backoff/lib/strategy/fibonacci.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var BackoffStrategy = __webpack_require__(/*! ./strategy */ "./node_modules/backoff/lib/strategy/strategy.js");

// Fibonacci backoff strategy.
function FibonacciBackoffStrategy(options) {
    BackoffStrategy.call(this, options);
    this.backoffDelay_ = 0;
    this.nextBackoffDelay_ = this.getInitialDelay();
}
util.inherits(FibonacciBackoffStrategy, BackoffStrategy);

FibonacciBackoffStrategy.prototype.next_ = function() {
    var backoffDelay = Math.min(this.nextBackoffDelay_, this.getMaxDelay());
    this.nextBackoffDelay_ += this.backoffDelay_;
    this.backoffDelay_ = backoffDelay;
    return backoffDelay;
};

FibonacciBackoffStrategy.prototype.reset_ = function() {
    this.nextBackoffDelay_ = this.getInitialDelay();
    this.backoffDelay_ = 0;
};

module.exports = FibonacciBackoffStrategy;


/***/ }),

/***/ "./node_modules/backoff/lib/strategy/strategy.js":
/*!*******************************************************!*\
  !*** ./node_modules/backoff/lib/strategy/strategy.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//      Copyright (c) 2012 Mathieu Turcotte
//      Licensed under the MIT license.

var events = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

function isDef(value) {
    return value !== undefined && value !== null;
}

// Abstract class defining the skeleton for the backoff strategies. Accepts an
// object holding the options for the backoff strategy:
//
//  * `randomisationFactor`: The randomisation factor which must be between 0
//     and 1 where 1 equates to a randomization factor of 100% and 0 to no
//     randomization.
//  * `initialDelay`: The backoff initial delay in milliseconds.
//  * `maxDelay`: The backoff maximal delay in milliseconds.
function BackoffStrategy(options) {
    options = options || {};

    if (isDef(options.initialDelay) && options.initialDelay < 1) {
        throw new Error('The initial timeout must be greater than 0.');
    } else if (isDef(options.maxDelay) && options.maxDelay < 1) {
        throw new Error('The maximal timeout must be greater than 0.');
    }

    this.initialDelay_ = options.initialDelay || 100;
    this.maxDelay_ = options.maxDelay || 10000;

    if (this.maxDelay_ <= this.initialDelay_) {
        throw new Error('The maximal backoff delay must be ' +
                        'greater than the initial backoff delay.');
    }

    if (isDef(options.randomisationFactor) &&
        (options.randomisationFactor < 0 || options.randomisationFactor > 1)) {
        throw new Error('The randomisation factor must be between 0 and 1.');
    }

    this.randomisationFactor_ = options.randomisationFactor || 0;
}

// Gets the maximal backoff delay.
BackoffStrategy.prototype.getMaxDelay = function() {
    return this.maxDelay_;
};

// Gets the initial backoff delay.
BackoffStrategy.prototype.getInitialDelay = function() {
    return this.initialDelay_;
};

// Template method that computes and returns the next backoff delay in
// milliseconds.
BackoffStrategy.prototype.next = function() {
    var backoffDelay = this.next_();
    var randomisationMultiple = 1 + Math.random() * this.randomisationFactor_;
    var randomizedDelay = Math.round(backoffDelay * randomisationMultiple);
    return randomizedDelay;
};

// Computes and returns the next backoff delay. Intended to be overridden by
// subclasses.
BackoffStrategy.prototype.next_ = function() {
    throw new Error('BackoffStrategy.next_() unimplemented.');
};

// Template method that resets the backoff delay to its initial value.
BackoffStrategy.prototype.reset = function() {
    this.reset_();
};

// Resets the backoff delay to its initial value. Intended to be overridden by
// subclasses.
BackoffStrategy.prototype.reset_ = function() {
    throw new Error('BackoffStrategy.reset_() unimplemented.');
};

module.exports = BackoffStrategy;


/***/ }),

/***/ "./node_modules/eth-rpc-errors/index.js":
/*!**********************************************!*\
  !*** ./node_modules/eth-rpc-errors/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { EthereumRpcError, EthereumProviderError } = __webpack_require__(/*! ./src/classes */ "./node_modules/eth-rpc-errors/src/classes.js")
const {
  serializeError, getMessageFromCode,
} = __webpack_require__(/*! ./src/utils */ "./node_modules/eth-rpc-errors/src/utils.js")
const ethErrors = __webpack_require__(/*! ./src/errors */ "./node_modules/eth-rpc-errors/src/errors.js")
const ERROR_CODES = __webpack_require__(/*! ./src/errorCodes.json */ "./node_modules/eth-rpc-errors/src/errorCodes.json")

module.exports = {
  ethErrors,
  EthereumRpcError,
  EthereumProviderError,
  serializeError,
  getMessageFromCode,

  /** @type ErrorCodes */
  ERROR_CODES,
}

// Types

/**
 * @typedef {Object} EthereumProviderErrorCodes
 * @property {number} userRejectedRequest
 * @property {number} unauthorized
 * @property {number} unsupportedMethod
 * @property {number} disconnected
 * @property {number} chainDisconnected
 */

/**
 * @typedef {Object} EthereumRpcErrorCodes
 * @property {number} parse
 * @property {number} invalidRequest
 * @property {number} invalidParams
 * @property {number} methodNotFound
 * @property {number} limitExceeded
 * @property {number} internal
 * @property {number} invalidInput
 * @property {number} resourceNotFound
 * @property {number} resourceUnavailable
 * @property {number} transactionRejected
 * @property {number} methodNotSupported
 */

/**
 * @typedef ErrorCodes
 * @property {EthereumRpcErrorCodes} rpc
 * @property {EthereumProviderErrorCodes} provider
 */


/***/ }),

/***/ "./node_modules/eth-rpc-errors/src/classes.js":
/*!****************************************************!*\
  !*** ./node_modules/eth-rpc-errors/src/classes.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const safeStringify = __webpack_require__(/*! fast-safe-stringify */ "./node_modules/fast-safe-stringify/index.js")

/**
 * @class JsonRpcError
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors
 * per EIP 1474.
 * Permits any integer error code.
 */
class EthereumRpcError extends Error {

  /**
   * Create an Ethereum JSON RPC error.
   *
   * @param {number} code - The integer error code.
   * @param {string} message - The string message.
   * @param {any} [data] - The error data.
   */
  constructor (code, message, data) {

    if (!Number.isInteger(code)) {
      throw new Error(
        '"code" must be an integer.',
      )
    }
    if (!message || typeof message !== 'string') {
      throw new Error(
        '"message" must be a nonempty string.',
      )
    }

    super(message)
    this.code = code
    if (data !== undefined) {
      this.data = data
    }
  }

  /**
   * Returns a plain object with all public class properties.
   *
   * @returns {object} The serialized error.
   */
  serialize () {
    const serialized = {
      code: this.code,
      message: this.message,
    }
    if (this.data !== undefined) {
      serialized.data = this.data
    }
    if (this.stack) {
      serialized.stack = this.stack
    }
    return serialized
  }

  /**
   * Return a string representation of the serialized error, omitting
   * any circular references.
   *
   * @returns {string} The serialized error as a string.
   */
  toString () {
    return safeStringify(
      this.serialize(),
      stringifyReplacer,
      2,
    )
  }
}

/**
 * @class EthereumRpcError
 * Error subclass implementing Ethereum Provider errors per EIP 1193.
 * Permits integer error codes in the [ 1000 <= 4999 ] range.
 */
class EthereumProviderError extends EthereumRpcError {

  /**
   * Create an Ethereum JSON RPC error.
   *
   * @param {number} code - The integer error code, in the [ 1000 <= 4999 ] range.
   * @param {string} message - The string message.
   * @param {any} [data] - The error data.
   */
  constructor (code, message, data) {

    if (!isValidEthProviderCode(code)) {
      throw new Error(
        '"code" must be an integer such that: 1000 <= code <= 4999',
      )
    }

    super(code, message, data)
  }
}

// Internal

function isValidEthProviderCode (code) {
  return Number.isInteger(code) && code >= 1000 && code <= 4999
}

function stringifyReplacer (_, value) {
  if (value === '[Circular]') {
    return undefined
  }
  return value
}

// Exports

module.exports = {
  EthereumRpcError,
  EthereumProviderError,
}


/***/ }),

/***/ "./node_modules/eth-rpc-errors/src/errors.js":
/*!***************************************************!*\
  !*** ./node_modules/eth-rpc-errors/src/errors.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { EthereumRpcError, EthereumProviderError } = __webpack_require__(/*! ./classes */ "./node_modules/eth-rpc-errors/src/classes.js")
const { getMessageFromCode } = __webpack_require__(/*! ./utils */ "./node_modules/eth-rpc-errors/src/utils.js")
const ERROR_CODES = __webpack_require__(/*! ./errorCodes.json */ "./node_modules/eth-rpc-errors/src/errorCodes.json")

module.exports = {
  rpc: {

    /**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    parse: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.parse, opts,
    ),

    /**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    invalidRequest: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.invalidRequest, opts,
    ),

    /**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    invalidParams: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.invalidParams, opts,
    ),

    /**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    methodNotFound: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.methodNotFound, opts,
    ),

    /**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    internal: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.internal, opts,
    ),

    /**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP 1474.
     *
     * @param {Object|string} opts - Options object
     * @param {number} opts.code - The error code
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    server: (opts) => {
      if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
        throw new Error('Ethereum RPC Server errors must provide single object argument.')
      }
      const { code } = opts
      if (!Number.isInteger(code) || code > -32005 || code < -32099) {
        throw new Error(
          '"code" must be an integer such that: -32099 <= code <= -32005',
        )
      }
      return getEthJsonRpcError(code, opts)
    },

    /**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    invalidInput: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.invalidInput, opts,
    ),

    /**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    resourceNotFound: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.resourceNotFound, opts,
    ),

    /**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    resourceUnavailable: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.resourceUnavailable, opts,
    ),

    /**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    transactionRejected: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.transactionRejected, opts,
    ),

    /**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    methodNotSupported: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.methodNotSupported, opts,
    ),

    /**
     * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    limitExceeded: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.limitExceeded, opts,
    ),
  },

  provider: {

    /**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    userRejectedRequest: (opts) => {
      return getEthProviderError(
        ERROR_CODES.provider.userRejectedRequest, opts,
      )
    },

    /**
     * Get an Ethereum Provider Unauthorized (4100) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    unauthorized: (opts) => {
      return getEthProviderError(
        ERROR_CODES.provider.unauthorized, opts,
      )
    },

    /**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    unsupportedMethod: (opts) => {
      return getEthProviderError(
        ERROR_CODES.provider.unsupportedMethod, opts,
      )
    },

    /**
     * Get an Ethereum Provider Not Connected (4900) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    disconnected: (opts) => {
      return getEthProviderError(
        ERROR_CODES.provider.disconnected, opts,
      )
    },

    /**
     * Get an Ethereum Provider Chain Not Connected (4901) error.
     *
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    chainDisconnected: (opts) => {
      return getEthProviderError(
        ERROR_CODES.provider.chainDisconnected, opts,
      )
    },

    /**
     * Get a custom Ethereum Provider error.
     *
     * @param {Object|string} opts - Options object
     * @param {number} opts.code - The error code
     * @param {string} opts.message - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    custom: (opts) => {
      if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
        throw new Error('Ethereum Provider custom errors must provide single object argument.')
      }
      const { code, message, data } = opts
      if (!message || typeof message !== 'string') {
        throw new Error(
          '"message" must be a nonempty string',
        )
      }
      return new EthereumProviderError(code, message, data)
    },
  },
}

// Internal

function getEthJsonRpcError (code, opts) {
  const [message, data] = validateOpts(opts)
  return new EthereumRpcError(
    code,
    message || getMessageFromCode(code),
    data,
  )
}

function getEthProviderError (code, opts) {
  const [message, data] = validateOpts(opts)
  return new EthereumProviderError(
    code,
    message || getMessageFromCode(code),
    data,
  )
}

function validateOpts (opts) {
  if (opts) {
    if (typeof opts === 'string') {
      return [opts]
    } else if (typeof opts === 'object' && !Array.isArray(opts)) {
      const { message, data } = opts
      return [message, data]
    }
  }
  return []
}


/***/ }),

/***/ "./node_modules/eth-rpc-errors/src/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/eth-rpc-errors/src/utils.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const errorValues = __webpack_require__(/*! ./errorValues.json */ "./node_modules/eth-rpc-errors/src/errorValues.json")
const FALLBACK_ERROR_CODE = (__webpack_require__(/*! ./errorCodes.json */ "./node_modules/eth-rpc-errors/src/errorCodes.json").rpc.internal)
const { EthereumRpcError } = __webpack_require__(/*! ./classes */ "./node_modules/eth-rpc-errors/src/classes.js")

const JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.'

const FALLBACK_MESSAGE = 'Unspecified error message. This is a bug, please report it.'

const FALLBACK_ERROR = {
  code: FALLBACK_ERROR_CODE,
  message: getMessageFromCode(FALLBACK_ERROR_CODE),
}

/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 *
 * @param {number} code - The integer error code
 * @param {string} fallbackMessage - The fallback message
 * @return {string} The corresponding message or the fallback message
 */
function getMessageFromCode (code, fallbackMessage = FALLBACK_MESSAGE) {

  if (Number.isInteger(code)) {

    const codeString = code.toString()

    if (errorValues[codeString]) {
      return errorValues[codeString].message
    }
    if (isJsonRpcServerError(code)) {
      return JSON_RPC_SERVER_ERROR_MESSAGE
    }
  }
  return fallbackMessage
}

/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 *
 * @param {number} code - The code to check
 * @return {boolean} true if the code is valid, false otherwise.
 */
function isValidCode (code) {

  if (!Number.isInteger(code)) {
    return false
  }

  const codeString = code.toString()
  if (errorValues[codeString]) {
    return true
  }

  if (isJsonRpcServerError(code)) {
    return true
  }

  // TODO: allow valid codes and messages to be extended
  // // EIP 1193 Status Codes
  // if (code >= 4000 && code <= 4999) return true

  return false
}

/**
 * Serializes the given error to an Ethereum JSON RPC-compatible error object.
 * Merely copies the given error's values if it is already compatible.
 * If the given error is not fully compatible, it will be preserved on the
 * returned object's data.originalError property.
 *
 * @param {any} error - The error to serialize.
 * @param {Object} [options] - An options object.
 * @param {Object} [options.fallbackError] - The custom fallback error values if
 * the given error is invalid.
 * @param {boolean} [options.shouldIncludeStack] - Whether the 'stack' property
 * of the given error should be included on the serialized error, if present.
 * @return {Object} A standardized, plain error object.
 */
function serializeError (
  error,
  { fallbackError = FALLBACK_ERROR, shouldIncludeStack = false } = {},
) {

  if (
    !fallbackError ||
    !Number.isInteger(fallbackError.code) ||
    typeof fallbackError.message !== 'string'
  ) {
    throw new Error(
      'Must provide fallback error with integer number code and string message.',
    )
  }

  if (error instanceof EthereumRpcError) {
    return error.serialize()
  }

  const serialized = {}

  if (error && isValidCode(error.code)) {

    serialized.code = error.code

    if (error.message && typeof error.message === 'string') {
      serialized.message = error.message
      if ('data' in error) {
        serialized.data = error.data
      }
    } else {
      serialized.message = getMessageFromCode(serialized.code)
      serialized.data = { originalError: assignOriginalError(error) }
    }

  } else {
    serialized.code = fallbackError.code
    serialized.message = (
      error && error.message
        ? error.message
        : fallbackError.message
    )
    serialized.data = { originalError: assignOriginalError(error) }
  }

  if (shouldIncludeStack && error && typeof error.stack === 'string') {
    serialized.stack = error.stack
  }
  return serialized
}

// Internal

function isJsonRpcServerError (code) {
  return code >= -32099 && code <= -32000
}

function assignOriginalError (error) {
  if (error && typeof error === 'object' && !Array.isArray(error)) {
    return { ...error }
  }
  return error
}

// Exports

module.exports = {
  getMessageFromCode,
  isValidCode,
  serializeError,
  JSON_RPC_SERVER_ERROR_MESSAGE,
}


/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof __webpack_require__.g !== "undefined") {
    win = __webpack_require__.g;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;


/***/ }),

/***/ "./node_modules/is-function/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-function/index.js ***!
  \*******************************************/
/***/ ((module) => {

module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  if (!fn) {
    return false
  }
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};


/***/ }),

/***/ "./node_modules/parse-headers/parse-headers.js":
/*!*****************************************************!*\
  !*** ./node_modules/parse-headers/parse-headers.js ***!
  \*****************************************************/
/***/ ((module) => {

var trim = function(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  var headersArr = trim(headers).split('\n')

  for (var i = 0; i < headersArr.length; i++) {
    var row = headersArr[i]
    var index = row.indexOf(':')
    , key = trim(row.slice(0, index)).toLowerCase()
    , value = trim(row.slice(index + 1))

    if (typeof(result[key]) === 'undefined') {
      result[key] = value
    } else if (isArray(result[key])) {
      result[key].push(value)
    } else {
      result[key] = [ result[key], value ]
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/precond/index.js":
/*!***************************************!*\
  !*** ./node_modules/precond/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

module.exports = __webpack_require__(/*! ./lib/checks */ "./node_modules/precond/lib/checks.js");

/***/ }),

/***/ "./node_modules/precond/lib/checks.js":
/*!********************************************!*\
  !*** ./node_modules/precond/lib/checks.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var errors = module.exports = __webpack_require__(/*! ./errors */ "./node_modules/precond/lib/errors.js");

function failCheck(ExceptionConstructor, callee, messageFormat, formatArgs) {
    messageFormat = messageFormat || '';
    var message = util.format.apply(this, [messageFormat].concat(formatArgs));
    var error = new ExceptionConstructor(message);
    Error.captureStackTrace(error, callee);
    throw error;
}

function failArgumentCheck(callee, message, formatArgs) {
    failCheck(errors.IllegalArgumentError, callee, message, formatArgs);
}

function failStateCheck(callee, message, formatArgs) {
    failCheck(errors.IllegalStateError, callee, message, formatArgs);
}

module.exports.checkArgument = function(value, message) {
    if (!value) {
        failArgumentCheck(arguments.callee, message,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkState = function(value, message) {
    if (!value) {
        failStateCheck(arguments.callee, message,
            Array.prototype.slice.call(arguments, 2));
    }
};

module.exports.checkIsDef = function(value, message) {
    if (value !== undefined) {
        return value;
    }

    failArgumentCheck(arguments.callee, message ||
        'Expected value to be defined but was undefined.',
        Array.prototype.slice.call(arguments, 2));
};

module.exports.checkIsDefAndNotNull = function(value, message) {
    // Note that undefined == null.
    if (value != null) {
        return value;
    }

    failArgumentCheck(arguments.callee, message ||
        'Expected value to be defined and not null but got "' +
        typeOf(value) + '".', Array.prototype.slice.call(arguments, 2));
};

// Fixed version of the typeOf operator which returns 'null' for null values
// and 'array' for arrays.
function typeOf(value) {
    var s = typeof value;
    if (s == 'object') {
        if (!value) {
            return 'null';
        } else if (value instanceof Array) {
            return 'array';
        }
    }
    return s;
}

function typeCheck(expect) {
    return function(value, message) {
        var type = typeOf(value);

        if (type == expect) {
            return value;
        }

        failArgumentCheck(arguments.callee, message ||
            'Expected "' + expect + '" but got "' + type + '".',
            Array.prototype.slice.call(arguments, 2));
    };
}

module.exports.checkIsString = typeCheck('string');
module.exports.checkIsArray = typeCheck('array');
module.exports.checkIsNumber = typeCheck('number');
module.exports.checkIsBoolean = typeCheck('boolean');
module.exports.checkIsFunction = typeCheck('function');
module.exports.checkIsObject = typeCheck('object');


/***/ }),

/***/ "./node_modules/precond/lib/errors.js":
/*!********************************************!*\
  !*** ./node_modules/precond/lib/errors.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

function IllegalArgumentError(message) {
    Error.call(this, message);
    this.message = message;
}
util.inherits(IllegalArgumentError, Error);

IllegalArgumentError.prototype.name = 'IllegalArgumentError';

function IllegalStateError(message) {
    Error.call(this, message);
    this.message = message;
}
util.inherits(IllegalStateError, Error);

IllegalStateError.prototype.name = 'IllegalStateError';

module.exports.IllegalStateError = IllegalStateError;
module.exports.IllegalArgumentError = IllegalArgumentError;

/***/ }),

/***/ "./node_modules/web3-provider-engine/subproviders/rpc.js":
/*!***************************************************************!*\
  !*** ./node_modules/web3-provider-engine/subproviders/rpc.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const xhr = process.browser ? __webpack_require__(/*! xhr */ "./node_modules/xhr/index.js") : __webpack_require__(/*! request */ "?c0d0")
const inherits = (__webpack_require__(/*! util */ "./node_modules/util/util.js").inherits)
const createPayload = __webpack_require__(/*! ../util/create-payload.js */ "./node_modules/web3-provider-engine/util/create-payload.js")
const Subprovider = __webpack_require__(/*! ./subprovider.js */ "./node_modules/web3-provider-engine/subproviders/subprovider.js")
const { ethErrors, serializeError } = __webpack_require__(/*! eth-rpc-errors */ "./node_modules/eth-rpc-errors/index.js")


module.exports = RpcSource

inherits(RpcSource, Subprovider)

function RpcSource(opts) {
  const self = this
  self.rpcUrl = opts.rpcUrl
}

RpcSource.prototype.handleRequest = function(payload, next, end){
  const self = this
  const targetUrl = self.rpcUrl

  // overwrite id to conflict with other concurrent users
  const sanitizedPayload = sanitizePayload(payload)
  const newPayload = createPayload(sanitizedPayload)

  xhr({
    uri: targetUrl,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPayload),
    rejectUnauthorized: false,
    timeout: 20000,
  }, function(err, res, body) {
    if (err) return end(serializeError(err))

    // check for error code
    switch (res.statusCode) {
      case 405:
        return end(ethErrors.rpc.methodNotFound())
      case 504: // Gateway timeout
        return (function(){
          let msg = `Gateway timeout. The request took too long to process. `
          msg += `This can happen when querying logs over too wide a block range.`
          const err = new Error(msg)
          return end(serializeError(err))
        })()
      case 429: // Too many requests (rate limiting)
        return (function(){
          const err = new Error(`Too Many Requests`)
          return end(serializeError(err))
        })()
      default:
        if (res.statusCode != 200) {
          const msg = 'Unknown Error: ' + res.body
          const err = new Error(msg)
          return end(serializeError(err))
        }
    }

    // parse response
    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.error(err.stack)
      return end(serializeError(err))
    }
    if (data.error) return end(data.error)

    end(null, data.result)
  })
}

// drops any non-standard params
function sanitizePayload (payload) {
  return {
    id: payload.id,
    jsonrpc: payload.jsonrpc,
    method: payload.method,
    params: payload.params,
  }
}

/***/ }),

/***/ "./node_modules/web3-provider-engine/subproviders/websocket.js":
/*!*********************************************************************!*\
  !*** ./node_modules/web3-provider-engine/subproviders/websocket.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Backoff = __webpack_require__(/*! backoff */ "./node_modules/backoff/index.js")
const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js")
const inherits = (__webpack_require__(/*! util */ "./node_modules/util/util.js").inherits)
const WebSocket = __webpack_require__.g.WebSocket || __webpack_require__(/*! ws */ "?c0c5")
const Subprovider = __webpack_require__(/*! ./subprovider */ "./node_modules/web3-provider-engine/subproviders/subprovider.js")
const createPayload = __webpack_require__(/*! ../util/create-payload */ "./node_modules/web3-provider-engine/util/create-payload.js")

class WebsocketSubprovider
 extends Subprovider {
  constructor({ rpcUrl, debug, origin }) {
    super()

    // inherit from EventEmitter
    EventEmitter.call(this)

    Object.defineProperties(this, {
      _backoff: {
        value: Backoff.exponential({
          randomisationFactor: 0.2,
          maxDelay: 5000
        })
      },
      _connectTime: {
        value: null,
        writable: true
      },
      _log: {
        value: debug
          ? (...args) => console.info.apply(console, ['[WSProvider]', ...args])
          : () => { }
      },
      _origin: {
        value: origin
      },
      _pendingRequests: {
        value: new Map()
      },
      _socket: {
        value: null,
        writable: true
      },
      _unhandledRequests: {
        value: []
      },
      _url: {
        value: rpcUrl
      }
    })

    this._handleSocketClose = this._handleSocketClose.bind(this)
    this._handleSocketMessage = this._handleSocketMessage.bind(this)
    this._handleSocketOpen = this._handleSocketOpen.bind(this)

    // Called when a backoff timeout has finished. Time to try reconnecting.
    this._backoff.on('ready', () => {
      this._openSocket()
    })

    this._openSocket()
  }

  handleRequest(payload, next, end) {
    if (!this._socket || this._socket.readyState !== WebSocket.OPEN) {
      this._unhandledRequests.push(Array.from(arguments))
      this._log('Socket not open. Request queued.')
      return
    }

    this._pendingRequests.set(payload.id, [payload, end])

    const newPayload = createPayload(payload)
    delete newPayload.origin

    this._socket.send(JSON.stringify(newPayload))
    this._log(`Sent: ${newPayload.method} #${newPayload.id}`)
  }

  _handleSocketClose({ reason, code }) {
    this._log(`Socket closed, code ${code} (${reason || 'no reason'})`)
    // If the socket has been open for longer than 5 seconds, reset the backoff
    if (this._connectTime && Date.now() - this._connectTime > 5000) {
      this._backoff.reset()
    }

    this._socket.removeEventListener('close', this._handleSocketClose)
    this._socket.removeEventListener('message', this._handleSocketMessage)
    this._socket.removeEventListener('open', this._handleSocketOpen)

    this._socket = null
    this._backoff.backoff()
  }

  _handleSocketMessage(message) {
    let payload

    try {
      payload = JSON.parse(message.data)
    } catch (e) {
      this._log('Received a message that is not valid JSON:', payload)
      return
    }

    // check if server-sent notification
    if (payload.id === undefined) {
      return this.engine.emit('data', null, payload)
    }

    // ignore if missing
    if (!this._pendingRequests.has(payload.id)) {
      return
    }

    // retrieve payload + arguments
    const [originalReq, end] = this._pendingRequests.get(payload.id)
    this._pendingRequests.delete(payload.id)

    this._log(`Received: ${originalReq.method} #${payload.id}`)

    // forward response
    if (payload.error) {
      return end(new Error(payload.error.message))
    }
    end(null, payload.result)
  }

  _handleSocketOpen() {
    this._log('Socket open.')
    this._connectTime = Date.now()

    // Any pending requests need to be resent because our session was lost
    // and will not get responses for them in our new session.
    this._pendingRequests.forEach(([payload, end]) => {
      this._unhandledRequests.push([payload, null, end])
    })
    this._pendingRequests.clear()

    const unhandledRequests = this._unhandledRequests.splice(0, this._unhandledRequests.length)
    unhandledRequests.forEach(request => {
      this.handleRequest.apply(this, request)
    })
  }

  _openSocket() {
    this._log('Opening socket...')
    this._socket = new WebSocket(this._url, [], this._origin ? {headers:{origin: this._origin}} : {})
    this._socket.addEventListener('close', this._handleSocketClose)
    this._socket.addEventListener('message', this._handleSocketMessage)
    this._socket.addEventListener('open', this._handleSocketOpen)
  }
}

// multiple inheritance
Object.assign(WebsocketSubprovider.prototype, EventEmitter.prototype)

module.exports = WebsocketSubprovider


/***/ }),

/***/ "./node_modules/xhr/index.js":
/*!***********************************!*\
  !*** ./node_modules/xhr/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var window = __webpack_require__(/*! global/window */ "./node_modules/global/window.js")
var isFunction = __webpack_require__(/*! is-function */ "./node_modules/is-function/index.js")
var parseHeaders = __webpack_require__(/*! parse-headers */ "./node_modules/parse-headers/parse-headers.js")
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")

module.exports = createXHR
// Allow use of default import syntax in TypeScript
module.exports["default"] = createXHR;
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    if(typeof options.callback === "undefined"){
        throw new Error("callback argument missing")
    }

    var called = false
    var callback = function cbOnce(err, response, body){
        if(!called){
            called = true
            options.callback(err, response, body)
        }
    }

    function readystatechange() {
        if (xhr.readyState === 4) {
            setTimeout(loadFunc, 0)
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else {
            body = xhr.responseText || getXml(xhr)
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        return callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        return callback(err, response, response.body)
    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer
    var failureResponse = {
        body: undefined,
        headers: {},
        statusCode: 0,
        method: method,
        url: uri,
        rawRequest: xhr
    }

    if ("json" in options && options.json !== false) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json === true ? body : options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.onabort = function(){
        aborted = true;
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            if (aborted) return
            aborted = true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    // Microsoft Edge browser sends "undefined" when send is called with undefined value.
    // XMLHttpRequest spec says to pass null as body to indicate no body
    // See https://github.com/naugtur/xhr/issues/100.
    xhr.send(body || null)

    return xhr


}

function getXml(xhr) {
    // xhr.responseXML will throw Exception "InvalidStateError" or "DOMException"
    // See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML.
    try {
        if (xhr.responseType === "document") {
            return xhr.responseXML
        }
        var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror"
        if (xhr.responseType === "" && !firefoxBugTakenEffect) {
            return xhr.responseXML
        }
    } catch (e) {}

    return null
}

function noop() {}


/***/ }),

/***/ "?c0d0":
/*!*************************!*\
  !*** request (ignored) ***!
  \*************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c0c5":
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/eth-rpc-errors/src/errorCodes.json":
/*!*********************************************************!*\
  !*** ./node_modules/eth-rpc-errors/src/errorCodes.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"rpc":{"invalidInput":-32000,"resourceNotFound":-32001,"resourceUnavailable":-32002,"transactionRejected":-32003,"methodNotSupported":-32004,"limitExceeded":-32005,"parse":-32700,"invalidRequest":-32600,"methodNotFound":-32601,"invalidParams":-32602,"internal":-32603},"provider":{"userRejectedRequest":4001,"unauthorized":4100,"unsupportedMethod":4200,"disconnected":4900,"chainDisconnected":4901}}');

/***/ }),

/***/ "./node_modules/eth-rpc-errors/src/errorValues.json":
/*!**********************************************************!*\
  !*** ./node_modules/eth-rpc-errors/src/errorValues.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"4001":{"standard":"EIP 1193","message":"User rejected the request."},"4100":{"standard":"EIP 1193","message":"The requested account and/or method has not been authorized by the user."},"4200":{"standard":"EIP 1193","message":"The requested method is not supported by this Ethereum provider."},"4900":{"standard":"EIP 1193","message":"The provider is disconnected from all chains."},"4901":{"standard":"EIP 1193","message":"The provider is disconnected from the specified chain."},"-32700":{"standard":"JSON RPC 2.0","message":"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{"standard":"JSON RPC 2.0","message":"The JSON sent is not a valid Request object."},"-32601":{"standard":"JSON RPC 2.0","message":"The method does not exist / is not available."},"-32602":{"standard":"JSON RPC 2.0","message":"Invalid method parameter(s)."},"-32603":{"standard":"JSON RPC 2.0","message":"Internal JSON-RPC error."},"-32000":{"standard":"EIP 1474","message":"Invalid input."},"-32001":{"standard":"EIP 1474","message":"Resource not found."},"-32002":{"standard":"EIP 1474","message":"Resource unavailable."},"-32003":{"standard":"EIP 1474","message":"Transaction rejected."},"-32004":{"standard":"EIP 1474","message":"Method not supported."},"-32005":{"standard":"EIP 1474","message":"Request limit exceeded."}}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("93807fe1eabc3970eb71")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.8416bfa146b327bb651f.hot-update.js.map