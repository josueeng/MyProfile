import React from "react";
import * as F from "./Footer.styled.jsx";
import git from "../../imagens/github.png";
import linkedin from "../../imagens/linkedin.png";
import instagram from "../../imagens/instagram.png";

export default function Header() {
  return (
    <F.ContFoo>
      <F.ContTop>
        <F.text>&lt; &gt; Josué Lopes &lt;/&gt;</F.text>
        <F.ContTopSecond>
          <F.TextCont>(87)9 9919 6460</F.TextCont>
          <F.TextCont>Josue.programador@hotmail.com</F.TextCont>

          <F.Redes>
            <a href="https://github.com/josueeng">
              <F.Rede src={git} alt="Link do github" />
            </a>
            <a href="https://www.linkedin.com/in/josue-gomes-lopes-a5481728b/?originalSubdomain=br">
              <F.Rede src={linkedin} alt="link do linkedin" />
            </a>

            <a href="https://www.instagram.com/josue.engenheiro_mec/">
              
              <F.Rede src={instagram} alt="Link do instagram" />
            </a>
          </F.Redes>
        </F.ContTopSecond>
      </F.ContTop>
      <F.Linha></F.Linha>
      <F.menu>
        <F.LinkMenu href="#sobre">Sobre Mim</F.LinkMenu>
        <F.LinkMenu href="#minhas">Minhas Tecnologias</F.LinkMenu>
        <F.LinkMenu href="#projetos">Meus Projetos</F.LinkMenu>
        <F.LinkMenu href="#Contatos">Contato</F.LinkMenu>
      </F.menu>
    </F.ContFoo>
  );
}
