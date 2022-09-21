import Styled from "styled-components"
import { HiOutlineX } from "react-icons/hi"
import { FaUndo } from "react-icons/fa"

export const Tag = Styled.div`
  padding:0.15rem 0.5rem;
  margin:0.15rem;
  font-size:0.8rem;
  text-decoration: ${(props) => (props.deleted ? "line-through" : "none")};
  border-radius:2rem;
  display:flex;
  align-items:center;
  border:1px solid ${(props) => props.theme.colors.background.info};
  
`
export const deleteIngredient = Styled(HiOutlineX)`
  color:${(props) => props.theme.colors.background.danger};
  margin-left:0.5rem;
`

export const UndoIngredient = Styled(FaUndo)`
  color:${(props) => props.theme.colors.background.info};
  margin-left:0.5rem;
`
