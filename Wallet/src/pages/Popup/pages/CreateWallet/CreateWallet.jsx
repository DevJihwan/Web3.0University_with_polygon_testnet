import React, {useEffect, useState} from 'react';
import './CreateWallet.css';
import {useSetRecoilState} from "recoil";
import {encryptMnemonicState, mnemonicState, pageState} from "../../recoil/index";
import Validation from "../../modules/Validation";
import CryptoJS from "crypto-js";
import { SDK } from '../../modules/sdk';
import Storage from '../../modules/Storage';

const CreateWallet = () => {
    const setPage = useSetRecoilState(pageState);
    const setEncryptMnemonic = useSetRecoilState(encryptMnemonicState);
    const setMnemonic = useSetRecoilState(mnemonicState);

    const [password, setPassWord] = useState('');
    const [rePassword, setRePassWord] = useState('');
    const [checkBox, setCheckBox] = useState(false);

    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');

    const [allCheck, setAllCheck] = useState(false);

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

    const checkAllValue = () => {
        if(password === '' || rePassword === '' || checkBox === false){
            setAllCheck(false);
            return;
        }

        setAllCheck(true);
    }


    const createWallet = async () => {
        try {
            const mnemonic = SDK.generateMnemonic();
            const encryptMnemonic = CryptoJS.AES.encrypt(mnemonic, password).toString();
            setEncryptMnemonic(encryptMnemonic);
            setMnemonic(mnemonic);
            setPage("ConfirmRecoveryPhrase");
        }catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        checkPassWord();
        checkRePassWord();
        checkAllValue();
    }, [password, rePassword, checkBox])

    useEffect(async () => {
        await Storage.clear();
    }, [])

    return (
        <div className="CreateWallet">

            <div className="create-wallet-title">Create Password For<br></br> This Wallet</div>
            <div className="create-wallet-input-box">
                <div className="create-wallet-password-title">Create Password</div>
                <input className="password-input" type="password" onChange={(e) => {
                    setPassWord(e.target.value);
                }} />
                <div style={{'textAlign': 'left'}}>
                    {'\u00A0'}
                    <span className={`error-message ${error1 === ''? '': 'visibility-visible'}`}>{error1}</span>
                </div>
            </div>
            <div className="create-wallet-input-box">
                <div className="create-wallet-password-title">Confirm Password</div>
                <input className="password-input" type="password" onChange={(e) => {
                    setRePassWord(e.target.value);
                }} />
                <div style={{'textAlign': 'left'}}>
                    {'\u00A0'}
                    <span className={`error-message ${error2 === ''? '': 'visibility-visible'}`}>{error2}</span>
                </div>
            </div>

            <div className="agree-box">
                <input className="agree-check-box" type="checkbox" checked={checkBox} onChange={(e) => {
                    setCheckBox(e.target.checked)
                }} />
                <div className="agree-box-title">
                    I read and agreed to the Terms of Service and the Privacy Policy.
                </div>
            </div>

            <button className={`create-btn ${allCheck === true ? 'check-all' : ''}`} onClick={createWallet}>Create Wallet</button>

        </div>
    );

};

export default CreateWallet;

