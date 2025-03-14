import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
export const header = styled.div`
  display: flex;
  background-color: var(--Dark-Mode, #191919);
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10vh;
  color: black;
  font-family: "DM Sans";
`;
export const text = styled.h1`
  font-size: 20px;
  text-align: center;
  background: -webkit-linear-gradient(left, #00c0fd, #e70faa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    background: -webkit-linear-gradient(left, #e70faa, #00c0fd);
    -webkit-background-clip: text;
  }
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

export const Redes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 10vh;
`;

export const Rede = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;
