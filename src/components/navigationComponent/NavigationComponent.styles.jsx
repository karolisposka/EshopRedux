import Styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = Styled(Link)`
    text-decoration: none;
    font-family:${(props) => props.theme.fonts.names.secondary};
    font-weight:700;
    padding:1rem;
    text-transform: uppercase;
    display:block;
    color:${(props) => props.theme.colors.background.icons};
    cursor:pointer;
    &:not(:last-child){
        border-bottom:1px solid rgba(0,0,0,0.3);
    }

`
