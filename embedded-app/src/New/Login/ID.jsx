import styled, { keyframes } from "styled-components";
import Button from "../Main/Button";
import { useState } from "react";
import axios from "axios";
function ID(props) {

    const [name, setName] = useState('');

    const formSubit = async(e) => {
        e.preventDefault();

        await axios.post("/api/hello7", name, {headers: {
            'Content-Type': 'text/plain; charset=UTF-8'
        }})
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const nameChange = (e) => {
        setName(e.target.value);
    }


    return(
        <Wrapper>
            <Text>type your ID!</Text>
            <LoginForm onSubmit={formSubit}>
                <Input name="name" value={name} onChange={nameChange} placeholder="ID"></Input>
                <Button type="submit" text="Login!!" radius="5px"></Button>
            </LoginForm>
            <Button text="Start!!" radius="5px" page="shot"></Button>
        </Wrapper>
    )
}

const LoginForm=styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
`;

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