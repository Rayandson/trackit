
import { useContext, useState, useEffect } from "react";
import styled from "styled-components"
import { HabitsContext } from "../contexts/HabitsContext";
import Footer from "./Footer";
import TodayHabit from "./TodayHabit";
import NavBar from "./NavBar";
import { PictureContext } from "../contexts/PictureContext";
import axios from "axios";
import { TokenContext } from "../contexts/TokenContext";

export default function TodayPage() {
    const {habits, setHabits} = useContext(HabitsContext);
    const {picture, setPicture} = useContext(PictureContext);
    const {token, setToken} = useContext(TokenContext);
    const [todayHabits, setTodayHabits] = useState([])
    const [numHabits, setNumHabits] = useState(0)
    const [habitsDone, setHabitsDone] = useState(0) 
    const [percent, setPercent] = useState(0)
    let now = new Date;
    let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {headers: {Authorization: `Bearer ${token}`}})
        .then((r) => {
            let num = 0;
            for(let i = 0; i < r.data.length; i++) {
                if(r.data[i].done === true) {
                    num += 1;
                }
            }
            setHabitsDone(num)
            setNumHabits(r.data.length)
            setTodayHabits(r.data)})
        .catch((erro) => console.log(erro))
    }, [])
  
    if(todayHabits.length === 0) {
        return(
            <>
            <NavBar picture={picture}/>
            <ContainerNoHabs>
            <Header>
            <h1>{dias[now.getDay()]}, {now.getDate()}/0{now.getMonth()}</h1>
                <Msg1>Você não possui hábitos para serem concluídos. Vá para a sessão <span>hábitos</span> para gerenciar ou criar um novo hábito.</Msg1>
            </Header>
            </ContainerNoHabs>
            <Footer />
            </>
        )
    } else if (percent === 0) {
        return(
            <>
            <NavBar picture={picture}/>
            <Container>
            <Header>
            <h1>{dias[now.getDay()]}, {now.getDate()}/0{now.getMonth()}</h1>
                <Msg2>Nenhum hábito concluído ainda.</Msg2>
            </Header>
            <HabitsContainer>
            {todayHabits.map((h) => <TodayHabit name={h.name} id={h.id} done={h.done} currentSequence={h.currentSequence} highestSequence={h.highestSequence} habitsDone={habitsDone} setHabitsDone={setHabitsDone} percent={percent} setPercent={setPercent} numHabits={numHabits}/>)}
            </HabitsContainer>
            </Container>
            <Footer />
            </>
        )
    } 
    else {
        return(
            <>
            <NavBar picture={picture}/>
            <Container>
            <Header>
                <h1>{dias[now.getDay()]}, {now.getDate()}/0{now.getMonth()}</h1>
                <Msg2>{percent}% dos hábitos concluídos</Msg2>
            </Header>
            <HabitsContainer>
            {todayHabits.map((h) => <TodayHabit name={h.name} id={h.id} done={h.done} currentSequence={h.currentSequence} highestSequence={h.highestSequence} habitsDone={habitsDone} setHabitsDone={setHabitsDone} percent={percent} setPercent={setPercent} numHabits={numHabits}/>)}
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
min-height: calc(100vh - 130px);
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
margin-bottom: 35px;
`

