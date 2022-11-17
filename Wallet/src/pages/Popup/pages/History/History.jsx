import React from 'react';
import './History.css';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {pageState, pairState} from "../../recoil/index";
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import HistoryItem from '../../component/HistoryItem/HistoryItem';
import { Polygon } from '../../modules/Polygon';


const History = () => {
    const setPageState = useSetRecoilState(pageState);
    const pair = useRecoilValue(pairState);

    const [historyList, setHistoryList] = useState([]);
    const [empty, setEmpty] = useState('Fetching Data');

    useEffect(() => {
        getHistory();
    }, [])


    const getHistory = async () => {
        
        // const historyList = await Polygon.getTransactionHistory();
        // const historyList = await SDK.getHistoryTranssaction(testaddress);

        const historyList = await Polygon.getTransactionHistory();
        
        if(historyList.size === 0){
            setEmpty('empty');
        }
        setHistoryList(historyList);
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
