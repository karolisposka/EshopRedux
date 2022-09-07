import Styled from "styled-components"
import CartTableItem from "../cartTableItem/CartTableItem"

export const Table = Styled.table`
    width:100%;
    border-collapse:collapse;
    flex:2;
    border:1px solid rgba(0,0,0,0.3);
    margin:2rem;

`

export const TableHeaders = Styled.thead`
    text-align:left;
    border-bottom:1px solid rgba(0,0,0,0.3);
   

`

export const HeaderCell = Styled.th`
    padding:1rem;
  
    


`

export const TableBody = Styled.tbody`
     


`

export const TableRow = Styled.tr`
    
`
export const StyledCartTableItem = Styled(CartTableItem)`
    width:100%;
    
    
`
