import React from "react";
import {useRecoilValue } from "recoil";
import CreateWallet from "../pages/CreateWallet/CreateWallet";
import Home from "../pages/Home/Home";
import SendToken from "../pages/SendToken/SendToken";
import { pageState } from "../recoil";
import Select from "../pages/Select/Select";
import ConfirmRecoveryPhrase from "../pages/ConfirmRecoveryPhrase/ConfirmRecoveryPhrase";
import MyWallet from "../pages/MyWallet/MyWallet";
import Login from "../pages/Login/Login";
import ImportWallet from "../pages/ImportWallet/ImportWallet";
import History from "../pages/History/History";
import GetNfts from "../pages/Nfts/GetNfts";

export const render = () => {
    const page = useRecoilValue(pageState);

    switch (page) {
        case 'Home': return <Home /> 
        case 'Select': return <Select></Select>
        case 'CreateWallet': return <CreateWallet />
        case 'ConfirmRecoveryPhrase': return <ConfirmRecoveryPhrase />
        case 'Login': return <Login />
        case 'MyWallet': return <MyWallet />
        case 'ImportWallet': return <ImportWallet />
        case 'History': return <History />
        case 'SendToken': return <SendToken />
        case 'GetNfts': return <GetNfts />
        default: return <div>no page</div>
    }
}