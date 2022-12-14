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
        const addressOfPub = pair.address;
        setAddress(addressOfPub);
        getBalance(addressOfPub);
        const interval = setInterval(async () => {
            setFaucetStatus('');
            setBalance(await Polygon.getTokenBalances(addressOfPub));
        }, 5000)

        return () => {
            clearInterval(interval);
        };
    }, [])

    const getBalance = async (addr) => {
        let _balance = await Polygon.getTokenBalances(address);
        if (_balance.length > 5){
            _balance = _balance.slice(0,6);
        }
        setBalance(_balance);
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
                <div className='mywallet-balance'>{balance === 'pending' ? '...' : balance}  DWT</div>
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
