import React from "react";
import styled from "styled-components";
function Rankingpage(props) {
    return(
        <Wrapper>
            <Content>
                <Text>RANKING</Text>
            </Content>
        </Wrapper>

    )
}
const Wrapper=styled.div`
    background-color:#ffd966;
    width:100vw;
    height:100vh;
`
const Content=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`
const Text=styled.p`
    margin:0;
    font-family: 'Press Start 2P', cursive;
    font-size:1.25rem;


`
export default Rankingpage;