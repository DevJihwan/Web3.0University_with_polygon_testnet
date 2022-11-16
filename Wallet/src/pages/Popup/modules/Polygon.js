import { use, POSClient } from "@maticnetwork/maticjs";
import { Web3ClientPlugin } from "@maticnetwork/maticjs-web3";
import HDWalletProvider from "@truffle/hdwallet-provider";


console.log("TEST");
const privateKey="9cf3e34444a91a01307eb7a50210aa8a3faacb8dcbfb3435d2acbca9765f4460"
const TESTNET_RPC="https://polygon-mumbai.g.alchemy.com/v2/zhG4gMMMoaqP7hmMQ52Y5KqunBN4ylUE"
const endPoint = "https://api-testnet.polygonscan.com/api";
const testAddress = "0xC17Ff54A781D0959C56dFe1fA2fC3613715470cb";
const myApikey = 'NB422QYZ5VZSQTAXTDG1ZU2U9GFBSAVP4Q'
const _tokenAddress = "0x695D3B70310AD28320d375D95d9458630DbB6E15";

use(Web3ClientPlugin)
const matic = new POSClient();

export class Polygon{
    /*
    * 잔액조회
    */
    static async getTokenBalances(){

        await matic.init({
            // log: true,
            network: 'testnet',
            version: 'mumbai',
            parent: {
                provider: new HDWalletProvider(privateKey, TESTNET_RPC),
                defaultConfig: {
                    from : testAddress
                }
            },
            child: {
              provider: new HDWalletProvider(privateKey, TESTNET_RPC),
              defaultConfig: {
                    from: testAddress
              }
            }
        });

        const erc20Token = matic.erc20(_tokenAddress);
        console.log("erc20Token : " + erc20Token);

        const balance = await erc20Token.getBalance(testAddress);
        console.log("balance : "+balance);

        return balance

    }
    /*
    *송금
    */
    static async sendMatic(){

        const erc20Token = matic.erc20(_tokenAddress);
        console.log("erc20Token : " + erc20Token);

        const testToAddress = "0xE08ca9ab888f39E5c63b194aeDe313B09A35A6Dd";
        const testAmount = 10;

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

}
