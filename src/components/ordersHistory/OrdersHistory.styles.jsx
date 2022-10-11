import Styled from "styled-components"
import { FaHistory } from "react-icons/fa"

export const Container = Styled.div`
    width:100%;
    background: transparent;
    border-radius:0.25rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding:1rem;
    font-family:${(props) => props.theme.fonts.names.primary};
    box-sizing:border-box;
    min-height:50vh;
`

export const TitleWrapper = Styled.div`
      
   

`

export const OrdersIcon = Styled(FaHistory)`
    color:${(props) => props.theme.colors.background.icons};
    font-size:3rem;
`

export const Table = Styled.table`
    border:1px solid rgba(0,0,0,0.3);
    width:100%;
    border-collapse: collapse;
    box-shadow:${(props) => props.theme.shadows.primary};

`

export const TableHead = Styled.thead`
    border:1px solid rgba(0,0,0,0.3);
    
`

export const TableBody = Styled.tbody`
    
`

export const Row = Styled.tr`
    

`

export const Cell = Styled.td`
    border:1px solid rgba(0,0,0,0.3);
    padding:0.5rem 1rem;
     

`
export const Title = Styled.h4`
    text-transform: uppercase;
    margin:0.5rem 0;
`

export const Product = Styled.h5`
    
`
