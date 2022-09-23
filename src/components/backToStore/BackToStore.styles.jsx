import Styled from "styled-components"
import Button from "../Button/Button"
import { FaShoppingBag } from "react-icons/fa"

export const Container = Styled.div`
  width:100%;
  min-height:74vh;
  text-align:Center;
  display:flex;
  flex-direction:column;
  align-items:center;
  font-family: ${(props) => props.theme.fonts.names.primary};
`

export const Icon = Styled(FaShoppingBag)`
  font-family: ${(props) => props.theme.fonts.names.icon}; 
  padding:2rem;
  font-size:3rem;
`

export const StyledButton = Styled(Button)`
  font-weight:700;
`

export const Text = Styled.p`
  font-size:1.3rem;
  font-weight:700;
`
