import styled from "styled-components"
import logo1 from "../assets/img/logo1.png"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import { TokenContext } from "../contexts/TokenContext"
import {PictureContext} from "../contexts/PictureContext"


export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {token, setToken} = useContext(TokenContext)
    const navigate = useNavigate();
    const {picture, setPicture} = useContext(PictureContext)

    function login(event) {
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {email: email, password: password})
        .then((r) => {
            setEmail("")
            setPassword("")
            setToken(r.data.token)
            console.log(r.data.token)
            setPicture(r.data.image)
            // setPicture("https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino-1280x720.jpg")
            navigate("/hoje")
        })
        .catch((e) => alert(e.message))
        event.preventDefault();
    }
    return(
        <Container>
            <Content>
            <img src={logo1}/>
            <form onSubmit={login}>
            <input required type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input required type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro"><p>Não tem uma conta ? Cadastre-se!</p></Link>
            </Content>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-height: 100vh;
img {
    width: 150px;
    margin-top: 100px;
    margin-bottom: 35px;
}
form {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 25px;
    input {
        width: 100%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding: 0 8px;
        box-sizing: border-box;
        outline: none;
        &::placeholder {
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            color: #DBDBDB;
        }
    }
    button {
        width: 100%;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        color: #FFFFFF;
        &:hover {
            cursor: pointer;
        }
    }

    @media (max-width: 450px) {
        width: 90vw;
    }
    
}
p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #52B6FF;
        margin-bottom: 160px;
        text-decoration-line: underline;
        &:hover {
            cursor: pointer;
        }
    }
`