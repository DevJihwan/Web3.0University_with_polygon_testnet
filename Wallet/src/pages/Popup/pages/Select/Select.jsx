import React from 'react';
import { useSetRecoilState } from 'recoil';
import { pageState } from '../../recoil';
import './Select.css';


const Select = () => {
    const setPageState = useSetRecoilState(pageState);

    return (
        <div className="Select">
            <div className='select-title'>New to Sui Wallet</div>

            <div className='select-box'>
                <div className='select-box-title'>Yes, let's create one!</div>
                <div className='select-box-sub-title'>This creates anew wallet and <br></br> a 12-word recovery parase</div>
                <button className='select-btn' onClick={()=>{
                    setPageState('CreateWallet');
                }}>Create a New Wallet</button>
            </div>

            <div className='select-box' style={{'marginTop': '15px'}}>
                <div className='select-box-title'>No, I already have one</div>
                <div className='select-box-sub-title'>Import your existing wallet by entering<br></br> the
                    12-word recovery phrase
                </div>
                <button className='select-btn' onClick={()=>{
                    setPageState('ImportWallet');
                }}>Import an Existing Wallet</button>
            </div>
        </div>
    );
};

export default Select;
