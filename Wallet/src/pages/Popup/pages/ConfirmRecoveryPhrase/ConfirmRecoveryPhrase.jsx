import React from 'react';
import './ConfirmRecoveryPhrase.css';
import {useRecoilState, useSetRecoilState} from "recoil";
import {pageState, mnemonicState, encryptMnemonicState} from "../../recoil/index";
import Storage from '../../modules/Storage';

const ConfirmRecoveryPhrase = () => {
    const setPage = useSetRecoilState(pageState);
    const [ mnemonic, setMnemonic ] = useRecoilState(mnemonicState);
    const [ encryptMnemonic, setEncryptMnemonic ] = useRecoilState(encryptMnemonicState);

    const confirm = async () => {
        await Storage.setEncryptMnemonic(encryptMnemonic);
        setMnemonic('');
        setEncryptMnemonic('');
        setPage("Login");
    }

    const copy = () => {
        window.navigator.clipboard.writeText(mnemonic).then(() => {
            alert("COPY TO BOARD");
        });
    }

    return (
        <div className="ConfirmRecoveryPhrase">
            <div className="crp-title">Wallet Created<br></br>Successfully!</div>

            <div className="crp-sub-title">RECOVERY PHRASE</div>

            <div className="syntax-box" onClick={copy}>{mnemonic}</div>

            <div className='crp-sub-title-2' style={{'marginBottom': '15px', 'color': '#3d444d'}}>Your recovery phrase makes it easy to back up and restore your account.</div>

            <div className='text-red'>WARNING</div>
            <div className='text-red'>Never disclose your secret recovery phrase. Anyone with the passphrase can take over your account forever.</div>

            <button className="crp-next-btn" onClick={confirm}>Open Sui Wallet</button>

        </div>
    );
};

export default ConfirmRecoveryPhrase;
