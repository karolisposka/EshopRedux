import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  padding:0.25rem 3rem;
  font-weight:700;
  border:1px solid ${(props) => props.theme.colors.background.info};
  border-radius:0.25rem;
  transition: all 0.3s ease-in-out;
  &:hover{
    background: ${(props) => props.theme.colors.background.info};
    color:white;
    font-weight:700;
  }
`;
