import styled, { ThemeConsumer } from "styled-components"
import { BsTrash } from "react-icons/bs";
import "../style/icons.css"
import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import axios from "axios";


export default function Habit({name, id, days}) {
    const dayNames = ["D", "S", "T", "Q", "Q", "S", "S"];
    const {token, setToken} = useContext(TokenContext)

    function excluir() {
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {headers: {Authorization: `Bearer ${token}`}})
        .then((r) => console.log(r))
        .catch((erro) => console.log(erro))
    }

    return(
        <HabitDiv>
                <BsTrash className="trashIcon" onClick={excluir}/>
                <HabitContainer>
                <Title>{name}</Title>
                <DaysContainer>
                {dayNames.map((d, index) => <DayDiv index={index} days={days}>{d}</DayDiv>)}
                </DaysContainer>
                </HabitContainer>
            </HabitDiv>
    )
}

const HabitDiv = styled.div`
width: 100%;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
padding: 0 11px;
position: relative;
`
const HabitContainer = styled.div`
width: 100%;
height: 90px;
display: flex;
gap: 8px;
flex-direction: column;
justify-content: center;
 `
const Title = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #666666;
`

const DaysContainer = styled.div`
display: flex;
justify-content: flex-start;
gap: 4px;
`

const DayDiv = styled.div`
width: 30px;
height: 30px;
background: ${ props => (props.days.includes(props.index)) ? "#CFCFCF" : "#FFFFFF"};
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
color: ${ props => (props.days.includes(props.index)) ? "#FFFFFF" : "#DBDBDB"};
display: flex;
justify-content: center;
align-items: center;
flex-shrink: 0;
`