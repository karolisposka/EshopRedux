import Styled from "styled-components"
import Button from "../Button/Button"

export const CardContainer = Styled.div`
  border:1px solid rgba(0,0,0,0.3);
  border-radius:0.25rem;

`

export const Image = Styled.div`
  background-image: url(${(props) => props.image});
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
  width:100%;
  height:10rem;
`

export const ContentWrapper = Styled.div`
  padding:1rem;

`

export const Title = Styled.h5`
  

`

export const Price = Styled.p`
  

`

export const StyledButton = Styled(Button)`

`
