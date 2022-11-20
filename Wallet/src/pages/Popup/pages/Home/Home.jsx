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
            <div className='home-title'>Web3.0 University</div>

            <div className='home-sub-title-1'>Welcome to Web3.0</div>

            <div className='home-sub-title-2'>Connecting you to the decentralized<br></br> web and Polygon network</div>

            <div className='home-sub-tilte-3'>- Sing, send, and get tokens</div>
            <div className='home-sub-tilte-3'>- Explore blockchain apps</div>
            <div className='home-sub-tilte-3'>- Find the best price every time</div>

            <button className='home-btn-start' onClick={()=> {
                setPageState('Select');
            }}>Start</button>
        </div>
    );
};

export default Home;
