import Styled from "styled-components"
import { FaAddressCard, FaHistory } from "react-icons/fa"
import Button from "../Button/Button"

export const Container = Styled.div`
    flex:1; 
    margin:1rem 2rem;
   
    font-family:${(props) => props.theme.fonts.names.primary};
`

export const ContentSection = Styled.section`
    display:${(props) => (props.flex === "flex" ? "flex" : "block")};
    border-bottom:1px solid rgba(0,0,0,0.3);
    border-radius:0.25rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

`

export const TextWrapper = Styled.div`
    padding:1rem;
    &&:not(:nth-of-type(4)){
        border-right: 1px solid rgba(0,0,0,0.3);
       
    }   
`

export const Title = Styled.h4`
    display:inline;
`

export const Description = Styled.p`
    font-size:1rem;
    color: rgba(0,0,0,0.5);
`

export const StyledButton = Styled(Button)`
    font-weight:700;
    padding:0.5rem 5rem;
    margin:1rem auto;
    text-align:center;
    display:block;
`

export const HistoryIcon = Styled(FaHistory)`
    display:inline;
    font-size:2rem;
`

export const AddressBook = Styled(FaAddressCard)`
    font-size:2rem;
    display:inline;
`
