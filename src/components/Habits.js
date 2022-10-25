import { useContext, useState, useEffect } from "react";
import styled from "styled-components"
import { HabitsContext } from "../contexts/HabitsContext";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { PictureContext } from "../contexts/PictureContext";
import Day from "./Day";
import axios from "axios";
import { TokenContext } from "../contexts/TokenContext";
import TodayHabit from "./TodayHabit";
import Habit from "./Habit";
import { PercentageContext } from "../contexts/PercentageContext";

export default function Habits() {
    const {habits, setHabits} = useContext(HabitsContext);
    const {token, setToken} = useContext(TokenContext)
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [hidden, setHidden] = useState(true);
    const {picture} = useContext(PictureContext)
    const [newHabitName, setNewHabitName] = useState("")
    const [newHabitDays, setNewHabitDays] = useState([])
    const [cleanDays, setCleanDays] = useState(false);
    const {percent, setPercent} = useContext(PercentageContext)

    function showIt() {
        setHidden(false);
    }

    function hideIt() {
        setHidden(true);
        setNewHabitName("");
        setNewHabitDays([]);
        setCleanDays(!cleanDays)
    }

    function createNewHabit() {
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {name: newHabitName, days: newHabitDays}, {headers: {Authorization: `Bearer ${token}`}})
        .then(() => listHabits())
        .catch((e) => console.log(e))
        hideIt();
    }


    function listHabits() {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {headers: {Authorization: `Bearer ${token}`}})
        .then((r) => {
            setHabits(r.data)
        })
        .catch(erro => console.log(erro))  
    }

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {headers: {Authorization: `Bearer ${token}`}})
        .then((r) => setHabits(r.data))
        .catch(erro => console.log(erro))  
    }, [])

    if(habits.length === 0) {
        return(
            <>
            <NavBar picture={picture}/>
            <ContainerNoHabs>
            <AddContainer>
                <h1>Meus hábitos</h1>
                <AddButton data-identifier="create-habit-btn" onClick={showIt}>+</AddButton>
            </AddContainer>
            <NewHabitDiv hidden={hidden}>
                <NewHabitContainer>
                <input data-identifier="input-habit-name" placeholder="nome do hábito" onChange={(e) => setNewHabitName(e.target.value)} value={newHabitName}/>
                <DaysContainer>
                {days.map((d, index) => <Day day={d} index={index} newHabitDays={newHabitDays} setNewHabitDays={setNewHabitDays} />)}
                </DaysContainer>
                </NewHabitContainer>
                <SaveDiv>
                    <p data-identifier="cancel-habit-create-btn" onClick={hideIt}>Cancelar</p>
                    <button onClick={createNewHabit} >Salvar</button>
                </SaveDiv>
            </NewHabitDiv>
            <p data-identifier="no-habit-message">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </ContainerNoHabs>
            <Footer percent={percent}/>
            </>
        )
    } else {
        return(
            <>
            <NavBar picture={picture}/>
            <Container>
            <AddContainer>
                <h1>Meus hábitos</h1>
                <AddButton data-identifier="create-habit-btn" onClick={showIt}>+</AddButton>
            </AddContainer>
            <NewHabitDiv hidden={hidden}>
                <NewHabitContainer>
                <input data-identifier="input-habit-name" placeholder="nome do hábito" onChange={(e) => setNewHabitName(e.target.value)} value={newHabitName}/>
                <DaysContainer>
                {days.map((d, index) => <Day day={d} index={index} newHabitDays={newHabitDays} setNewHabitDays={setNewHabitDays} cleanDays={cleanDays}/>)}
                </DaysContainer>
                </NewHabitContainer>
                <SaveDiv>
                    <p data-identifier="cancel-habit-create-btn" onClick={hideIt}>Cancelar</p>
                    <button data-identifier="save-habit-create-btn" onClick={createNewHabit} >Salvar</button>
                </SaveDiv>
            </NewHabitDiv>
            <HabitContainer>
            {habits.map((h) => <Habit name={h.name} id={h.id} days={h.days} />)}
            </HabitContainer>
            </Container>
            <Footer percent={percent}/>
            </>
        )
    }
}

const ContainerNoHabs = styled.div`
width: auto;
max-width: 100vw;
height: calc(100vh - 130px);
margin-top: 65px;
margin-bottom: 65px;
background-color: #F2F2F2;
display: flex;
flex-direction: column;
padding: 0 17px;
box-sizing: border-box;
& > p {
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #666666;
    margin-top: 29px;
}
`;

const AddContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }`

const AddButton = styled.div`
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        color: #FFFFFF;
`

const NewHabitDiv = styled.div`
width: 100%;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
display: ${props => (props.hidden === true) ? "none" : "flex"};
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 0 11px;
margin-top: 22px;
flex-shrink: 0;
`
const NewHabitContainer = styled.div`
width: 100%;
height: 90px;
display: flex;
gap: 8px;
flex-direction: column;
justify-content: center;
input {
    width: 100%;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    &::placeholder {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #DBDBDB;
        margin-top: 20px;
    }
}
    `


const DaysContainer = styled.div`
display: flex;
justify-content: flex-start;
gap: 4px;
`

const SaveDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 23px;
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #52B6FF;
    }
    button {
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.5px;
        border: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        color: #FFFFFF;
    }
`

const Container = styled.div`
width: 100vw;
min-height: calc(100vh - 130px);
height: auto;
margin-top: 65px;
margin-bottom: 65px;
background-color: #F2F2F2;
display: flex;
flex-direction: column;
padding: 0 17px;
padding-bottom: 50px;
/* box-sizing: content-box; */
`

const HabitContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 20px;
`