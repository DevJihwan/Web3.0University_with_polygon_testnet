import React, {useEffect, useState} from 'react';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {pageState, pairState} from "../../recoil/index";
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { Polygon } from '../../modules/Polygon';


const GetNfts = () => {
    const setPageState = useSetRecoilState(pageState);
    const pair = useRecoilValue(pairState);

    useEffect(() => {
        getNFTS();
    }, []);


    const getNFTS = async() => {
        const tokenResult = await Polygon.getMyOwnNFTS();
        console.log("tokenResult : " + tokenResult);
    }


    return(
        <div className='GetNfts'>
            <Header />



            <Footer />
        </div>
    );
}

export default GetNfts;