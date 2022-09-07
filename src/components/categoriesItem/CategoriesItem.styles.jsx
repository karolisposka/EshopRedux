import Styled from "styled-components"
import { FaArrowRight } from "react-icons/fa"

export const ListItem = Styled.div`
    display:flex;
    align-items:center;
    width:100%;

`

export const Item = Styled.li`
    width:100%;
    border-bottom:1px solid rgba(0,0,0,0.3);
    padding:0.75rem 1rem;
    list-style: none;
    position:relative;
    cursor:pointer;
  
`
export const Arrow = Styled(FaArrowRight)`
    position: absolute;
    width:100%;
    padding-left:5rem;
    font-size:1rem;
    color: ${(props) => props.theme.colors.background.icons};
    left:0rem;
    transition: 0.5s ease-in-out;
    &:hover{
        left:0.5rem;
        transform: scale(1.15);
        color:${(props) => props.theme.colors.fonts.primary};
    }
`
