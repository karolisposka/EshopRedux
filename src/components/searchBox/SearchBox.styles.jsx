import Styled from "styled-components"
import { FaSearch } from "react-icons/fa"

export const SearchBoxContainer = Styled.div`
    display:flex;
    align-items:Center;
    border:1px solid rgba(0,0,0,0.3);
    padding:0.5rem;
    flex:2;
    margin:0 0.5rem;
    border-radius:0.25rem;
`

export const Input = Styled.input`
    border:none;
    outline:none;
    margin-left:1rem;

`

export const Icon = Styled(FaSearch)`
    color:${(props) => props.theme.colors.background.icon};

`
