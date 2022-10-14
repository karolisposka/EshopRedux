import Styled, { keyframes } from "styled-components"
import test from "../../assets/test.jpg"
import { FaArrowDown } from "react-icons/fa"

const move = keyframes`
  0%{
    transform: translateY(0)
  }
  50%{
    transform: translateY(-10px)
  }
  100%{
    transform:translateY(0)
  }

`

export const MainContainer = Styled.section`
  width:100%;
  background-image:url(${test});
  background-size:cover;
  background-position:center;
  height:88vh;
  @media(max-width:768px){
    height:92vh;
  }
`
export const Overlay = Styled.div`
  height:100%;
  width:100%;
  background: rgba(0,0,0,0.5);

`

export const Title = Styled.h1`
  color:${(props) => props.theme.colors.background.lightest};
  font-family:${(props) => props.theme.fonts.names.secondary};
  font-size:3rem;
  text-transform:uppercase;

`

export const ContentSection = Styled.div`
  height:100%;
  display:Flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  max-width:1200px;
  margin:0 auto;
  padding:1rem;
`

export const TextWrapper = Styled.div`
  

`

export const Text = Styled.h1`
  
  text-transform: uppercase;
  color:${(props) => props.theme.colors.background.lightest};
`

export const Span = Styled.span`
  color:${(props) => props.theme.colors.background.info};

`
export const Button = Styled.button`
  width:4rem;
  height:4rem;
  border-radius:50%;
  justify-self:end;
  animation:${move} 2s infinite;
  cursor:pointer;
`
export const Arrow = Styled(FaArrowDown)`
  color:${(props) => props.theme.colors.background.info};
  font-size:2rem;  

`
