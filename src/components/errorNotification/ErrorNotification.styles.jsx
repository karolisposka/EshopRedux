import Styled from "styled-components"

export const NotificationContainer = Styled.div`
  text-align:Center;
  background:${(props) => (props.success ? "#59CE8F" : "#E64848")};
  margin:2rem;
  padding:0.75rem;
  font-family:${(props) => props.theme.fonts.names.primary};
  border-radius:0.75rem;
`

export const Span = Styled.div`
  color: ${(props) => props.theme.colors.fonts.light};  

`
