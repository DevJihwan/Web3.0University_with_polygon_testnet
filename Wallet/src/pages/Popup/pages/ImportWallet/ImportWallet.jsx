import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Storage from '../../modules/Storage';
import Validation from '../../modules/Validation';
import { pageState } from '../../recoil';
import './ImportWallet.css';
import CryptoJS from "crypto-js";
import { SDK } from '../../modules/sdk';
import { Polygon } from '../../modules/Polygon';

const ImportWallet = () => {
    const setPage = useSetRecoilState(pageState);

    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [mnemonic, setMnemonic] = useState('');
    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');

    const checkPassWord = () => {
        if(password === ''){setError1(''); return;}
        if(!Validation.check(password, Validation.all_basic8)){setError1('비밀번호가 짧아요'); return;}

        setError1('');
    }

    const checkRePassWord = () => {
        if(rePassword === ''){setError2(''); return;}
        if(rePassword !== password){setError2('비밀번호가 달라요'); return;}

        setError2('');
    }


    const importAccount = async () => {
        try{          
            if(password === ''){setError1('비밀번호를 입력해주세요'); return;}
            if(rePassword === ''){setError2('비밀번호를 입력해주세요'); return;}

            if(error1 !== '') return;
            if(error2 !== '') return;
            
            if(mnemonic === '') {
                setError3('니모닉을 입력해주세요');
                return;
            }

            // const pair = await SDK.getPair(mnemonic);
            console.log("ImportWallet page Mnemonic is : " + mnemonic);
            const pair = await Polygon.getPair(mnemonic);
            const encryptMnemonic = CryptoJS.AES.encrypt(mnemonic, password).toString();
            await Storage.setEncryptMnemonic(encryptMnemonic);

            setPage('Login');
        }catch(e){
            console.log(e);
            setError3('잘못된 니모닉 입니다');
        }
    }

    useEffect(() => {
        checkPassWord();
        checkRePassWord();
    }, [password, rePassword, mnemonic])

    useEffect(async () => {
        await Storage.clear();
    }, [])

    return (
        <div className="ImportWallet">
            <div className="import-wallet-title">Import Wallet</div>

            <input className="import-wallet-password-input" placeholder="password" type="password" onChange={(e)=>{
                setPassword(e.target.value);
            }}/>

            <div style={{'marginBottom': "10px", 'textAlign': 'left'}}>
                {'\u00A0'}
                <span className={`${error1 === ''? '': 'visibility-visible'} import-wallet-error-message`}>{error1}</span>
            </div>

            <input className="import-wallet-password-input" placeholder="re-password" type="password" onChange={(e)=>{
                setRePassword(e.target.value);
            }}/>

            <div style={{'marginBottom': "10px", 'textAlign': 'left'}}>
                {'\u00A0'}
                <span className={`${error2 === ''? '': 'visibility-visible'} import-wallet-error-message`}>{error2}</span>
            </div>

            <textarea className="import-wallet-syntax-input" placeholder="mnemonic" onChange={(e)=>{
                setMnemonic(e.target.value);
            }}/>

            <div style={{'textAlign': 'left'}}>
                {'\u00A0'}
                <span className={`${error3 === ''? '': 'visibility-visible'} import-wallet-error-message`}>{error3}</span>
            </div>

            <button className='import-btn' onClick={importAccount}>IMPORT</button>
        </div>
    );
};

export default ImportWallet;
