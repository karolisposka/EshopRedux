import Styled from "styled-components"

export const Container = Styled.div`
  flex:1;


`

export const UserDetailsList = Styled.ul`
  

`

export const UserDetailsListItem = Styled.li`
  

`

export const LogoutBtn = Styled.button`
    width:100%;
    background:transparent;
    border:none;
    text-align:left;
    padding:1rem;
    text-transform:uppercase;
    color:${(props) => props.theme.colors.background.warning};
    font-weight:700;
    cursor:pointer;

`
