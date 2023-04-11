import React from "react";
import styled from "styled-components";

function ID(props) {
    return(
        <Wrapper>
            <Text>
                type your ID!
            </Text>
            <Input>
            </Input>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    display:flex;
    flex-direction: column;

    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    width: auto;

    font-family: 'Noto Sans KR', sans-serif;

`;

const Text=styled.p`
    margin:0;
    font-family: 'Press Start 2P', cursive;

    margin-bottom:30px;

`;

const Input=styled.input`
    outline: none;
    fontSize: 100px;
    padding: 10px;
    border:none;
    backgroundColor: '#ddd';

    font-family: 'Press Start 2P', cursive;


`;
export default ID;