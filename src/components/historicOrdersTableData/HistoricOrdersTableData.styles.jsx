import Styled from "styled-components"

export const Row = Styled.tr`
    border:1px solid rgba(0,0,0,0.3);
   
`

export const Cell = Styled.td`
    padding:1rem;
    &&:first-child{
        margin:1rem;
        font-weight:700;
    }
    @media(max-width:768px){
        padding:0.25rem;
        font-size:0.6rem;
    }
`

export const ProductInfoWrapper = Styled.div`
    

`

export const ProductTitle = Styled.h5`
    margin:0;
    @media(max-width:768px){
        font-size:0.75rem;
    }
   

`

export const ProductDescription = Styled.p`
    color:${(props) => props.theme.colors.background.icons};
    margin:0.25rem 0;
    @media(max-width:768px){
        font-size:0.5rem;
    }
    
`
