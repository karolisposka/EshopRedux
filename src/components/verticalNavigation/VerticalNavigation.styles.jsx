import Styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = Styled.div`
  flex:1;
  margin:1rem;
  @media(max-width:768px){
    display:none;
  }


`

export const UserDetailsList = Styled.ul`
  width:100%;
  margin:0;
  padding:0;
`

export const AdminBtn = Styled(Link)`
  background:transparent;
  border:none;
  text-align:left;
  font-family:${(props) => props.theme.fonts.names.secondary};
  font-weight:700;
  padding:1rem;
  width:100%;
  text-transform:uppercase;
  color:${(props) => props.theme.colors.background.warning};
  font-weight:700;
  cursor:pointer;
  text-decoration:none;
`

export const LogoutBtn = Styled.button`
  width:100%;
  background:transparent;
  border:none;
  text-align:left;
  font-family:${(props) => props.theme.fonts.names.secondary};
  font-weight:700;
  padding:1rem;
  text-transform:uppercase;
  color:${(props) => props.theme.colors.background.warning};
  font-weight:700;
  cursor:pointer;
`
