import React from "react";
import * as S from "./Sobre.styled.jsx";
import calendario from "../../imagens/calendario.png";
import predio from "../../imagens/predio.png";
import local from "../../imagens/local.png";
export default function Sobre() {
  return (
    <S.Sobre>
      <S.ContTextPrin>
        <S.TitSobre>Sobre Mim</S.TitSobre>
        <S.TextSec>
          Olá! Meu nome é Josué e sou um pernambucano com uma paixão inabalável
          por tecnologia. Como programador front-end, tenho a oportunidade de
          combinar minha curiosidade natural com minha habilidade técnica para
          criar experiências digitais envolventes e intuitivas. Minha jornada na
          tecnologia começou quando eu era jovem, fascinado pela magia por trás
          das telas. Essa fascinação rapidamente se transformou em uma carreira
          dedicada, onde eu me esforço para estar na vanguarda das tendências e
          inovações do front-end. Com um olhar aguçado para o design e um
          compromisso com a funcionalidade eficiente, eu me esforço para criar
          interfaces que não são apenas visualmente agradáveis, mas também
          fáceis de usar. Acredito que cada projeto é uma oportunidade para
          aprender algo novo e estou sempre buscando maneiras de expandir meu
          conjunto de habilidades. Seja trabalhando em um projeto solo ou
          colaborando em uma equipe, trago um senso de dedicação e entusiasmo
          para cada tarefa que realizo. Estou ansioso para trazer minha paixão e
          experiência para o seu próximo projeto. Vamos criar algo incrível
          juntos!
        </S.TextSec>
      </S.ContTextPrin>
      <S.ContTextSec>
        
        <S.ContEduc>
          <S.TitEduc>Cursos</S.TitEduc>
          <S.ContCurso>
            <S.ContEducTop>
              <S.TextEduc>Desenvolvimento Front-end</S.TextEduc>
              <S.ButtWorkConc href="https://vainaweb.com.br/"> Concluido </S.ButtWorkConc>
            </S.ContEducTop>
            
            <S.ContBotWork>
              <S.ContDados>
                <img src={predio} alt="Predio" />
                <S.TextEmp>Vai na Web</S.TextEmp>
              </S.ContDados>
              <S.ContDados>
                <img src={local} alt="Local" />
                <S.TextEmp> Santa Teresa, Rj </S.TextEmp>
              </S.ContDados>
              <S.ContDados>
                <img src={calendario} alt="Calendário" />
                <S.TextEmp>03.2025 </S.TextEmp>
              </S.ContDados>
            </S.ContBotWork>
          </S.ContCurso>
          <S.LinhaWord></S.LinhaWord>

          <S.ContCurso>
            <S.ContEducTop>
              <S.TextEduc>Desenvolvimento Fullstack</S.TextEduc>
              <S.ButtWorkConc href="https://vainaweb.com.br/"> Concluido </S.ButtWorkConc>
            </S.ContEducTop>
            
            <S.ContBotWork>
              <S.ContDados>
                <img src={predio} alt="Predio" />
                <S.TextEmp>Vai na Web</S.TextEmp>
              </S.ContDados>
              <S.ContDados>
                <img src={local} alt="Local" />
                <S.TextEmp> Santa Teresa, Rj </S.TextEmp>
              </S.ContDados>
              <S.ContDados>
                <img src={calendario} alt="Calendário" />
                <S.TextEmp>04.2025 </S.TextEmp>
              </S.ContDados>
            </S.ContBotWork>
          </S.ContCurso>
          <S.LinhaWord></S.LinhaWord>
          
          <S.ContCurso>
            <S.ContEducTop>
              <S.TextEduc>Desenvolvimento Full Stack</S.TextEduc>
              <S.ButtWorkAnd href="https://estacio.com"> Andamento </S.ButtWorkAnd>
            </S.ContEducTop>

            <S.ContBotWork>
              <S.ContDados>
                <img src={predio} alt="Predio" />
                <S.TextEmp>Estácio de Sá</S.TextEmp>
              </S.ContDados>
              <S.ContDados>
                <img src={local} alt="Local" />
                <S.TextEmp> Barra da Tijuca, Rj </S.TextEmp>
              </S.ContDados>
              <S.ContDados>
                <img src={calendario} alt="Calendário" />
                <S.TextEmp>12.2025 </S.TextEmp>
              </S.ContDados>
            </S.ContBotWork>
          </S.ContCurso>
        </S.ContEduc>
      </S.ContTextSec>
    </S.Sobre>
  );
}
