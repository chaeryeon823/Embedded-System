import React from "react";
import styled from "styled-components";
import Message from "../Main/Message";
function ShotCard(props) {
    return(
        <Wrapper>
            <Message text="SCORE"></Message>
            <Text>999</Text>
        </Wrapper>
    )
}
const Text=styled.p`
    font-family: 'Press Start 2P', cursive;
    font-size:40px;
`;
const Wrapper=styled.div`
    width: auto;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem 3rem;
    border: 3px solid black;
    border-radius: 5px;
    background: white;
    box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 3.25rem;
`;
export default ShotCard;