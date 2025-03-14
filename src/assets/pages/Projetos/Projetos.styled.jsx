import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color:#191919;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: #a7a7a7;
  text-align: center;
  margin-bottom: 20px;
`;

export const RepoList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const RepoCard = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color:white;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 4px 8px white;
  }
`;

export const RepoLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
