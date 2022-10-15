import Styled from "styled-components"
import CategoriesList from "../categoriesList/CategoriesList"
import { AiOutlineClose } from "react-icons/ai"

export const SideMenuContainer = Styled.div`
    position:fixed;
    font-family:${(props) => props.theme.fonts.names.primary};
    top:0;
    left:0;
    transition:0.3s ease-in-out;
    width:${(props) => (props.open === false ? "0%" : "60%")};
    height:100%;
    overflow:hidden;
    background:white;
    min-height:74vh;
    z-index:5;
    border-right:2px solid rgba(0,0,0,0.3);
    @media(min-width:768px){
        display:none;
        
    }
`

export const StyledCategoriesList = Styled(CategoriesList)`
    @media(max-width:768px){
        display:block;
        margin:0;
    }
`

export const Exit = Styled(AiOutlineClose)`
    color:${(props) => props.theme.colors.background.warning};
    font-size:1.5rem;
    margin:1rem;
    float: right;
    
`

export const AccountBtn = Styled.button`
    width:100%;
    padding:0.75rem 1rem;
    background:transparent;
    box-sizing:border-box;
    border:none;
    text-align:Center;
    border-top:1px solid rgba(0,0,0,0.3);
    border-bottom:1px solid rgba(0,0,0,0.3);
    color:${(props) => props.theme.colors.background.warning};
    text-transform:uppercase;
    
`
