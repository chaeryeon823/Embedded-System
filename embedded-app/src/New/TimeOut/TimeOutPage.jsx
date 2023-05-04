import React from "react";
import styled from "styled-components";
function TimeOutPage(props) {
    return(
        <Wrapper>
            <Content>
                <Title>TIME OUT!!</Title>
            </Content>
        </Wrapper>
    )

}

const Wrapper=styled.div`
    background-color:#ffd966;
    width:100vw;
    height:100vh;
`;

const Title=styled.p`
    margin:0;
    font-family: 'Press Start 2P', cursive;
    font-size: 30px;
    color:#D20000;
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
export default TimeOutPage;