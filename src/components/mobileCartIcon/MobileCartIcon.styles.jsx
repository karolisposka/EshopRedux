import Styled from "styled-components"
import { FaCartArrowDown } from "react-icons/fa"

export const Container = Styled.div`
  position:fixed;
  background:${(props) => props.theme.colors.background.warning};
  font-family: ${(props) => props.theme.fonts.names.primary};
  display:none;
  align-items:Center;
  flex-direction:column;
  width:3.5rem;
  height:3.5rem;
  justify-content:Center;
  bottom:1.5rem;
  right:1.5rem;
  border-radius:50%;
  @media(max-width:768px){
    display:flex;
  }


`

export const SpanFrame = Styled.div`
  background:white;
  position:absolute;
  top:2rem;
  left:0.5rem;
  border-radius:50%;
  width:0.5rem;
  height:0.5rem;
  padding:0.3rem;
  display:flex;
  justify-content:Center;
  align-items:Center;
  

`

export const Span = Styled.span`
  font-size:0.75rem;

`

export const CartIcon = Styled(FaCartArrowDown)`
  color:${(props) => props.theme.colors.background.icon};
  font-size: 1.5rem;

`
