import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import axios from 'axios';
import { NotionRenderer } from "react-notion";
import {
  mintTokenAbi,
  mintTokenAddress,
  mintTokenContract,
  web3,
} from "../web3Config.js";
import { Polygon } from '../modules/Polygon';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const DETAIL = () => {

  const [address, setAddress] = useState('');

  const NOTION_PAGE_ID = "Web3-0-df991e223eef40c4928ef772c0ffda54";
  const [response, setResponse] = useState({});
  const [publicKey, setPublicKey] = useState('');
  useEffect(() => {
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        console.log(data)
        setResponse(data);
      });
  }, []);


  const requestNFT = async() =>{
    console.log("starting requestNFT");
    const requestResult = await Polygon.sendNFT(publicKey);

    console.log("requestResult : "+requestResult);
  }


  const onSubmit = async () => {

    confirmAlert({
      title: 'Great! Passed this course!',
      message: 'Go to Request NFT',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });


    // try {
    //   // const pubkey = "0xB1e7587a5f0cBE8039DaD574174Eb9949383a751";
    //   console.log("publicKey : "+publicKey);

    //   const getBalance = await Polygon.getTokenBalances(publicKey);
    //   console.log("completed getBalance : "+getBalance);
    //   if(getBalance > 0){
    //     try{
    //       console.log("Start requestNFT");
    //       requestNFT();
    //     }catch(error){
    //       console.log("getBalance Erro : "+ error);
    //     }
    //   }
    // } catch (err) {
    //   console.log("ERROR : "+err);
    // }

  };


  return (
    <Container>
      <Header />
      {
        Object.keys(response).length && (
          <NotionRenderer blockMap={response} fullPage={true} />
        )
      }
      <BottomContainer>
        <Text>발급받은 공개키를 입력해 NFT 수료증을 발급 받아보세요!</Text>
        {/* setPublicKey(e.target.value) */}
        <InputContainer>
          <Input onChange={(e) => setPublicKey(e.target.value)} value={publicKey} placeholder="공개키를 입력해주세요." />
          <Button onClick={onSubmit} >SUBMIT</Button>
          {/* // console.log(e) setPublicKey(e.target.value) */}
        </InputContainer>
      </BottomContainer>

    </Container>


  )
}

export default DETAIL;

const Container = styled.div`
width: 100vw;
height: 100vh;
background: #fff;
`
const BottomContainer = styled.div`
height: 400px;
display: flex;
align-items: center;
justify-content: center;
// background: linear-gradient(90deg, rgba(83,134,216,1) 0%, #517227 100%);
background: linear-gradient(90deg, rgba(163,147,245,1) 0%, #512772 100%);
flex-direction: column;
color: #fff;
`;

const InputContainer = styled.div`
height: 200px;
display: flex;
align-items: center;
justify-content: center;
`
const Input = styled.input`
padding: 10px;
width: 380px;
height: 30px;
border: none;
border-radius: 5px;
margin-right: 20px;
`;

const Button = styled.div`
border:1px solid #fff;
width: 120px;
height: 50px;
border-radius: 5px;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700; 
cursor: pointer;
`
const Text = styled.div`
color: #fff;
font-weight: 700; 
font-size: 24px;
margin-top: 50px;
`
