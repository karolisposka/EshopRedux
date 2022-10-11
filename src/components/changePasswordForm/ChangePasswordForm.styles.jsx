import Styled from "styled-components"
import Button from "../Button/Button"

export const Form = Styled.form`
    border:1px solid rgba(0,0,0,0.3);
    background:white;
    box-shadow: ${(props) => props.theme.shadows.primary};
    border-radius:0.25rem;
`

export const SubmitButton = Styled(Button)`
    padding:0.5rem 2rem;
    margin: 0 0 1rem 1rem;
   

`
