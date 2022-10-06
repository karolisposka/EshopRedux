import Styled from "styled-components"
import NavLink from "../navLink/NavLink"

export const HorizontalNav = Styled.nav`
  width:100%;
  margin:1rem;
  padding:1rem;
`

export const StyledNavLink = Styled(NavLink)`
  margin:1rem;
  color:${(props) => props.theme.colors.background.icons};
`
