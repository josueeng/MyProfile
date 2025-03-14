import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
`;
export const ContCor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: white;
`;
export const ContSobre = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background: var(--Dark-Mode, #191919);
  @media (max-width: 968px) {
  height: 110vh;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-content: center;
  }
`;

export const TextSpan = styled.span`
  background: var(
    --Gradient-Heading,
    linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`;

export const ContTextPrinc = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  width: 700px;
  height: 100px;
  @media (max-width: 968px) {
    width: 350px;
  }
`;
export const TextMain = styled.h1`
  color: white;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  @media (max-width: 968px) {
    font-size: 16px;
  }
`;

export const Eu = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 5px solid -webkit-linear-gradient(left, #00c0fd, #e70faa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
