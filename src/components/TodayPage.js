
import { useContext, useState } from "react";
import styled from "styled-components"
import { HabitsContext } from "../contexts/HabitsContext";
import Footer from "./Footer";
import Habit from "./Habit";
import NavBar from "./NavBar";
import { PictureContext } from "../contexts/PictureContext";

export default function TodayPage() {
    const {habits, setHabits} = useContext(HabitsContext);
    const {picture, setPicture} = useContext(PictureContext)
  
    if(habits.length === 0) {
        return(
            <>
            <NavBar picture={picture}/>
            <ContainerNoHabs>
            <Header>
                <h1>Segunda, 17/05</h1>
                <Msg1>Você não possui hábitos para serem concluídos hoje. Vá para a sessão <span>hábitos</span> para gerenciar ou criar um novo hábito.</Msg1>
            </Header>
            </ContainerNoHabs>
            <Footer />
            </>
        )
    } else {
        return(
            <>
            <NavBar picture={picture}/>
            <Container>
            <Header>
                <h1>Meus hábitos</h1>
                <Msg2>Nenhum hábito concluído ainda</Msg2>
            </Header>
            <HabitsContainer>
            <Habit />
            </HabitsContainer>
            </Container>
            <Footer />
            </>
        )
    }
}

const ContainerNoHabs = styled.div`
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
    span {
        color: #126BA5;
    }
`
const Msg1 = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #666666;
    margin-top: 15px;
`

const Container = styled.div`
width: 100vw;
height: calc(100vh - 130px);
margin-top: 65px;
margin-bottom: 65px;
background-color: #F2F2F2;
display: flex;
flex-direction: column;
padding: 0 17px;
`
const Msg2 = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #BABABA;
margin-top: 3px;
`

const HabitsContainer = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
margin-top: 28px;
`

