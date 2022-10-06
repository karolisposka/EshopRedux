import Styled from "styled-components"
import { AiOutlineCheckCircle } from "react-icons/ai"

export const OrdersCard = Styled.div`
  display:Flex;
  border-bottom:1px solid rgba(0,0,0,0.3);
  width:calc(33% - 2rem);
  margin:1rem;
  border:1px solid rgba(0,0,0,0.3);
  border-radius:0.25rem;
  min-height:17rem;
  
`
export const ProductId = Styled.div`
`

export const OrderDetails = Styled.div`
  margin:1rem;
  box-sizing:border-box;
  position:relative;
`
export const Title = Styled.h5`
  display:block;
  margin-left:0.25rem;
`
export const Description = Styled.p`
  border:1px solid ${(props) => props.theme.colors.background.info};
  border-radius:0.5rem;
  display:inline-block;
  margin:0.25rem;
  padding:0.1rem 0.25rem;
`

export const Time = Styled.p`
  background: ${(props) => (props.status === true ? "red" : "transparent")};
`

export const Status = Styled.button`
  padding:0.25rem;
  margin:1rem;
  border:1px solid rgba(0,0,0,0.3);
  border-radius:0.5rem;
  background:${(props) => (props.status ? "green" : "red")};
`

export const ButtonWrapper = Styled.div`
  position:absolute;
  bottom:0;
  left:0;
`

export const CompletedBtn = Styled(AiOutlineCheckCircle)`
  font-size:1.5rem;
  color: ${(props) => (props.completed === 0 ? "red" : "green")};
`
