import styled from "styled-components";
import createGlobalStyle from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const ListHamburguer = styled.div`
  display: flex;
  width: 40px;
  height: 7px;
  background-color: var(--light-Content, #a7a7a7);
`;
export const ListHamburguer1 = styled.div`
  display: flex;
  width: 40px;
  height: 7px;
  background-color: var(--light-Content, #a7a7a7);
`;
export const ListHamburguer2 = styled.div`
  display: flex;
  width: 40px;
  height: 7px;
  background-color: var(--light-Content, #a7a7a7);
`;

export const Hamburguer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 30px;

  &:hover ${ListHamburguer} {
    transform: rotate(45deg);
  }
  &:hover ${ListHamburguer1} {
    transform: rotate(-45deg);
    margin-top: -28px;
  }
  &:hover ${ListHamburguer2} {
    display: none;
  }
  @media (min-width: 900px) {
    display: none;
  }
`;
export const LiMenu = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104%;
  height: 30px;
  color: white;
  text-decoration: none;
  position: relative; // Adicionado aqui
`;
export const ContMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10vh;
  flex-direction: column;
`;
export const UlMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: space-around;
  background-color: var(--Dark-Mode, #191919);
  width: 104%;
  height: 20vh;
  position: absolute; // Adicionado aqui
  top: 10vh; // Adicionado aqui
`;
