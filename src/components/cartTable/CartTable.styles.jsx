import Styled from "styled-components"

export const Table = Styled.table`
    border-collapse:collapse;
    flex:3;
    border:1px solid rgba(0,0,0,0.3);
    margin:2rem;
    box-sizing:border-box;
    font-family: ${(props) => props.theme.fonts.names.primary};
    box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.11);
    @media(max-width:768px){
        flex:none;
        margin:0.5rem;
        width:calc(100% - 2rem);
        font-size:0.7rem;
    }
`

export const TableHeaders = Styled.thead`
    text-align:left;
    border-bottom:1px solid rgba(0,0,0,0.3);
`

export const HeaderCell = Styled.th`
    padding:1rem;
    @media(max-width:768px){
        padding:0.5rem;
        text-align:Center;
        &:first-child{
            display:none;
        }
    }
  
    


`

export const TableBody = Styled.tbody`
     


`

export const TableRow = Styled.tr`
   
`
