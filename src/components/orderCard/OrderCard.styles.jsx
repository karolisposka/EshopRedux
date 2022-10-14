import Styled from "styled-components"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { FaShippingFast } from "react-icons/fa"

export const OrdersCard = Styled.div`
  border-bottom:1px solid rgba(0,0,0,0.3);
  width:calc(33% - 2rem);
  margin:1rem;
  border:1px solid rgba(0,0,0,0.3);
  border-radius:0.25rem;
  min-height:17rem;
  
`
export const OrderDetails = Styled.div`
  margin:1rem;
  box-sizing:border-box;
  position:relative;
`
export const Time = Styled.p`
  background: ${(props) => (props.status === true ? "red" : "transparent")};
`

export const ButtonWrapper = Styled.div`
  position:absolute;
  top:0rem;
  right:0rem;
`

export const CompletedBtn = Styled(AiOutlineCheckCircle)`
  font-size:1.5rem;
  color: ${(props) => (props.completed === 0 ? "red" : "green")};
`

export const FlexWrapper = Styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`

export const Price = Styled.p`
  

`

export const ShippingIcon = Styled(FaShippingFast)`
  font-size:1.5rem;
  color:${(props) => (props.status === 0 ? "red" : "green")};

`

export const ProductWrapper = Styled.section`
  border:1px solid rgba(0,0,0,0.3);
  margin:0.5rem 0;
  border-radius:0.25rem;
  box-shadow:${(props) => props.theme.shadows.primary};
`

export const textWrapper = Styled.div`
  padding:0.5rem;
  font-family:${(props) => props.theme.fonts.names.primary};

`

export const Title = Styled.h5`
  display:block;
  text-transform:uppercase;
  margin:0;
`

export const Description = Styled.p`
  border-radius:0.5rem;
  display:inline-block;
  padding:0.1rem 0rem;
  margin:0.25rem 0;
`

export const Status = Styled.button`
  padding:0.25rem;
  margin:1rem;
  border:1px solid rgba(0,0,0,0.3);
  border-radius:0.5rem;
  background:${(props) => (props.status ? "green" : "red")};
`
