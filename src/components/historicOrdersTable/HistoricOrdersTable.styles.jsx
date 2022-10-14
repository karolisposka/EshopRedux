import Styled, { keyframes } from "styled-components"
import HistoricOrdersTableData from "../historicOrdersTableData/HistoricOrdersTableData"

const render = keyframes`
    0%{
        transform:translateX(-300px)

    }
    100%{
        transform:translateX(0px)

    }
`

export const Table = Styled.table`
    overflow:hidden;
    border:1px solid rgba(0,0,0,0.3);
    width:100%;
    border-collapse: collapse;
    box-shadow:${(props) => props.theme.shadows.primary};
`

export const TableHead = Styled.thead`
    border:1px solid rgba(0,0,0,0.3);
    font-family:${(props) => props.theme.fonts.names.secondary};
    
    
`

export const TableBody = Styled.tbody`
    font-family:${(props) => props.theme.fonts.names.primary};
    
`

export const Row = Styled.tr`
    

`

export const Cell = Styled.td`
    padding:1rem;
    @media(max-width:768px){
        padding:0.25rem !important;
        font-size:0.75rem;
    }
    
`

export const StyledHistoricOrdersTableData = Styled(HistoricOrdersTableData)`
    animation:${render} 0.1s ease-in;


`
