import Styled from "styled-components"
import { FaAddressBook } from "react-icons/fa"
import AddAddressForm from "../addAddressForm/AddAddressForm"
import Button from "../Button/Button"

export const Container = Styled.div`
    width:100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius:0.25rem;  
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

export const DisplayFormBtn = Styled(Button)`
    padding:0.5rem 2rem;

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
