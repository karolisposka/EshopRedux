import Styled from "styled-components"

export const StyledContainer = Styled.div`
    border-top:1px solid rgba(0,0,0,0.3);
    height:10rem;
    width:100%;
    font-family:${(props) => props.theme.fonts.names.primary};
`

export const Section = Styled.section`
    max-width:1200px;
    margin: 0 auto;
`
export const ItemsListContainer = Styled.div`
    padding:1rem;   
    width:10rem;
`
export const ItemsList = Styled.ul`
    width:100%;
`
export const ListItem = Styled.li`
    list-style:none;
    padding:0.25rem;
    display: inline-block;
    width:100%;
    transition: font-weight 200ms ease-in-out;
    &:not(:last-child){
        border-bottom:1px solid rgba(0,0,0,0.3)
    }
    &:hover{
        font-weight:700  
        }
`
