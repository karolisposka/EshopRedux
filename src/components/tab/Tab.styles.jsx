import Styled from "styled-components"

export const Tab = Styled.button`
  background:${(props) => props.theme.colors.background.info};
  font-family:${(props) => props.theme.fonts.names.primary};
  font-weight:700;
  color:${(props) => props.theme.colors.fonts.light};
  margin:1rem;
  box-sizing:border-box;
  padding:1rem;
`
