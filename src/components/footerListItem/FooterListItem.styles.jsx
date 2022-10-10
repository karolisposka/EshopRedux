import Styled from "styled-components"

export const ListItem = Styled.a`
    list-style:none;
    width:100%;
    text-align:Center;
    text-transform: uppercase;
    text-decoration:none;
    color:${(props) => props.theme.colors.background.icons};
    font-family:${(props) => props.theme.fonts.names.secondary};
    font-weight:700;
    &:hover{
      font-weight:700  
    }
`
export const Text = Styled.h4`
  display:inline-block;
  width: 5rem;

`

export const TextWrapper = Styled.div`
  overflow:hidden;
  transition: all 0.3s ease-in-out;
  height:${(props) => (props.expanded ? "100%" : "0")};
  margin-top:0.5rem;

`
