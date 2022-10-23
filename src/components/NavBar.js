import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar({picture}){
    return(
        <NavBarContainer>
            <Link to="/" style={{textDecoration: 'none'}}><StyledLogo>Trackit</StyledLogo></Link>
            <UserImg src={picture} />
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
width: 100%;
height: 65px;
position: fixed;
left: 0px;
top: 0px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
box-sizing: border-box;
`
const StyledLogo = styled.p`
font-family: 'Playball', cursive;
font-weight: 400;
font-size: 36px;
color: #FFFFFF;
`

const UserImg = styled.img`
width: 45px;
height: 45px;
border-radius: 98.5px;
`
