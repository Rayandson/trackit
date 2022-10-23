import styled from "styled-components"


export default function Habit() {
    return(
        <HabitDiv>
            <InfoDiv>
                <h1>Ler 1 capítulo de livro</h1>
                <div>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>
                </div>
            </InfoDiv>
            <IconDiv>+</IconDiv>
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
background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
`