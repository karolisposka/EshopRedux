import Styled from "styled-components"
import Input from "../Input/Input"
import Button from "../Button/Button"
import { Link } from "react-router-dom"

export const LoginFormContainer = Styled.div`
    margin:1rem;
    border-radius:2rem;
    font-family: ${(props) => props.theme.fonts.names.primary};
    

`

export const Form = Styled.form`
    
`

export const StyledInput = Styled(Input)`
    

`
export const StyledButton = Styled(Button)`
    margin: 1rem auto;
    text-align:Center;
    display:block;
    color:${(props) => props.theme.colors.background.info};
`

export const SmallText = Styled.p`
    margin-left:1rem;
    font-size:0.8rem;
    text-align:Center;

`

export const Span = Styled(Link)`
    color:${(props) => props.theme.colors.fonts.info};
    cursor:pointer;

`
