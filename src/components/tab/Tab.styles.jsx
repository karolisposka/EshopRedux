import Styled from "styled-components"

export const Tab = Styled.button`
  background:${(props) => props.theme.colors.background.info};
  width:calc(100% - 2rem);
  font-family:${(props) => props.theme.fonts.names.primary};
  font-weight:700;
  color:${(props) => props.theme.colors.fonts.light};
  margin:1rem;
  padding:1rem;
`
