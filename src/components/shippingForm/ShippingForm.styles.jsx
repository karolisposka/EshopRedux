import Styled from "styled-components"
import Input from "../Input/Input"

export const FormContainer = Styled.div`
  margin:1rem 2rem;
  box-sizing:border-box;
  font-family: ${(props) => props.theme.fonts.names.primary};
  @media(max-width:768px){
    width:calc(100% - 2rem);
    margin:1rem;
  }
  
`
export const Title = Styled.h4`
  padding:0.5rem 1rem;
`
export const Form = Styled.form`
  width:100%;
  border:1px solid rgba(0,0,0,0.3);
  box-sizing:border-box;
  @media(max-width:768px){
    width:100%;
  }
`

export const StyledInput = Styled(Input)`
  width:100%;
  box-sizing:Border-box;
  @media(max-width:768px){
    
  }
`
