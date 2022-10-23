import {BrowserRouter, Routes, Route} from "react-router-dom"
import styled from "styled-components";
import { HabitsContextProvider } from "../contexts/HabitsContext";
import { PictureContextProvider } from "../contexts/PictureContext";
import { TokenContextProvider } from "../contexts/TokenContext";
import GlobalStyle from "./GlobalStyle";
import Habits from "./Habits";
import History from "./History";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Today from "./TodayPage";

export default function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <AppContainer>
    <HabitsContextProvider>
    <TokenContextProvider>
    <PictureContextProvider>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/cadastro" element={<SignupPage />} />
      <Route path="/habitos" element={<Habits />} />
      <Route path="/hoje" element={<Today />} />
      <Route path="/historico" element={<History />} />
    </Routes>
    </PictureContextProvider>
    </TokenContextProvider>
    </HabitsContextProvider>
    </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
`
