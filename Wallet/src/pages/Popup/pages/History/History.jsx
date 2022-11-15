import React from 'react';
import './History.css';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {pageState, pairState} from "../../recoil/index";
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { useEffect } from 'react';
import { SDK } from '../../modules/sdk';
import { useState } from 'react';
import HistoryItem from '../../component/HistoryItem/HistoryItem';


const History = () => {
    const setPageState = useSetRecoilState(pageState);
    const pair = useRecoilValue(pairState);

    const [historyList, setHistoryList] = useState([]);
    const [empty, setEmpty] = useState('Fetching Data');

    useEffect(() => {
        getHistory();
    }, [])


    const getHistory = async () => {
        // const testaddress = '0xcd8c8083f7e60e3bda1ca5799e73544acb8582f4'
        const historyList = await SDK.getHistoryTranssaction(SDK.getAddress(pair.getPublicKey()));
        // const historyList = await SDK.getHistoryTranssaction(testaddress);
        if(historyList.length === 0){
            setEmpty('empty');
        }
        setHistoryList(historyList.reverse());
    }

    return (
        <div className="History">
            <Header />

            <div className='history-box'>
                { historyList.length === 0 ? <div className='history-loading'>{empty}</div> : historyList.map((data, i) => <HistoryItem key={i} data={data} />) }
            </div>

            <Footer />
        </div>
    );
};

export default History;
