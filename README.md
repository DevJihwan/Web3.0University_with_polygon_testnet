# Web3.0@University

๐๐ปโโ๏ธ [Team]
============
 * ์์งํ, ๊น๋ค์, ์กฐ์งํฌ, ํ์ํ


๐ป [๊ฐ๋ฐํ๊ฒฝ]
==========
 * ์ธ์ด : React, Node.js, Mysql
 * ๋ผ์ด๋ธ๋ฌ๋ฆฌ : ether.js, web3.js
 * Network : Polygon Testnet (Mumbai)
 * ํ๋ ์์ํฌ : Hardhat

๐ก [port]
=========
 * Front : 3001
 * Wallet : 3030

๐จ๐ปโ๐ป [๊ฐ๋ฐ๋ด์ฉ]
==========
 * 1๏ธโฃ web3.0 ๊ต์ก์ ์ ์ฒญํ๋ฉด, ๋ฉํ๋ง์คํฌ ์ง๊ฐ ์ฐ๊ฒฐ 
 * 2๏ธโฃ ์ฐ๊ฒฐ๋ ์ง๊ฐ ์ ๋ณด(๊ณต๊ฐํค) db ์ ์ฅ
 * 3๏ธโฃ ์ค์ต ๋ด์ฉ์ ๋ฐ๋ผ ๋ฐ๊ธ๋ ๊ณต๊ฐํค ์์ก์กฐํ
 * 4๏ธโฃ ๊ด๋ฆฌ์ ์ง๊ฐ ์ฃผ์๋ก ์๋ฃ์ฆNFT ๋ฏผํ 
 * 5๏ธโฃ ๊ต์ก ์๋ฃ (์ง๊ฐ ์์ก ํ์ธ) ํ์ธ ๋๋ฉด NFT ์ ์ก
 * 6๏ธโฃ NFT ์ ์ก ํ db ๊ต์ก ์๋ฃ ๋ด์ฉ ์ ์ฅ  


๐จ๐ปโ๐ป [installed npm module]
=========================
 * cd ds_contracts
 * npm install express-routes
 * npm install openzeppelin-solidity@4.3.2
 * npx hardhat init 
 * npm install mysql   
 * npm install dotenv --save (polygonscan api key ์ ๊ทผ์ ์ํด ์ค์น)
 * npm install --save-dev @nomiclabs/hardhat-waffle 'ethereum-waffle@^3.0.0' @nomiclabs/hardhat-ethers 'ethers@^5.0.0'
 * npm install --save-dev chai (hardhat test๋ฅผ ์ํด ์ค์น)
 * npm install @nomiclabs/hardhat-etherscan (์ค์ปจ ๋ฐฐํฌ ํ ๊ฒ์ฆ์ฉ)
 * npm install --save-dev @nomiclabs/hardhat-web3 web3
 * npm install react-router-dom

๐ป [hardhat]
===========
 * ๊ด๋ จ ์๋ฃ 
    * Hardhat docs : https://hardhat.org/hardhat-runner/docs/advanced/create-task 
    * hardhat & polygon : https://learn.figment.io/tutorials/create-nft-smart-contract-with-hardhat
 
 * Mumbai Network ์ฐ๊ฒฐ 
    * .env ํ์ผ ์์   
        * TESTNET_RPC="alchemy create project - polygon mumbai ์ค์  ํ view key"
        * PRIVATE_KEY="metamask polygon mumbai ๋คํธ์ํฌ ์ฐ๊ฒฐ ์ง๊ฐ"
        * POLYGONSCAN_API_KEY="polygonscan ๊ฐ์ ํ ๋ฐ๊ธ"

 * ๋ช๋ น์ด
    * 1๏ธโฃ SmartContract ๋ฐฐํฌ ๊ด๋ จ 
        * npx hardhat compile
        * npx hardhat run scripts/deploy.js --network mumbai
        * npx hardhat verify --network mumbai <YOUR_SMARTCONTRACT_ADDRESS>
    * 2๏ธโฃ Hardhat task ๊ด๋ จ 
        * npx hardhat <task name>
        * ex. npx hardhat accounts --network mumbai (mumbai network option)
    * 3๏ธโฃ Hardhat Test ๊ด๋ จ 
        * npx hardhat test

[์ฐธ๊ณ  docs]
==========
    * https://docs.ethers.io/v5/api/providers/api-providers/ (ether.js)