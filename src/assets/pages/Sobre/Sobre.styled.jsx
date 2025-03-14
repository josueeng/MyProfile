import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
`;
export const Sobre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 200vh;
  background: var(--Dark-Mode, #191919);
  @media (max-width: 768px) {
    height: 300vh;
  }
`;
export const TitSobre = styled.h1`
  color: var(--Solid-Heading-Dark-mode, #ccc);
  text-align: center;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 54.167% */
`;
export const ContTextPrin = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 500px;

  @media (max-width: 768px) {
    height: 160vh;
  }
`;
export const TextSec = styled.p`
  color: var(--light-Content, #a7a7a7);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
  width: 75%;
  flex-wrap: wrap;
`;
export const ContTextSec = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 500px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ContWork = styled.div`
  display: flex;
  justify-content: space-between;

  width: 500px;
  height: 500px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
  display:none;
    justify-content: space-around;
    width: 99vw;
    height: 800px;
  }
`;
export const TrabOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 100px;
  background: var(--Dark-Mode, #191919);
  @media (max-width: 768px) {
    width: 99vw;
  }
`;
export const TextTrabOne = styled.p`
  color: white;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  letter-spacing: 1px;
`;
export const ButtonWork = styled.a`
  display: flex;
  justify-content: center;
  background: green;
  align-items: center;
  color: white;
  text-decoration: none;
  opacity: 1;
  border-radius: 10px;
  width: 84px;
  height: 24px;
  flex-shrink: 0;
`;
export const ContTopWork = styled.div`
  display: flex;

  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;
export const ContBotWork = styled.div`
  display: flex;
  background-color: var(--Dark-Mode, #191919);
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const ContDados = styled.div`
  display: flex;
  gap: 10px;
`;
export const TextEmp = styled.p`
  color: var(--light-Content, #a7a7a7);
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 81.25% */
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const LinhaWord = styled.div`
  display: flex;
  width: 100%;
  height: 3px;
  background: white;
  @media (max-width: 768px) {
    width: 99vw;
  }
`;

export const ContEduc = styled.div`
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 99vw;
    height: 800px;
  }
`;
export const TitEduc = styled.h1`
  color: var(--Solid-Heading-Dark-mode, #ccc);
  text-align: center;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 54.167% */
`;
export const ContEducTop = styled.div`
  display: flex;
  width: 600px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 99vw;
  }
`;
export const TextEduc = styled.p`
  color: white;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  letter-spacing: 1px;
`;
export const ContCurso = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 600px;
  height: 100px;
  background: var(--Dark-Mode, #191919);
  @media (max-width: 768px) {
    width: 99vw;
  }
`;
export const ButtWorkConc = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  background: Green;
  align-items: center;
  color: white;
  opacity: 1;
  border-radius: 10px;
  width: 84px;
  height: 24px;
  flex-shrink: 0;
`;

export const ButtWorkAnd = styled.a`
  display: flex;
  justify-content: center;
  background: var(--light-content, #a7a7a7);
  align-items: center;
  color: white;
  opacity: 1;
  text-decoration: none;
  border-radius: 10px;
  width: 84px;
  height: 24px;
  flex-shrink: 0;
  font-size: 14px;
`;

export const ContEducBot = styled.div`
  display: flex;
  width: 600px;
  height: 50px;
  background: yellow;
  align-items: center;
  justify-content: space-between;
`;
