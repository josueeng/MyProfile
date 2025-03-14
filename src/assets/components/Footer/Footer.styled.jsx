import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
export const ContFoo = styled.div`
  display: flex;
  background-color: var(--Dark-Mode, #191919);
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200px;
  color: black;
`;
export const text = styled.h1`
  font-size: 16px;
  text-align: center;
  color: white;
  opacity: 0.7;
  @media (max-width: 968px) {
    width: 450px;
    font-size: 12px;
  }

  &:hover {
    opacity: 0.9;
  }
`;
export const ContTop = styled.div`
  display: flex;
  justify-content: space-around;

  align-items: center;
  width: 100%;
  height: 10vh;
  @media (max-width: 968px) {
    justify-content: center;
    gap: 15vw;
  }
`;

export const ContTopSecond = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 10vh;
`;
export const TextCont = styled.h1`
  color: white;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  opacity: 0.5;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 968px) {
    display: none;
  }
`;

export const Redes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100px;
  height: 10vh;
  @media (max-width: 968px) {
    width: 200px;
  }
`;

export const Rede = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;
  opacity: 0.3;
  &:hover {
    transform: scale(1.03);
    opacity: 0.5;
  }
`;
export const Linha = styled.div`
  display: flex;
  width: 100%;
  height: 2px;
  background-color: black;
  opacity: 0.1;
`;
export const menu = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 400px;
  @media (max-width: 968px) {
    display: none;
  }
`;
export const LinkMenu = styled.a`
  color: var(--light-Content, #a7a7a7);
  text-align: center;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  text-decoration: none;
  &:hover {
    color: #00c0fd;
  }
`;
