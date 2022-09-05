import Styled from "styled-components";
import Button from "../Button/Button";

export const InputContainer = Styled.div`
    padding:1rem;
`;

export const Form = Styled.form`
    

`;

export const Input = Styled.input`
    margin:1rem;
    padding:0.25rem 0;
    background:rgba(0,0,0,0.1);
    border:none;
    border-radius:0.25rem;
`;

export const StyledButton = Styled(Button)`
    padding:0.4rem 1rem;
    border-radius:0.25rem;
    border:none;
    background:#f92a45d6;
    color:rgb(255,255,255);
    text-transform: uppercase;
    font-size:0.8rem;
`;
