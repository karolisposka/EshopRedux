import Styled from "styled-components"

export const CategoriesContainer = Styled.div`
    flex:1;
    margin:1rem 0;
    margin-left:2rem;
    font-family: ${(props) => props.theme.fonts.names.primary};
    @media(max-width:768px){
       display:none;
    }
`
