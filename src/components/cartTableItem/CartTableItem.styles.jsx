import Styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai"
import QuantityReducer from "../quantityReducer/QuantityReducer"

export const TableRow = Styled.tr`
    &&.fade-enter {
    opacity:0;
    }
    &&.fade-enter-active {
    opacity:1;
    transition: all 300ms ease-out;
    }
    &&.fade-exit {
    opacity: 1;
    }
    &&.fade-exit-active {
    opacity:0;
    transition: all 300ms ease-out;
    }

`

export const TableCell = Styled.td`
    padding:1rem;
    @media(max-width:768px){
        &:first-child{
            display:none;
        }
    }

`
export const DeleteIcon = Styled(AiOutlineClose)`
    color: ${(props) => props.theme.colors.background.danger};
    font-size:${(props) => props.theme.fonts.size.small}
    cursor: pointer;
`

export const Span = Styled.span`
    color:rgba(0,0,0,0.5);
    display:block;
    font-size:0.8rem;

`

export const StyledQuantityReducer = Styled(QuantityReducer)`
    max-width:4rem;
    
`
