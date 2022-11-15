const { expect } = require('chai');
const { ethers } = require("hardhat")

// truffle은 테스트코드 실행을 위해 ganache-cli를 사용하지만, Hardhat은 로컬 테스트넷을 사용하기 때문에 여기서 바로 테스트 가능

/*
* describe : 향후 수행할 테스트명 설정 
*/
describe("Digital Warrior Token Tests", function() {

    let digitalWarriorToken;
    // 스마트컨트랙트 배포 전 여기에 테스트 코드 실행 
    this.beforeEach(async function() {
      
      // Deploying the smart contract
      const DigitalWarriorToken = await ethers.getContractFactory("DigitalWarriorToken");
      digitalWarriorToken = await DigitalWarriorToken.deploy("Digital Warrior Token", "DWT");
    })

    //각 테스트 케이스 작성
    it("digitalWarriorToken deployed successfully", async function() {
      //테스트를 위해 hardhat 로컬에서 제공하는 주소 연결
      [deployer] = await ethers.getSigners();

      expect((deployer.address) != null);
    })

})