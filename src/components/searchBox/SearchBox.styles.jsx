import Styled from "styled-components"
import { FaSearch } from "react-icons/fa"

export const SearchBoxContainer = Styled.div`
    display:block;
    justify-content:flex-end;
    align-items:Center;
    border:1px solid rgba(0,0,0,0.3);
    padding:0.5rem;
    box-shadow:${(props) => props.theme.shadows.primary};
    margin:0 0.5rem;
    border-radius:0.25rem;
    transition: width 0.5s ease-in-out;
    overflow:hidden;
    width: ${(props) => (props.expanded === true ? "100%" : "1rem")};
    /* @media(max-width:768px){
        flex:1;
    } */
`

export const Input = Styled.input`
    border:none;
    display:inline-block;
    outline:none; 
    width:calc(100% - 4rem);
    margin-left:1rem;
    margin-left: ${(props) => (props.expanded === true ? "1rem" : "0")};
`

export const Icon = Styled(FaSearch)`
    font-size:1rem;
    display:inline-block;
    color:${(props) => props.theme.colors.background.icon};
    transition:0.3s ease-in-out;
    &:hover{
        color:${(props) => props.theme.colors.background.info};
    }
    

`
