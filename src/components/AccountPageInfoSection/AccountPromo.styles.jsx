import Styled from "styled-components"
import { FaAddressCard, FaHistory } from "react-icons/fa"

export const Section = Styled.section`
    flex:1;
    margin:1rem 2rem;
    border:1px solid rgba(0, 0, 0, 0.3);
    border-radius:2rem;
    display:${(props) => (props.flex === "flex" ? "flex" : "block")};
    font-family:${(props) => props.theme.fonts.names.primary};
`

export const TextWrapper = Styled.div`
    margin:2rem;
    
`

export const Title = Styled.h4`
    margin-left: 0.5rem;
    display:inline;
`

export const Description = Styled.p`
    font-size:1rem;
    color: rgba(0,0,0,0.5);
`

export const HistoryIcon = Styled(FaHistory)`
    display:inline;
    font-size:2rem;
`

export const AddressBook = Styled(FaAddressCard)`
    font-size:2rem;
    display:inline;
`
