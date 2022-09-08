import Styled from "styled-components"

export const FormContainer = Styled.div`
  margin:1rem 2rem;
  font-family: ${(props) => props.theme.fonts.names.primary};
  
`
export const Title = Styled.h4`
  padding:0.5rem 1rem;
`
export const Form = Styled.form`
  width:63%;
  border:1px solid rgba(0,0,0,0.3);
`
