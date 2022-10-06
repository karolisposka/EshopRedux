import Styled from "styled-components"
import { Link } from "react-router-dom"

export const NavLink = Styled(Link)`
  text-decoration:none;
  font-family:${(props) => props.theme.fonts.names.secondary};
`
