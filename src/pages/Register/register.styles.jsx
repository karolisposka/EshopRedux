import Styled from "styled-components"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"

export const RegisterFormContainer = Styled.div`
    margin:1rem;
    border-radius:2rem;
    font-family:${(props) => props.theme.fonts.names.primary};
`

export const Form = Styled.form`
    margin-top:2rem;
`

export const StyledInput = Styled(Input)`
    

`

export const SmallText = Styled.p`
    margin-left:1rem;
    font-size:0.8rem;
    text-align:center;

`

export const Span = Styled(Link)`
    color:${(props) => props.theme.colors.fonts.info};

`
export const StyledButton = Styled(Button)`
    margin: 1rem auto;
    text-align:Center;
    display:block;
    color:${(props) => props.theme.colors.background.info};
`
