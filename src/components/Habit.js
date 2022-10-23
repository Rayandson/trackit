import styled from "styled-components"
import Day from "./Day";


export default function Habit({name, days}) {
    const dayNames = ["D", "S", "T", "Q", "Q", "S", "S"];
    return(
        <HabitDiv>
                <HabitContainer>
                <p>{name}</p>
                <DaysContainer>
                {dayNames.map((d, index) => <Day day={d} index={index} days={days} />)}
                </DaysContainer>
                </HabitContainer>
            </HabitDiv>
    )
}

const HabitDiv = styled.div`
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
const HabitContainer = styled.div`
width: 100%;
height: 90px;
display: flex;
gap: 8px;
flex-direction: column;
justify-content: center;
 `

const DaysContainer = styled.div`
display: flex;
justify-content: flex-start;
gap: 4px;
`