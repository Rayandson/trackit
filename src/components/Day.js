import styled from "styled-components"


export default function Day(props) {

    
    function addDay() {
        let array = props.newHabitDays
        array.push(props.index)
        array.sort();
        console.log(array)
        props.setNewHabitDays(array)
    }

    return(
        <DayDiv onClick={addDay}>{props.day}</DayDiv>
    )
}

const DayDiv = styled.div`
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
color: #DBDBDB;
display: flex;
justify-content: center;
align-items: center;
flex-shrink: 0;
`