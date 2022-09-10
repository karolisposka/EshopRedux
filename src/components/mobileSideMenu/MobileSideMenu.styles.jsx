import Styled from "styled-components"
import CategoriesList from "../categoriesList/CategoriesList"
import { AiOutlineClose } from "react-icons/ai"

export const SideMenuContainer = Styled.div`
    position:absolute;
    top:0;
    left:0;
    width:${(props) => (props.open === false ? "0%" : "60%")};
    height:100%;
    overflow:hidden;
    background:white;
    z-index:3;
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
