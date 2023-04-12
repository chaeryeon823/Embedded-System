import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../Main/Button";

function ID(props) {
    return(
        <Wrapper>
            <Text>type your ID!</Text>
            <Input></Input>
            <Button text="Login!!" radius="5px" page="shot"></Button>
        </Wrapper>
    )
}

const blink=keyframes`
    50% {
        opacity:0;
    }
`;
const Wrapper=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;

    font-family: 'Noto Sans KR', sans-serif;

`;

const Text=styled.p`
    margin:0;
    font-family: 'Press Start 2P', cursive;

    margin-bottom:30px;

    animation: ${blink} 1s step-end infinite;

`;

const Input=styled.input`
    outline: none;
    fontSize: 100px;
    padding: 15px;
    border:none;
    backgroundColor: '#ddd';
    border-radius: 5px;
    font-family: 'Press Start 2P', cursive;
    box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.2);

    margin-bottom: 50px;

`;
export default ID;