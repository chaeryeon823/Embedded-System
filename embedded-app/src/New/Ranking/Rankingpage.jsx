import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
// import data from "../data.json";
function User({ user }) {
    return (
      <RankingList>
        <b>{user.num}   </b><b>{user.name}</b> <span>({user.score})</span>
      </RankingList>
    );
}
function Rankingpage(props) {
    const [myUser ,setUser] = useState([])
        useEffect(() => {
            axios.get('/api/hello6')
            .then(response => setUser(response.data))
            .catch(error => console.log(error))
        }, []);

    return(
        <Wrapper>
            <Content>
                <Text>RANKING</Text>
                {myUser.map((user) => (
                    <User user={user} key={user.num} />
                ))}
            </Content>
        </Wrapper>

    )
}
const RankingList=styled.div`
    color:red;
`
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