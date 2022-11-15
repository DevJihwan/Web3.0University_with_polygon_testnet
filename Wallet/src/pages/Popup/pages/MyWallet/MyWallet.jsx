import React from 'react';
import './MyWallet.css';
import {useRecoilValue} from "recoil";
import {pairState} from "../../recoil/index";
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { SDK } from '../../modules/sdk';
import { Polygon } from '../../modules/Polygon';

const MyWallet = () => {
    const pair = useRecoilValue(pairState);

    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState('pending');
    const [faucetStatus, setFaucetStatus] = useState('');

    useEffect(() => {
        const addressOfPub = SDK.getAddress(pair.getPublicKey());
        setAddress(addressOfPub);
        getBalance(addressOfPub);
        const interval = setInterval(async () => {
            setFaucetStatus('');
            setBalance(await SDK.getBalance(addressOfPub));
        }, 5000)

        return () => {
            clearInterval(interval);
        };
    }, [])

    const getBalance = async (addr) => {
        setBalance(await SDK.getBalance(addr));
        Polygon.getTokenBalances();
    }

    const faucet = async () => {
        try{
            setFaucetStatus('');
            await SDK.getRequestTestToken(SDK.getAddress(pair.getPublicKey()));
            setFaucetStatus('Wait for a minute');
        }catch(e){
            setFaucetStatus('Request Fail');
        }
    }

    return (
        <div className="MyWallet">
            <Header />

            <div className='wallet-info-box'>
                <div className='mywallet-address'>{address}</div>
                <div className='mywallet-balance'>{balance === 'pending' ? '...' : '0.'+ balance}  SUI</div>
            </div>

            <div>
                <button className='wallet-btn-faucet' onClick={faucet}>Faucet</button>
                <div className='mywallet-faucet-status'>{faucetStatus}</div>
            </div>

            <Footer />
        </div>
    );
};

export default MyWallet;
