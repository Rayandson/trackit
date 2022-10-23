import styled from "styled-components"
import { useState } from "react"

export default function Day(props) {
    const [active, setActive] = useState(false)
    
    function addDay() {
        let array = props.newHabitDays
        let index;
        if(active === false) {
        array.push(props.index)
        array.sort();
        props.setNewHabitDays(array)
        setActive(!active)
        }
        if(active === true) {
            index = array.indexOf(props.index)
            array.splice(index, 1);
            props.setNewHabitDays(array)
            setActive(!active)
        }

        console.log(array)
    }

    return(
        <DayDiv active={active} onClick={addDay}>{props.day}</DayDiv>
    )
}

const DayDiv = styled.div`
width: 30px;
height: 30px;
background: ${ props => (props.active === false) ? "#FFFFFF" : "#CFCFCF"};
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
color: ${ props => (props.active === false) ? "#DBDBDB" : "#FFFFFF"};
display: flex;
justify-content: center;
align-items: center;
flex-shrink: 0;
`