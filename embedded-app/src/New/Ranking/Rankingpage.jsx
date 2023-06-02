import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Button from '../Main/Button';
// import data from "../data.json";
function User({ user }) {
    console.log("ssss")
    console.log(user)
    return (
      <RankingList>
        {/* <b>{user.num}   </b><b>{user.name}</b> <span>({user.score})</span> */}
        {/* <p>{user.id}</p> */}
        <p>{user.rank}</p>
        <p>{user.id}</p>
        <p>({user.score})</p>
      </RankingList>
    );
}
function Rankingpage(props) {
    const [myUser ,setUser] = useState([]);
        useEffect(() => {

            const data = {
                "target": 1
              }
        
              const config = {"Content-Type": 'application/json'};
        
            axios.post('/web/rank', data, config)
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
                <Area></Area>
                <Button text="Restart!!" radius="5px" page="login" margin="1rem" ></Button>

            </Content>
        </Wrapper>

    )
}
const Area=styled.div`
    width:15rem;
`
const RankingList=styled.div`
    /*width: auto;*/
    width: 15rem;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 3rem;
    border: 3px solid black;
    border-radius: 5px;
    background: white;
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 1.25rem;

    font-family: 'Press Start 2P', cursive;
    font-size: 0.9rem;
`
const Wrapper=styled.div`
    background-color:#ffd966;
    width:100vw;
    height:100vh;

    display:flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 1rem;


`
export default Rankingpage;