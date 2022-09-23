import Styled from "styled-components"

export const Container = Styled.div`
  display:flex;
  align-items:Center;
  justify-content:Center;
  box-sizing:border-box;
  width:100%;
  background:${(props) => props.theme.colors.background.lightest};
  padding:1rem;
  margin:1rem 0;
  box-sizing:border-box;
  min-height:50vh;
`

export const Message = Styled.h4`
  text-align:Center;
  font-family:${(props) => props.theme.fonts.names.primary};
  text-transform: uppercase;
  font-size:2rem;
`
