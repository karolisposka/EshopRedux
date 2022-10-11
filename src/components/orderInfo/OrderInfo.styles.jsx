import Styled from "styled-components"
import SelectDropDown from "../SelectDropDown/SelectDropDown"
import Button from "../Button/Button"
import CheckoutButton from "../checkoutButton/CheckoutButton"

export const Container = Styled.div`
  flex:1;
  margin:2rem 1rem;
  box-sizing:border-box;
  border:1px solid rgba(0,0,0,0.3);
  border-radius:0.25rem;
  font-family: ${(props) => props.theme.fonts.names.primary};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media(max-width:768px){
    width:calc(100% - 2rem);
    flex:none;
  }
  
  

`

export const BigTest = Styled.h2`
  margin: 0;
  padding:1rem;

`

export const TextWrapper = Styled.div`
  display:flex;
  align-items:center; 
  padding:0 1rem;
  &:nth-child(4){
    display:block;
  }



`

export const Span = Styled.span`
  margin-left:0.5rem;

`

export const Select = Styled(SelectDropDown)`
  
`

export const SmallText = Styled.h4`
  
  
`

export const ButtonsWrapper = Styled.div`
    display:flex;
    padding:1rem;

`

export const Error = Styled.p`
  color:${(props) => props.theme.colors.background.danger};
  margin:0.5rem 0.1rem;
`

export const BackToStore = Styled(Button)`
  flex:1;
  padding:0.5rem 1rem;
  transition: all 0.3s ease-in-out;
  font-weight:700;
  &:hover{
    background:${(props) => props.theme.colors.background.info};
    color:white;
    
  }
  
`
export const CheckOut = Styled(CheckoutButton)`
  flex:1; 
  background:transparent; 

`
