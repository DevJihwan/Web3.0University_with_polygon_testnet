import React, {useEffect, useState} from 'react';
import './SendToken.css';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {pageState, pairState} from "../../recoil/index";
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { SDK } from '../../modules/sdk';
import { Polygon } from '../../modules/Polygon';

const SendToken = () => {
    const setPageState = useSetRecoilState(pageState);
    const pair = useRecoilValue(pairState);

    const [toAddress, setToAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [pubkey, setPubkey] = useState('');
    const [balance, setBalance] = useState('pending');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const addressOfPub = SDK.getAddress(pair.getPublicKey());
        getBalance(addressOfPub);
        setPubkey(addressOfPub);
        getNFTS()
    }, []);

    useEffect(() => {
        if(checkSuiAddressVerify(toAddress) && checkAmount(amount)){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }, [toAddress, amount]);

    const getBalance = async (publickKey) => {
        setBalance('pending');
        setBalance(await Polygon.getTokenBalances());
    }

    /*
    * 화면에서 상대방 공개키 + 보내는 sui 받아서 송금 실행 
    */
    const send = async () => {
        try{
            setMessage("...");
            //공개키 메인에서 페이지 전환 시 전달 받을 것, 
            // const result = await SDK.sendToken(pair, pubkey, toAddress, amount);
            const result = await Polygon.sendDWT();
            setDisabled(true);
            setToAddress('');
            setAmount('');
            setMessage(`digest : ${result.EffectsCert.certificate.transactionDigest}`);
        }catch(e){
            console.log(e);
            setMessage("Transaction failed to send");
        }
    }

    /*
    * 상대방의 주소가 입력되면 계좌 검증을 통해, 검증 결과가 true인 경우 송금 버튼을 활성화
    */
    const checkSuiAddressVerify = (_toAddress) => {
        //입력받은 pubkey 검증
        if(_toAddress !== '' && _toAddress.length === 42){
            return true;
        }else{
            return false;
        }
    }

    const checkAmount = (_amount) => {
        try{
            if(_amount === ''){
                throw 'empty';
            }

            if(isNaN(Number(_amount)) === true){
                throw 'NaN';
            }

            return true;
        }catch(e){
            return false;
        }
    }

    const getNFTS = async() => {
        await Polygon.getMyOwnNFTS();
    }


return (
    <div className="Send">
        <Header />

        <div className="Send-title">SendToken</div> 

        <div className='Send-Address-input-subtitle'>Enter or search the address of the recepient below to start sending coins.</div>

        <input className='Send-Address-input' value={toAddress} onChange={(e) => setToAddress(e.target.value)} name="toaddress" placeholder="Address"></input>
        <input className='Send-Amuount-input' value={amount} onChange={(e) => setAmount(e.target.value)}name="amount" placeholder="Amount"></input>       
        
        <div className="balance-check">
            <div style={{'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center'}}>
                <div>Available</div>
                <button className='refresh-btn' onClick={() => getBalance(pubkey)}>refresh</button>
            </div>
            <div className='balance'>{balance === 'pending' ? '...' : '0.'+ balance}  DWT</div>
        </div>

        <div className='result-box'>
            <div>Result</div>
            <div className="sent-message">{message}</div>   
        </div>

        <button className={`submit-button-${disabled}`} onClick={send} type="submit">Transfer DWT</button>

        <Footer />
    </div>);

}

export default SendToken;