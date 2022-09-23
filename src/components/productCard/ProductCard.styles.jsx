import Styled from "styled-components"
import Button from "../Button/Button"
import { FaCartPlus } from "react-icons/fa"

export const Card = Styled.div`
    border: 1px solid rgba(0,0,0,0.3);
    border-radius:0.75rem;
    min-height:10rem;
    position:relative;
    justify-content:Space-between;
    align-items:center;
    overflow:hidden;
    box-sizing:border-box;
    font-family: ${(props) => props.theme.fonts.names.primary};
   `

export const Image = Styled.div`
    width:100%;
    background-image:url(${(props) => props.image});
    height:10rem;
    padding:1rem 0;
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
    transition:0.3s ease-in-out;
    &:hover{
        transform:scale(1.05)
    }

`

export const ContentWrapper = Styled.section`
    padding:1rem;

`
export const Title = Styled.h3`
    margin:0rem 0rem;
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
    width:100%;
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

export const Chicken = Styled.div`
    width:1rem;
    height:1rem;
    color:red;
`
export const Ham = Styled.div`
    width:1rem;
    height:1rem;
    color:yellow;
`
