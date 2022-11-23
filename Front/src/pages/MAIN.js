import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {
    mintTokenAddress,
    mintTokenContract,
    web3,
} from "../web3Config.js";
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.js';
import { Polygon } from '../modules/Polygon';
import './MAIN.css';
import Lottie from 'lottie-web';
import WalletAnimation from './Main_interaction';
import CoinAnimation from './Main_interaction_coin';
import NFTAnimation from './Main_interaction_NFT';
import Tutorial from './Tutorial';


const MAIN = () => {
    const navigation = useNavigate();

    const onSubmit = () => {
        console.log('강의 신청 버튼 클릭 시');
        getCourseBtn();
    };
    // const [account, setAccount] = useState(null);


    /*
    *   onClikc event = 수강 신청 버튼 
    */
    const getCourseBtn = async () => {
        console.log("========== Starting getCourseBtn method ==========");
        navigation('/detail');

    }

    /*
    *   기존 수강 여부 체크 
    */ 
    const checkStudent = async() => {
        
        console.log("========== Starting checkStudent method ==========");
        //return할 변수값 (true: 수료, false: 미수료)
        let booleanValue; 
        
        //수료증 NFT 보유내역을 조회 (return type is array)
        const checkResult = await Polygon.getMyOwnNFTS();

        //Return된 array size를 체크
        if(checkResult.size == 0){
            booleanValue = false;
        }else{
            booleanValue = true;
        }
        console.log("booleanValue : " + booleanValue);
        return booleanValue;
    }

    const title = "Earn Your ";
    const title2 = "Web3.0 degree";

    const contents = {


    }



    return (
        <Container>
            <Header />
            <Title>{title + title2}</Title>
            <CardContainer>
                <WalletAnimation onClick={() => onSubmit()} title="Tutorial"></WalletAnimation>
                <CoinAnimation title="ERC20 Token Course"></CoinAnimation>
                <NFTAnimation title="ERC721 NFT Course"></NFTAnimation>
            </CardContainer>
            <StartingCard>
                <Tutorial>

                </Tutorial>
            </StartingCard>
        </Container>
    )
}

export default MAIN;


const Container = styled.div`
width: 100vw;
height: 100vh;
background: #512772;
background: linear-gradient(90deg, rgba(163,147,245,1) 0%, #512772 100%);
`

const Title = styled.div`
font-family : Rubik Microbe;
padding: 30px 30px 3 30px;
font-size : 58px;
color : #fff;
text-decoration: underline;
align-items: center;
font-weight: 900;
line-height : 1.2;
margin: 0 150px;
align-items: center;
justify-content: center;
margin-top : 80px;
`

const CardContainer = styled.div`
display: flex;
height: 430px;
display: flex;
align-items: center;
justify-content: start;
flex-direction: row;
align-items: center;
justify-content: center;
padding-left: 100px;
padding-right: 100px;
`

const StartingCard = styled.div`
    border: 3px solid #660099;
    background: linear-gradient(90deg, rgba(163,147,245,1) 0%, #512772 100%);
    // background: #D8BFD8;
    width: 680px;
    height: 80px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    display: flex;
    flex-direction:column;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    padding: 80px;
    margin: auto;
`

const Button = styled.div`
margin-top: 20px;
    width: 360px;
    height: 52px;
    background: #FFF8F8;
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    background: rgb(163,147,245);
    background: linear-gradient(90deg, rgba(83,134,216,1) 0%, rgba(163,147,245,1) 100%);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 20px; 
    cursor: pointer;
    
`



