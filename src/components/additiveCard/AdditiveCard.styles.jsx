import Styled from "styled-components"
import Button from "../Button/Button"

export const CardContainer = Styled.div`
  border:1px solid rgba(0,0,0,0.3);
  border-radius:0.25rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;


`

export const Image = Styled.div`
  background-image: url(${(props) => props.image});
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
  width:100%;
  height:7rem;
  @media(max-width:576px){
    height:5rem;
  }
`

export const ContentWrapper = Styled.div`
  padding:0.5rem;
  text-align:center;
  @media(max-width:576px){
    padding:0.25rem;
  }

`

export const Title = Styled.h5`
  font-size:1rem;
  margin:0;

`

export const Price = Styled.p`
  @media(max-width:576px){
    margin:0.25rem;
  }  

`

export const StyledButton = Styled(Button)`
  padding:0.25rem 1rem;
  width:100%;
  border:1px solid ${(props) => props.theme.colors.background.info};
  border-radius:0.25rem;
  
  cursor:pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
    background: ${(props) => props.theme.colors.background.info};
    color:white;
    font-weight:700;
  }
`
