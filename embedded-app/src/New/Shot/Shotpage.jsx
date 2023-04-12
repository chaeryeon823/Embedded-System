import React from "react";
import styled from "styled-components";
import Card from "../Main/Card";
function Shotpage(props) {
    return(
        <Wrapper>
            <Content>
                <Text>hit the target</Text>
                <Card></Card>
            </Content>
        </Wrapper>
    )
}
const Content=styled.div`
    display:flex;
    justify-content:center;

`;
const Text=styled.p`
    margin:0;
    font-family: 'Press Start 2P', cursive;
`;
const Wrapper=styled.div`
    background-color:#ffd966;
    width:100vw;
    height:100vh;
    

`;


export default Shotpage;