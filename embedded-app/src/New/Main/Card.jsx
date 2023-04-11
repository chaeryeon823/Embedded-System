import React from "react";
import styled from "styled-components";
import Message from "./Message";
import Button from "./Button";
function Card(props) {
    return(
        <Wrapper>
            <Message>

            </Message>
            <Button text="Start!"></Button>
        </Wrapper>
    )

}

const Wrapper=styled.body`
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    width: auto;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem 3rem;
    border: 3px solid black;
    border-radius: 5px;
    background: white;
    box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
`;


export default Card;