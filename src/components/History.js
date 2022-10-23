import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { PictureContext } from "../contexts/PictureContext";
import { useContext } from "react";

export default function History() {
    const {picture} = useContext(PictureContext)
    return(
        <>
        <NavBar picture={picture}/>
        <Container>
        <Header>
            <h1>Histórico</h1>
            <Msg>Em breve você poderá ver o histórico dos seus hábitos aqui!</Msg>
        </Header>
        </Container>
        <Footer />
        </>
    )
}

const Container = styled.div`
width: 100vw;
max-width: 100vw;
height: calc(100vh - 130px);
margin-top: 65px;
margin-bottom: 65px;
background-color: #F2F2F2;
display: flex;
flex-direction: column;
padding: 0 17px;
box-sizing: border-box;
`;

const Header = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 28px;
    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
`

const Msg = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #666666;
    margin-top: 15px;
`