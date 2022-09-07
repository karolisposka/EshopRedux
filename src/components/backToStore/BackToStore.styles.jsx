import Styled from "styled-components"
import { FaShoppingBag } from "react-icons/fa"

export const Container = Styled.div`
    width:100%;
    text-align:Center;
    padding:5rem;
    font-family: ${(props) => props.theme.fonts.names.primary};
`

export const Icon = Styled(FaShoppingBag)`
  font-family: ${(props) => props.theme.fonts.names.icon}; 
  padding:2rem;
  font-size:3rem;//pakeisti spalva

`

export const Button = Styled.button`
  background: ${(props) => props.theme.colors.background.secondary};
  font-size:${(props) => props.theme.fonts.size.small};
  padding:0.5rem;
  
  

`

export const Text = Styled.p`
  font-size:1.3rem;
  font-weight:700;

`
