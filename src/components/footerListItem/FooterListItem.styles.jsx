import Styled from "styled-components"

export const ListItem = Styled.a`
  list-style:none;
  width:100%;
  text-align:Center;
  margin:1rem;
  text-transform: uppercase;
  text-decoration:none;
  color:${(props) => props.theme.colors.background.icons};
  font-family:${(props) => props.theme.fonts.names.secondary};
  &:hover{
    font-weight:700  
  }
`
