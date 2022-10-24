import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer(){
    return(
        <FooterContainer>
            <Link to="/habitos" style={{textDecoration: 'none'}}><p>Hábitos</p></Link>
            <Link to="/hoje" style={{textDecoration: 'none'}}>
            <div>
                <p>Hoje</p>
            </div>
            </Link>
            <Link to="/historico" style={{textDecoration: 'none'}}><p>Histórico</p></Link>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
width: 100%;
height: 65px;
position: fixed;
z-index: 10;
bottom: 0px;
left: 0px;
background: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
box-sizing: border-box;
& > p {
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #52B6FF;
}
div {
    width: 87px;
    height: 87px;
    position: absolute;
    bottom: 10px;
    left: calc(50vw - (91px/2));
    background: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        color: #FFFFFF;
    }
}
a {
    text-decoration: none;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #52B6FF;
}
`