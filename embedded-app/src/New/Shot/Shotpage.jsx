import React from "react";
import styled from "styled-components";
import ShotCard from "./ShotCard";
// import Button from "../Main/Button";
function Shotpage(props) {
    return(
        <Wrapper>
            <Content>
                <IDText>Chaeryeon</IDText>
                <Text>hit the target</Text>
                <TimeText> 00:00</TimeText>
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