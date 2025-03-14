import React from "react";
import { GlobalStyle } from "./assets/components/Header/Header.styled.jsx";
import Header from "./assets/components/Header/Header.jsx";
import Home from "./assets/pages/Home/Home.jsx";
import Sobre from "./assets/pages/Sobre/Sobre.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";
import Minhas from "./assets/pages/Minhas/Minhas.jsx";
import Projetos from "./assets/pages/Projetos/Projetos.jsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="sobre">
        <Sobre />
      </div>
      <div id="minhas">
        <Minhas />
      </div>
      <div id="projetos">
        <Projetos />
      </div>
      <div id="Contatos">
        <Footer />
      </div>
    </>
  );
}
