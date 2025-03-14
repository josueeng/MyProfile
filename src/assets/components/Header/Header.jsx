import React from "react";
import * as H from "./Header.styled.jsx";
import git from "../../imagens/github.png";
import linkedin from "../../imagens/linkedin.png";
import instagram from "../../imagens/instagram.png";
import Hamburguer from "../menu/Menu.jsx";

export default function Header() {
  return (
    <>
      <H.header>
        <a style={{ textDecoration: 'none' }} href="#Home"><H.text>&lt; &gt; Josué Lopes &lt;/&gt;</H.text></a>
        <H.menu>
          <H.LinkMenu href="#sobre">Sobre Mim</H.LinkMenu>
          <H.LinkMenu href="#minhas">Minhas Tecnologias</H.LinkMenu>
          <H.LinkMenu href="#projetos">Meus Projetos</H.LinkMenu>
          <H.LinkMenu href="#Contatos">Contato</H.LinkMenu>
        </H.menu>

        <H.Redes>
            <a href="https://github.com/josueeng">
              <H.Rede src={git} alt="Link do Github" />
            </a>
            <a href="https://www.linkedin.com/in/josue-gomes-lopes-a5481728b/?originalSubdomain=br">
              <H.Rede src={linkedin} alt="Link do Linkedin" />
            </a>

            <a href="https://www.instagram.com/josue.engenheiro_mec/">
              
              <H.Rede src={instagram} alt=""Link do Instagram />
            </a>
          </H.Redes>
        <Hamburguer />
      </H.header>
    </>
  );
}
