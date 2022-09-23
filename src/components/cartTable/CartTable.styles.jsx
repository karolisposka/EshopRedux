import Styled from "styled-components"

export const Table = Styled.table`
    border-collapse: separate !important;
    flex:3;
    border:1px solid rgba(0,0,0,0.3);
    border-radius:0.25rem;
    margin:2rem;
    box-sizing:border-box;
    font-family: ${(props) => props.theme.fonts.names.primary};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    @media(max-width:768px){
        flex:none;
        margin:0.5rem;
        width:calc(100% - 2rem);
        font-size:0.7rem;
    }
`

export const TableHeaders = Styled.thead`
    text-align:left;
    border:1px solid rgba(0,0,0,0.3);
    
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
