import Styled from "styled-components"
import Button from "../Button/Button"

export const CartContainer = Styled.div`
  display:flex;
  @media(max-width:768px){
    flex-direction:column;
    align-items:center;
  }
`

export const BackToStoreBtn = Styled(Button)`
  
  
`
