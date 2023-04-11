import styled, { keyframes } from "styled-components";
import Title from "./Title";
function MainPage(props) {

    return (
        <Wrapper>
            {/* <p style={styles.p}>안녕하세요, 테마 변경이 가능한 웹사이트입니다.</p> */}
            <Title></Title>
        </Wrapper>
    )
}

const slide = keyframes`
    from {
        background-position: 0 0;
    }

    to {
        background-position: -120px 60px;
    }
`;
// const styles = {
//     p : {
//         margin: "0px",
//         color: "red",
//     }
// }

const Wrapper=styled.body`
    width:100vw;
    height:100vh;
    color:black;
    background-color: #ffec63;
    background-image: linear-gradient(
        45deg,
        #ffd966 25%,
        transparent 25%,
        transparent 75%,
        #ffd966 75%,
        #ffd966
    ),
    linear-gradient(
        -45deg,
        #ffd966 25%,
        transparent 25%,
        transparent 75%,
        #ffd966 75%,
        #ffd966
    );
    background-size: 60px 60px;
    background-position: 0 0;
    animation: ${slide} 4s infinite linear;
`;

export default MainPage;