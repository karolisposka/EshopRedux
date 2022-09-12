import Styled from "styled-components"

export const ListItem = Styled.li`
    list-style:none;
    font-family:${(props) => props.theme.fonts.names.primary};
    padding:1rem;
    text-transform: uppercase;
    cursor:pointer;
    &:not(:last-child){
        border-bottom:1px solid rgba(0,0,0,0.3);
    }

`
