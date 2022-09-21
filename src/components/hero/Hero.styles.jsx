import Styled from "styled-components"
import Button from "../Button/Button"
import delivery from "../../assets/delivery.jpg"

export const MainContainer = Styled.section`
  width:100%;
  background:#FFFAE7;
 
`

export const ContentSection = Styled.div`
  height:100%;
  min-height:74vh;
  display:Flex;
  align-items:center;
  justify-content:center;
  max-width:1200px;
  margin:0 auto;
`

export const Image = Styled.div`
  clip-path: ellipse(41% 49% at 50% 50%);
  background-image:url(${delivery});
  background-size:cover;
  background-position:right;
  box-shadow: 10px 10px 5px 10px rgba(0,0,0,0.75);
  width:45rem;
  height:30rem;

`

export const TextWrapper = Styled.div`
  

`

export const Text = Styled.h1`
  font-family:${(props) => props.theme.fonts.names.primary};
  text-transform: uppercase;
`

export const Span = Styled.span`
  color:${(props) => props.theme.colors.background.danger};

`

export const ShopNowBtn = Styled(Button)`
  margin:1rem auto;  
  padding:0.75rem 2rem;
  transition:0.1s ease-in-out;
  font-weight:700;
  &:hover{
    background:${(props) => props.theme.colors.background.danger};
    color:${(props) => props.theme.colors.background.light};
  }
`
