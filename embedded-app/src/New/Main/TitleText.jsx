import React from "react";
import styled from "styled-components";

function TitleText(props) {
    return(
        <Wrapper className="title">
            <Text>BANG</Text>
            <Text>BANG</Text>
            <Text>BANG</Text>
        </Wrapper>
    );
}
export default TitleText;

const Text=styled.p`
    margin:0;
    font-family: 'Press Start 2P', cursive;
    font-size: 50px;
`;

const Wrapper=styled.div`
`;