import React from 'react';
import { useSetRecoilState } from 'recoil';
import Storage from '../../modules/Storage';
import { pageState } from '../../recoil';
import './Header.css';

const Header = () => {
    const setPageState = useSetRecoilState(pageState);

    return (
        <div className="Header">
            <div className='header-title' onClick={() => {
                setPageState('MyWallet');
            }}>Web3.0Uiversity</div>

            <div className='header-nav-box' onClick={async () => {
                    await Storage.clear();
                    setPageState('Home');}
            }>
                Delete<br></br>Wallet
            </div>
        </div>
    );
};

export default Header;
