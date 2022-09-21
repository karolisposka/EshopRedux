import Styled from "styled-components"

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
