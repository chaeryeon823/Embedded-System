import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShotCard from "./ShotCard";
import { useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import Button from "../Main/Button";
function Shotpage(props) {
    const [time, setTime] = useState(3);
    useEffect(()=> {
        time > 0 && setTimeout(() => setTime(time - 1), 1000);
    }, [time]);
    // const Edit = () => {
    //     const {state} = useLocation();
    //     console.log(state);
    // }
    const location = useLocation();
    const number = location.state.value;
    return(
        <Wrapper>
            <Content>
                <IDText>{number}</IDText>
                <Text>hit the target</Text>
                <TimeText>{time ? time : <p style={{fontFamily: 'Press Start 2P', padding:'0px', margin: '0px', color:'#F94A29'}}>TIME OVER!!</p>}</TimeText>
                {/* <TimeText>{time}</TimeText> */}
                <ShotCard></ShotCard>
                {/* <Button text="Restart!!" radius="5px" page="login" margin="1rem" ></Button>
                <Button text="Ranking!!" radius="5px" page="ranking" ></Button> */}
            </Content>
        </Wrapper>
    )
}
const IDText=styled.p`
    margin:0;
    font-family: 'Press Start 2P', cursive;
    margin-bottom: 0.625rem;
`;
const TimeText=styled.div`
    margin:0;
    font-family: 'Press Start 2P', cursive;
    font-size:1.25rem;
    margin-bottom: 1rem;

    
`;
const Content=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

`;
const Text=styled.p`
    margin:0;
    font-family: 'Press Start 2P', cursive;
    margin-bottom: 1.25rem;
`;
const Wrapper=styled.div`
    background-color:#ffd966;
    width:100vw;
    height:100vh;
`;


export default Shotpage;