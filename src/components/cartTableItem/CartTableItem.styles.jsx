import Styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai"

export const TableRow = Styled.tr`
    border-bottom: 1px solid rgba(0,0,0,0.3);
 
    
`

export const TableCell = Styled.td`
    padding:1rem;

`
export const DeleteIcon = Styled(AiOutlineClose)`
    color: ${(props) => props.theme.colors.background.danger};
    font-size:${(props) => props.theme.fonts.size.small}
`
