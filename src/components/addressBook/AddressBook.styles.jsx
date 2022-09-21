import Styled from "styled-components"
import { FaAddressBook } from "react-icons/fa"
import AddAddressForm from "../addAddressForm/AddAddressForm"

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

export const AddressBookIcon = Styled(FaAddressBook)`
    color:${(props) => props.theme.colors.background.icons};
    font-size:3rem;
`

export const Title = Styled.h4`
    text-transform: uppercase;
    margin:0.5rem 0;
`

export const DisplayFormBtn = Styled.button`
    padding:0.5rem 2rem;
    background:Transparent;
    &&.opacity-enter {
        opacity:0;
    }
    &&.opacity-enter-active {
        opacity:0.5;
        transition: opacity 200ms ease-in-out;
    }
    &&.opacity-exit {
        opacity:0.5;
    }
    &&.opacity-exit-active {
        opacity:0;
        transition: opacity 200ms ease-in-out;
    }
`

export const AddressBook = Styled.section`
   width:100%;

`

export const StyledAddAddressForm = Styled(AddAddressForm)`
    height:32rem;
    &&.display-enter {
        height:0rem;
    }
    &&.display-enter-active {
        height:35rem;
        transition: height 200ms ease-in-out;
    }
    &&.display-exit {
        height:35rem;
    }
    &&.display-exit-active {
        height:0;
        transition: height 200ms ease-in-out;
    }
`
