import Styled from "styled-components"
import Input from "../Input/Input"
import Button from "../Button/Button"
import { HiOutlineX } from "react-icons/hi"

export const FormContainer = Styled.div`
    width:100%;
    height:0;
    overflow:hidden;
    margin:1rem auto;
    border:1px solid rgba(0,0,0,0.3);
    background:white;
    border-radius:0.25rem;
    box-shadow: ${(props) => props.theme.shadows.primary};
`

export const Form = Styled.form`
    
`

export const TitleWrapper = Styled.div`
    margin:1rem;
    display:flex;
    justify-content:space-between;

`

export const Title = Styled.h4`
    text-transform:uppercase;
    margin:0;

`

export const ExitIcon = Styled(HiOutlineX)`
    color:${(props) => props.theme.colors.background.warning};
    cursor:pointer;
    font-size:1.5rem;
`

export const StyledInput = Styled(Input)`
    
`

export const StyledButton = Styled(Button)`
    margin:0 0 1rem 1rem;
    padding:0.5rem 4rem;
    color:${(props) => props.theme.colors.background.info};
    
`
