import Styled, { keyframes } from "styled-components"
import Button from "../Button/Button"
import { FaCartPlus } from "react-icons/fa"

const visible = keyframes`
  0% {
    opacity:0;
  }
  50% {
    opacity:0.5;
  }
  100% {
    opacity:1;
  }

`

export const Card = Styled.div`
    border: 1px solid rgba(0,0,0,0.3);
    border-radius:0.75rem;
    height:24.5rem;
    position:relative;
    justify-content:Space-between;
    align-items:center;
    overflow:hidden;
    position:relative;
    box-sizing:border-box;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    opacity:1;
    animation: ${visible} 0.5s ease-in-out;
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
    width:calc(100% - 2rem);
    @media(max-width:768px){
      padding:0.25 0.5rem;
      font-size:0.8rem;
    }

`

export const Price = Styled.p`
    margin:1rem 0;

`

export const ButtonWrapper = Styled.div`
    position:absolute;
    bottom:0;
    margin:1rem;
    width:100%;
    left:0;

`

export const CartIcon = Styled(FaCartPlus)`
    color:  ${(props) => props.theme.colors.background.icon};
    margin-left:1rem;
  
`
