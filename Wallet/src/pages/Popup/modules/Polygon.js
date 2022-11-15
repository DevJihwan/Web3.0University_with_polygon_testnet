const { use, POSClient } = require("@maticnetwork/maticjs");
const { Web3ClientPlugin } = require("@maticnetwork/maticjs-web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const privateKey="9cf3e34444a91a01307eb7a50210aa8a3faacb8dcbfb3435d2acbca9765f4460"
const TESTNET_RPC="https://polygon-mumbai.g.alchemy.com/v2/zhG4gMMMoaqP7hmMQ52Y5KqunBN4ylUE"
const endPoint = "https://api-testnet.polygonscan.com/api";
const testAddress = "0xC17Ff54A781D0959C56dFe1fA2fC3613715470cb";
const myApikey = 'NB422QYZ5VZSQTAXTDG1ZU2U9GFBSAVP4Q'

const matic = new POSClient();

export class Polygon{
    
    static async getTokenBalances(){
        await matic.init({
            // log: true,
            network: 'testnet',
            version: 'mumbai',
            parent: {
                provider: new HDWalletProvider(privateKey, TESTNET_RPC),
                defaultConfig: {
                    from
                }
            },
            child: {
                provider: new HDWalletProvider(privateKey, TESTNET_RPC),
                defaultConfig: {
                    from
                }
            }
    });

    }

}
