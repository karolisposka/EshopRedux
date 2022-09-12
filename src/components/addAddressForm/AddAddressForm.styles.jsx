import Styled from "styled-components"
import Input from "../Input/Input"
import Button from "../Button/Button"
import { HiOutlineX } from "react-icons/hi"

export const FormContainer = Styled.div`
    width:100%;
    margin:1rem auto;
    border:1px solid rgba(0,0,0,0.3);
    &&.fade-enter {
    opacity:0;
    }
    &&.fade-enter-active {
    opacity:1;
    transition: all 300ms ease-in-out;
    }
    &&.fade-exit {
    opacity: 1;
    }
    &&.fade-exit-active {
    opacity:0;
    transition: all 300ms ease-in-out;
    }

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
    
`
