import Styled from "styled-components"

export const ListItem = Styled.li`
    list-style:none;
    padding:0.25rem;
    display: inline-block;
    width:100%;
    text-transform: uppercase;
    transition: font-weight 200;
    &:not(:last-child){
        border-bottom:1px solid rgba(0,0,0,0.3)
    }
    &:hover{
        font-weight:700  
        }
`

export const TextWrapper = Styled.div`
  overflow:hidden;
  transition: all 0.3s ease-in-out;
  height:${(props) => (props.expanded ? "100%" : "0")};
  margin-top:0.5rem;

`
