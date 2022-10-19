import Styled from "styled-components"
import { Link } from "react-router-dom"

export const ListItem = Styled.div`
    display:flex;
    align-items:center;
    width:100%;
    &&:not(:last-child){
        border-bottom:1px solid rgba(0,0,0,0.3);
    }
   
`

export const Item = Styled(Link)`
    width:100%;
    font-family:${(props) => props.theme.fonts.names.secondary};
    font-weight:700;
    padding:0.75rem 1.25rem;
    list-style: none;
    font-size:1.2rem;
    text-transform:uppercase;
    color:${(props) => props.theme.colors.background.icons};
    cursor:pointer;
    text-decoration:none;
    transition: transform 0.25s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
  
`
