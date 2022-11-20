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
        // if(checkStudent()){
        //     //checkStudent()의 return value가 true일 경우 기수료 상태 
        // }else{

        // }


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




    return (
        <Container>
            <Header />
            <CardContainer>
                <Card>
                    Web3.0 University 지갑 만들기
                </Card>
                <Button onClick={onSubmit}>GET STARTED</Button>
                <Card>
                    ERC20 Token 발행하기
                </Card>
                <Button >GET STARTED</Button>
                <Card>
                    ERC721 NFT 발행하기
                </Card>
                <Button >GET STARTED</Button>
            </CardContainer>
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
const CardContainer = styled.div`
height: 600px;
display: flex;
align-items: center;
justify-content: start;
flex-direction: column;
`

const Card = styled.div`
    width: 360px;
    height: 260px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    background: rgb(163,147,245);
    background: linear-gradient(90deg, rgba(83,134,216,1) 0%, rgba(163,147,245,1) 100%)
    border-radius: 10px;
    // border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction:column;
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    align-items: center;
    justify-content: start;
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



