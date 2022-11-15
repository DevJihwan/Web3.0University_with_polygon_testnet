import React, {useEffect, useState} from 'react';
import { useSetRecoilState } from 'recoil';
import Storage from '../../modules/Storage';
import { pageState } from '../../recoil';
import './Home.css';

const Home = () => {
    const setPageState = useSetRecoilState(pageState);

    useEffect(async () => {
        // await Storage.clear();

        const encryptMnemonic = await Storage.getEncryptMnemonic();
        if(encryptMnemonic !== ''){
            setPageState('Login');
        }
    }, []);

    return (
        <div className="Home">
            <div className='home-title'>SUI</div>

            <div className='home-sub-title-1'>Welcome to Sui Wallet</div>

            <div className='home-sub-title-2'>Connecting you to the decentralized<br></br> web and SUI network</div>

            <div className='home-sub-tilte-3'>- Buy, store, send and swap tokens</div>
            <div className='home-sub-tilte-3'>- Explore blockchain apps</div>
            <div className='home-sub-tilte-3'>- Find the best price every time</div>

            <button className='home-btn-start' onClick={()=> {
                setPageState('Select');
            }}>Start</button>
        </div>
    );
};

export default Home;
