import styled, { ThemeConsumer } from "styled-components"
import { BsCheckLg } from "react-icons/bs";
import "../style/icons.css"
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { TokenContext } from "../contexts/TokenContext";


export default function TodayHabit({name, id, done, currentSequence, highestSequence, habitsDone, setHabitsDone, percent, setPercent, numHabits}) {

    const [isDone, setIsDone] = useState(done)
    const {token, setToken} = useContext(TokenContext)
    

    useEffect(() => {
            setPercent(((habitsDone / numHabits) * 100).toFixed(0))
    }, [])
    
    function setAsDone() {
        if(isDone === false) {
        setIsDone(true)
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null, {headers: {Authorization: `Bearer ${token}`}})
        .then((r) => console.log(r))
        .catch((erro) => {
             console.log(erro)
            setIsDone(false)
            })
            setHabitsDone(habitsDone + 1)
            setPercent((((habitsDone + 1) / numHabits) * 100).toFixed(0))
        }
        if(isDone === true) {
            setIsDone(false)
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null, {headers: {Authorization: `Bearer ${token}`}})
            .then((r) => console.log(r))
            .catch((erro) => {
                console.log(erro)
                setIsDone(true)
            })
            setHabitsDone(habitsDone - 1)
            setPercent((((habitsDone - 1) / numHabits) * 100).toFixed(0))
        }
    }

    return(
        <HabitDiv>
            <InfoDiv data-identifier="today-infos">
                <h1>{name}</h1>
                <div>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
                </div>
            </InfoDiv>
            <IconDiv data-identifier="done-habit-btn" isDone={isDone} onClick={setAsDone}><BsCheckLg className="checkicon"/></IconDiv>
        </HabitDiv>
    )
}

const HabitDiv = styled.div`
width: 100%;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 11px;
`

const InfoDiv = styled.div`
width: auto;
max-width: 70%;
height: 69px;
max-height: 90px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 7px;

    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
    }

    div {
        display: flex;
        flex-direction: column;

        p {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 12.976px;
            color: #666666;
        }
    }
`
const IconDiv = styled.div`
width: 69px;
height: 69px;
display: flex;
justify-content: center;
align-items: center;
background: ${props => (props.isDone === false) ? "#EBEBEB" : "#8FC549"};
border: 1px solid #E7E7E7;
border-radius: 5px;
`