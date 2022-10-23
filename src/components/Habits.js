import { useContext, useState } from "react";
import styled from "styled-components"
import { HabitsContext } from "../contexts/HabitsContext";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { PictureContext } from "../contexts/PictureContext";
import Day from "./Day";
import axios from "axios";
import { TokenContext } from "../contexts/TokenContext";

export default function Habits() {
    const {habits, setHabits} = useContext(HabitsContext);
    const {token, setToken} = useContext(TokenContext)
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [hidden, setHidden] = useState(true);
    const {picture} = useContext(PictureContext)
    const [newHabitName, setNewHabitName] = useState("")
    const [newHabitDays, setNewHabitDays] = useState([])

    function showIt() {
        setHidden(false);
    }

    function hideIt() {
        setHidden(true);
        setNewHabitName("");
    }

    function createNewHabit() {
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {name: newHabitName, days: newHabitDays}, {headers: {Authorization: `Bearer ${token}`}})
        .then((r) => console.log(r))
        .catch((e) => console.log(e))
    }

    if(habits.length === 0) {
        return(
            <>
            <NavBar picture={picture}/>
            <ContainerNoHabs>
            <AddContainer>
                <h1>Meus hábitos</h1>
                <AddButton onClick={showIt}>+</AddButton>
            </AddContainer>
            <NewHabitDiv hidden={hidden}>
                <NewHabitContainer>
                <input placeholder="nome do hábito" onChange={(e) => setNewHabitName(e.target.value)} value={newHabitName}/>
                <DaysContainer>
                {days.map((d, index) => <Day day={d} index={index} newHabitDays={newHabitDays} setNewHabitDays={setNewHabitDays} />)}
                </DaysContainer>
                </NewHabitContainer>
                <SaveDiv>
                    <p onClick={hideIt}>Cancelar</p>
                    <button onClick={createNewHabit} >Salvar</button>
                </SaveDiv>
            </NewHabitDiv>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </ContainerNoHabs>
            <Footer/>
            </>
        )
    } else {
        return(
            <>
            <NavBar picture={picture}/>
            <Container>
            <p>Tem</p>
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
height: calc(100vh - 130px);
margin-top: 65px;
margin-bottom: 65px;
background-color: #F2F2F2;
display: flex;
flex-direction: column;
padding: 0 17px;
`