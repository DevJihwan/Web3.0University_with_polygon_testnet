import react from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';
import { useNavigate } from 'react-router-dom';



const Wrapper = styled.div`
margin-left: 8px;
width: 360px;
height: 260px;
border: 2px solid #660099;
background: linear-gradient(180deg, #FFFFFF 0%, #512772 90%);
border-radius: 10px;
border-radius: 30px;
display: flex;
flex-direction:column;
color: #FFFFFF;
font-size: 25px;
font-weight: 600;
align-items: center;
justify-content: center;
`;


const Nomore = styled.div`
height : 200px;
`;


const WalletAnimation = ({title}) => {


    const navigation = useNavigate();
    const [ischecked, setischecked] = useState();

    const animation = useRef();
    useEffect(() => {
        
        Lottie.loadAnimation({
            container: animation.current,
            renderer: 'svg',
            loop:true,
            autoplay:true,
            animationData:require('../lib/animation/7455-loading1.json')
        })

    }, []) 

    const changeColor = () => {
        navigation('/detail');
    }
    
    return(
        <Wrapper>
            <Nomore ref={animation} onClick={() => changeColor()}></Nomore>
            {title}
        </Wrapper>
        )



        
}

export default WalletAnimation;