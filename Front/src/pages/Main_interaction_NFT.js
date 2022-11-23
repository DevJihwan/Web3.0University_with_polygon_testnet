import react from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

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

const NFTAnimation = ({title}) => {

    const animation = useRef();
    useEffect(() => {
        Lottie.loadAnimation({
            container: animation.current,
            renderer: 'svg',
            loop:true,
            autoplay:true,
            animationData:require('../lib/animation/109447-nft-non-fungible-token-creative.json')
        })

    }, [])
    
    return(
        <Wrapper>
            <Nomore ref={animation}></Nomore>
            {title}
        </Wrapper>
    )

}

export default NFTAnimation;