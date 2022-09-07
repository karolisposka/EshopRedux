import Styled from "styled-components"
import SelectDropDown from "../SelectDropDown/SelectDropDown"

export const Container = Styled.div`
  flex:1;
  margin:2rem;
  border:1px solid rgba(0,0,0,0.3);
  font-family: ${(props) => props.theme.fonts.names.primary};
  
  

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
