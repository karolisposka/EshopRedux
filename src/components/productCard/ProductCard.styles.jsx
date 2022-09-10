import Styled from "styled-components"
import Button from "../Button/Button"
import { FaCartPlus } from "react-icons/fa"

export const Card = Styled.div`
    border: 1px solid rgba(0,0,0,0.3);
    border-radius:0.75rem;
    position:relative;
    padding:1rem;
    justify-content:Space-between;
    align-items:center;
    font-family: ${(props) => props.theme.fonts.names.primary};
   `

export const Title = Styled.h1`
    @media(max-width:768px){
      font-size:1rem;
    }
    
`

export const Text = Styled.p`
    font-size:1rem; 
    @media(max-width:768px){
      font-size:0.8rem;
    }


`

export const Expand = Styled.span`
    color:${(props) => props.theme.colors.fonts.info};
    font-style: italic;
    font-size:0.8rem;
    border-left: 1px solid rgba(255,255,255,0.6);
    box-shadow: 1px 1px 1px solid black;
    
`

export const StyledButton = Styled(Button)`
    border:none;
    margin-bottom:auto;
    border:1px solid rgba(0,0,0,0.2);
    border-radius:1rem;
    padding:0.25rem 1.25rem;
    transition: ease-in-out 0.5s ease;
    display:flex;
    align-items:center;
    &:hover{
        color:${(props) => props.theme.colors.fonts.info};
    }
    @media(max-width:768px){
      padding:0.25 0.5rem;
      font-size:0.8rem;
    }

`

export const Price = Styled.p`
    margin:1rem 0;

`

export const CartIcon = Styled(FaCartPlus)`
    color:  ${(props) => props.theme.colors.background.icon};
    margin-left:1rem;
  
`
