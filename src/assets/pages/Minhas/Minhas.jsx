import React from "react";
import * as M from "./Minhas.styled.jsx";
import Carrossel from "../../components/Carrossel/Carrossel.jsx";
export default function Minhas() {
  return (
    <M.div>
      <M.Minhas>Minha pilha de tecnologia</M.Minhas>
      <M.TextBot>
        Tecnologias com as quais tenho trabalhado recentemente
      </M.TextBot>
      <Carrossel />
    </M.div>
  );
}
