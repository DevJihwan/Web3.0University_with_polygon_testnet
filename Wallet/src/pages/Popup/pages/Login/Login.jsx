import React from 'react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Storage from '../../modules/Storage';
import { pageState, pairState } from '../../recoil';
import CryptoJS from "crypto-js";
import './Login.css';
import { SDK } from '../../modules/sdk';

const Login = () => {
    const setPage = useSetRecoilState(pageState);
    const setPair = useSetRecoilState(pairState);

    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const checkPassword = async () => {
        try {
            const encryptMnemonic = await Storage.getEncryptMnemonic();
            const bytes = CryptoJS.AES.decrypt(encryptMnemonic, password);
            const mnemonic = bytes.toString(CryptoJS.enc.Utf8);

            const pair = await SDK.getPair(mnemonic);
            setPair(pair);
            setError(false);
            setPage('MyWallet');
        }catch (e) {
            console.log(e)
            setError(true);
        }
    }

    return (
        <div className="Login">

            <div className="login-title">Welcome to Sui Wallet</div>

            <div className="login-sub-title">The decentralized web is waiting for the next</div>

            <div className="login-password-input-box">
                <input className="login-password-input" type="password" placeholder="PASSWORD" onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <div className="error-box">
                    <span className={`login-error-message ${error ? 'login-error-visibility-visible': ''}`}>비밀번호가 틀렸습니다.</span>
                    {'\u00A0'}
                </div>
            </div>



            <button className="login-btn" onClick={checkPassword}>UNLOCK</button>

        </div>
    );
};

export default Login;
