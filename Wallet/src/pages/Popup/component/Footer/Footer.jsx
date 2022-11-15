import React from 'react';
import { useSetRecoilState } from 'recoil';
import { pageState } from '../../recoil';
import './Footer.css';

const Footer = () => {
    const setPageState = useSetRecoilState(pageState);

    return (
        <div className="Footer">
            <div className='footer-nav-box' onClick={() => {setPageState('SendToken')}}>
                Send
            </div>
            <div className='footer-nav-box' onClick={async () => {setPageState('MyWallet');}}>
                Home
            </div>
            <div className='footer-nav-box' onClick={async () => {setPageState('History');}}>
                History
            </div>
        </div>
    );
};

export default Footer;
