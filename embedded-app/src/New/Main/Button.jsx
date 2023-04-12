import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

function Button(props) {

    const navigate=useNavigate();
    const {text, radius, page,} = props;

    const navClick = () => {
        if(page === 'login') {
            navigate(`/login`);
        }
        else if(page === 'shot') {
            navigate(`/shot`);
        }
    }




    return(
        <Wrapper
            onClick={navClick}
            style={{borderRadius:radius || "0px",}}>
            {`${text}`} 
            
        </Wrapper>
    )
}

// onClick={()=> {
//     navigate(`/`+`${page}`);
// }}
const Wrapper=styled.button`
    color:inherit;
    font-family:inherit;
    font-size: inherit;
    background: white;
    padding: 0.8125rem 3.6rem;
    border: 3px solid black;
    box-shadow: 0 0 0 black;
    transition: all 0.2s;

    font-family: 'Press Start 2P', cursive;

    &:hover {
        box-shadow: 0.4rem 0.4rem 0 black;
        transform: translate(-0.4rem, -0.4rem);
    }

    &:active {
        box-shadow: 0 0 0 black;
        transform: translate(0, 0);
    }

    border-radius: ${props => props.radius || '0px'};
`;
export default Button;