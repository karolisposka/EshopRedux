import Styled from "styled-components"
import Button from "../Button/Button"
import test from "../../assets/test.jpg"

export const MainContainer = Styled.section`
  width:100%;
  background-image:url(${test});
  background-size:cover;
  background-position:center;
  
`

export const ContentSection = Styled.div`
  height:100%;
  min-height:25vh;
  background: rgba(0,0,0,0.5);
  display:Flex;
  align-items:center;
  justify-content:center;
  max-width:1200px;
  margin:0 auto;
  padding:1rem;
`

export const TextWrapper = Styled.div`
  

`

export const Text = Styled.h1`
  font-family:${(props) => props.theme.fonts.names.primary};
  text-transform: uppercase;
  color:${(props) => props.theme.colors.background.lightest};
`

export const Span = Styled.span`
  color:${(props) => props.theme.colors.background.info};

`
