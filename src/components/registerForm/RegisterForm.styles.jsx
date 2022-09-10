import Styled from "styled-components"
import Input from "../Input/Input"
import Button from "../Button/Button"

export const RegisterFormContainer = Styled.div`
    margin:1rem;
    border-radius:2rem;
    font-family:${(props) => props.theme.fonts.names.primary};
`

export const Form = Styled.form`
    
`

export const StyledInput = Styled(Input)`
    

`

export const SmallText = Styled.p`
    margin-left:1rem;
    font-size:0.8rem;
    text-align:center;

`

export const Span = Styled.span`
    color:${(props) => props.theme.colors.fonts.info};

`
export const StyledButton = Styled(Button)`
   margin:0 0 1rem 1rem;
   padding:0.5rem 1rem;
`
