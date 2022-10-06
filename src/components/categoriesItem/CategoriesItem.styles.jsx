import Styled from "styled-components"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

export const ListItem = Styled.div`
    display:flex;
    align-items:center;
    width:100%;
`

export const Item = Styled(Link)`
    width:100%;
    font-family:${(props) => props.theme.fonts.names.secondary};
    font-weight:700;
    color::red;
    border-bottom:1px solid rgba(0,0,0,0.3);
    padding:0.75rem 1rem;
    list-style: none;
    position:relative;
    font-size:1.2rem;
    text-transform:uppercase;
    color:${(props) => props.theme.colors.background.icons};
    cursor:pointer;
    text-decoration:none;
  
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
