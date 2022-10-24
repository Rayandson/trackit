import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo1 from "../assets/img/logo1.png"

export default function SignupPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")
    const navigate = useNavigate();

    function signUp(event) {
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {email: email, name: nome, image: foto, password: password})
        .then(() => {
            setEmail("")
            setPassword("")
            setNome("")
            setFoto("")
            navigate("/")
        })
        .catch((e) => alert(e.message))
        event.preventDefault();
    }
    
    return(
        <Container>
            <Content>
            <img src={logo1}/>
            <form onSubmit={signUp}>
            <input data-identifier="input-email" required type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input data-identifier="input-password" required type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <input data-identifier="input-name" required placeholder="nome" onChange={(e) => setNome(e.target.value)} value={nome}/>
            <input data-identifier="input-photo" required placeholder="foto (URL)" onChange={(e) => setFoto(e.target.value)} value={foto}/>
            <button data-identifier="back-to-login-action" type="submit">Cadastrar</button>
            </form>
            <Link to="/"><p>Já tem uma conta ? Faça login!</p></Link>
            </Content>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;
max-height: 100vh;
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
    margin-top: 40px;
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
        margin-bottom: 8px;
        text-decoration-line: underline;
        &:hover {
            cursor: pointer;
        }
    }
`