import Styled from "styled-components"

export const Table = Styled.table`
    width:100%;
    border-collapse:collapse;
    flex:2;
    border:1px solid rgba(0,0,0,0.3);
    margin:2rem;
    font-family: ${(props) => props.theme.fonts.names.primary};
    box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.11);
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
