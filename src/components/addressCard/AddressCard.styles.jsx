import Styled from "styled-components"
import { FaTrash } from "react-icons/fa"
import Loader from "../loader/Loader"

export const AddressCard = Styled.div`
  border:1px solid rgba(0,0,0,0.3);
  padding:1rem;
  width:100%; 
  background:white; 
  box-sizing:border-box;
  margin:1rem 0;
  font-family:${(props) => props.theme.fonts.names.primary};
  display:flex;
  justify-content:Space-between;

`

export const AddressDetailsSection = Styled.section`
  
`

export const StyledLoader = Styled(Loader)`
  width:1.5rem;
  height:1.5rem;

`

export const AddressDetails = Styled.p`
  margin:0.25rem 0;

`

export const DeleteButton = Styled(FaTrash)`
  color:${(props) => props.theme.colors.background.warning};
  font-size:1.5rem;

`
export const CheckBoxWrapper = Styled.div`
  display:flex;
  align-items:Center;
  margin-top:1rem;

`

export const CheckBox = Styled.input`
  

`
export const Label = Styled.label`
  margin-left:0.25rem;
`
