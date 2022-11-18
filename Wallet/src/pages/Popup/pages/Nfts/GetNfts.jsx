import React, {useEffect, useState} from 'react';
import './GetNfts.css';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {pageState, pairState} from "../../recoil/index";
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { Polygon } from '../../modules/Polygon';
import NFTitem from '../../component/NFTitem/NFTitem';


const GetNfts = () => {
    const setPageState = useSetRecoilState(pageState);
    const pair = useRecoilValue(pairState);
    const [tokenList, setTokenList] = useState([]);

    useEffect(() => {
        getNFTS();
    }, []);


    const getNFTS = async() => {
        const tokenResult = await Polygon.getMyOwnNFTS();
        const tokenList = tokenResult.data.result.length;
        
        console.log("tokenResult : " + tokenResult);

        setTokenList(tokenList);
        
    }

    const rendering = () => {
        const result = [];
        for (let i = 0; i<tokenList; i++){
            result.push(<NFTitem> </NFTitem>);
        }
        
        return result;
    }


    return(
        <div className='GetNfts'>
            <Header />
                <div className='GetNfts-box'>

                {/* { historyList.length === 0 ? <div className='history-loading'>{empty}</div> : historyList.map((data, i) => <HistoryItem key={i} data={data} />) } */}
                {tokenList === 0 ?  <div className='GetNfts-loading'> empty </div> : <div>{rendering()}</div>}
                </div>
            <Footer />
        </div>
    );
}

export default GetNfts;