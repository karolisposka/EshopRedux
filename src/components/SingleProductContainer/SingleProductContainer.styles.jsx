import Styled from "styled-components"
import { HiOutlineX, HiBackspace } from "react-icons/hi"
import { ReactComponent as Pizza } from "../../assets/pizza.svg"
import Button from "../Button/Button"
import QuantityReducer from "../quantityReducer/QuantityReducer"

export const ProductContainer = Styled.section`
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  height:100vh;
  background:rgba(0,0,0,0.2);
  font-family:${(props) => props.theme.fonts.names.primary};
`

export const ExitBtn = Styled(HiOutlineX)`
  color:${(props) => props.theme.colors.background.danger};
  font-size:2rem;
  margin:1rem;
`

export const ProductSection = Styled.section`
  background:${(props) => props.theme.colors.background.lightest};
  max-width:800px;
  min-width:600px;
  margin:0 auto;
  min-height:74vh;
  border-radius:0.25rem;
  display:Flex;
`

export const ImageWrapper = Styled.div`
  flex:2;
  border-right:1px solid rgba(0,0,0,0.3);
  display:flex;
  justify-content:Center;
  align-items:center;
`

export const ProductImage = Styled.img`
  width:19rem;
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
`

export const SizeLine = Styled.div`
  border-radius:100%;
  width:20rem;
  display:flex;
  align-items:Center;
  justify-content:Center;
  height:20rem;
  margin:1rem;
  border:2px dotted rgba(0,0,0,0.3);
`

export const ProductInfoWrapper = Styled.div`
  flex:1;
  margin:1rem;
`

export const Title = Styled.h4`
  margin:0.5rem 0;
  font-size:1.2rem;
`

export const SmallText = Styled.span`
  color:rgba(0,0,0,0.7);
  margin:0.5rem 0rem;
`

export const ChooseSize = Styled.div`
  width:${(props) => (props.size ? "7rem" : "5rem")};
`

export const description = Styled.p`
  

`

export const SelectionFrame = Styled.div`
  display:inline-block;
  padding:0.25rem;
  border: ${(props) => (props.display ? `1px solid rgba(0,0,0,0.3)` : "none")};
  border-radius:50%;
  margin-right:0.5rem;
`
export const StyledPizza = Styled(Pizza)`
  width:${(props) => (props.big ? "3rem" : "2.5rem")};
  cursor:pointer;
  vertical-align: middle;
  text-align: center;
  margin-right:0.5rem;
`

export const IngredientsWrapper = Styled.div`
  display:flex;
  flex-wrap:wrap;
  

`

export const StyledButton = Styled(Button)`
    border:2px solid rgba(0,0,0,0.7);
    border-radius:1rem;
    padding:0.25rem 1.25rem;
    transition: ease-in-out 0.5s ease;
    display:flex;
    margin:1rem 0;
    align-items:center;
    &:hover{
        color:${(props) => props.theme.colors.fonts.info};
    }
    @media(max-width:768px){
      padding:0.25 0.5rem;
      font-size:0.8rem;
    }

`
export const StyledQuantityReducer = Styled(QuantityReducer)`
  margin:1rem 0;

`
