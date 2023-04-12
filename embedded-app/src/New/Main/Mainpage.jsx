import styled, { keyframes } from "styled-components";
import Title from "./TitleText";
import Card from "./Card";

function MainPage(props) {

    return (
        <Wrapper>
            {/* <p style={styles.p}>안녕하세요, 테마 변경이 가능한 웹사이트입니다.</p> */}
            <TitleText>
                <Title></Title>
            </TitleText>
            <Card>
            </Card>
            <DetailText>
                <Text>임베디드 시스템 02분반</Text>
                <Text>202001814 이지영  202001757 강채련  202001794 안나영</Text>
            </DetailText>
        </Wrapper>
    )
}
const DetailText=styled.div`
    position:absolute;
    font-family: 'Noto Sans KR', sans-serif;
    // font-family: 'Press Start 2P', cursive;
    font-weight: bold;
    top: 75%;

    display:flex;
    align-items:center;
    flex-direction:column;
    

`;
const Text=styled.p`
    margin:4px;

`;
const TitleText=styled.div`
    position:absolute;
    top:30%;
`;
const slide = keyframes`
    from {
        background-position: 0 0;
    }

    to {
        background-position: -120px 60px;
    }
`;

const Wrapper=styled.div`
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


    display:flex;
    justify-content: center;
    // align-items: center;
`;

export default MainPage;