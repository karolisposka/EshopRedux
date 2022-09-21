import Styled from "styled-components"
import { FaLock } from "react-icons/fa"
import ErrorNotification from "../errorNotification/ErrorNotification"

export const Container = Styled.div`
    width:100%;
    background:rgba(0,0,0,0.1);  
    padding:1rem;
    font-family:${(props) => props.theme.fonts.names.primary};
    box-sizing:border-box;
    min-height:60vh;
`

export const TitleWrapper = Styled.div`
      
   

`

export const ChangePasswordIcon = Styled(FaLock)`
    color:${(props) => props.theme.colors.background.icons};
    font-size:3rem;
`

export const Title = Styled.h4`
    text-transform: uppercase;
    margin:0.5rem 0;
`

export const StyledErrorNotification = Styled(ErrorNotification)`
    transform: translateX(0);
   
    &&.show-enter {
        transform: translateX(0);
    }
    &&.show-enter-active {
        transform: translateX(10);
        transition: transform 200ms ease-in-out;

    }
    &&.show-exit {
        transform: translateX(10);
     
    }
    &&.show-exit-active {
        transform: translateX(0);
        transition: transform 200ms ease-in-out;
    }
`
