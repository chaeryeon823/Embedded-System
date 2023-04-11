import React from "react";
import styled from "styled-components";

function Message(props) {
    return(
        <Wrapper>
            Look at this fancy pop-up
        </Wrapper>
    )

}

const Wrapper=styled.p`
    font-size:1.1rem;
    margin-bottom: 1.6rem;
    margin-top: 0;
    color:black;
    font-family: 'Press Start 2P', cursive;
`;
export default Message;