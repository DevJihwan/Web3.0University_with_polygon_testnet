import * as bip39 from '@scure/bip39';
import { wordlist } from "@scure/bip39/wordlists/english";
import { use, POSClient } from "@maticnetwork/maticjs";
import { Web3ClientPlugin} from "@maticnetwork/maticjs-web3";
import HDWalletProvider from "@truffle/hdwallet-provider";
import * as axios from 'axios';
import * as decode from 'web3-eth-abi';


const privateKey="9cf3e34444a91a01307eb7a50210aa8a3faacb8dcbfb3435d2acbca9765f4460"
const TESTNET_RPC="https://polygon-mumbai.g.alchemy.com/v2/zhG4gMMMoaqP7hmMQ52Y5KqunBN4ylUE"
const endPoint = "https://api-testnet.polygonscan.com/api";
const testAddress = "0xC17Ff54A781D0959C56dFe1fA2fC3613715470cb";
const myApikey = 'zhG4gMMMoaqP7hmMQ52Y5KqunBN4ylUE'
const _tokenAddress = "0x695D3B70310AD28320d375D95d9458630DbB6E15";
const _testNftAddress = "0xfbfed9cfbca305481bb9fcd42959a2baac198bd9";

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
    static async sendDWT(){

        const erc20Token = matic.erc20(_tokenAddress);//token instance 생성
        console.log("erc20Token : " + erc20Token);

        //test를 위한 데이터
        const testToAddress = "0xE08ca9ab888f39E5c63b194aeDe313B09A35A6Dd";
        const testAmount = 10;

        //parameter (to, amount)
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
    static async getTransactionHistory(){

        const url = "https://api-testnet.polygonscan.com/api";
        const result = await axios.get(url,{
            params:{
                module: 'account',
                action: 'txlist',
                address: testAddress,
                startblock: 0,
                endblock: 99999999,
                page: 1,
                offset: 50,//조회건수
                sort: 'desc',//조회순서
                apikey: myApikey//endpoint api key
            }
        })
        

        const resultSize = result.data.result.length;//해당 주소로 조회한 모든 블록 거래내역
        const funcName = '0xa9059cbb';//encode된 함수명
        let list = [];//decode된 거래내역만 리턴해줄 리스트

        for(let i=0; i<resultSize; i++){
            if(result.data.result[i].input.slice(0,10) === funcName){//트랜스퍼 함수명만 조회해서 데이터를 뽑아냄
                const encodeData = result.data.result[i].input.slice(10);
                console.log("encodeData : "+encodeData);    
        
                const inputData = decode.decodeParameters(['address', 'uint256'],encodeData);
                console.log(`${i}번째 inputData : ${JSON.stringify(inputData)}`);
            
                list.push({
                    transaction_digest: result.data.result[i].blockHash,
                    transaction_type: "Transfer",
                    transaction_flag: "Send",
                    recipient: inputData[0],
                    total_amount: inputData[1],
                    total_gas_fee: result.data.result[i].gasPrice,
                    timestamp: result.data.result[i].timestamp,
                })
            }
        }
        console.log("End of Loop");
        return list;
      
    }

    /*
    * 소유한 NFT 리스트 
    */
    static async getMyOwnNFTS(){
        
                     
        const url = "https://api-testnet.polygonscan.com/api";
        const result = await axios.get(url,{
            params:{

                module: 'account',
                action: 'tokennfttx',
                contractaddress: _testNftAddress,
                address: testAddress,
                page: 1,
                offset: 100,
                sort: 'asc',
                apikey: myApikey//endpoint api key
            }
        })

        const resutOfSize = result.data.result.length;
        const list = [];

        for(let i=0; i<resutOfSize; i++){
            
            if(result.data.result[i].contractAddress === _testNftAddress){
                console.log(`${i}번째 block object : ${result.data.result[i].blockHash}`)
                list.push({
                    object: result.data.result[i]
                })
            }


        }


        console.log("result : " + result);
        return result;


    }

}
