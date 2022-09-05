import Styled from "styled-components"
import ProductCard from "../productCard/ProductCard"

export const ProductsList = Styled.div`
    width:100%;
    padding:1rem;
    display:flex;
    flex-wrap:wrap;
    flex:4;
`

export const StyledProductCard = Styled(ProductCard)`
    width:calc(33% - 2rem);
    box-sizing:border-box;
    margin: 1rem;

`
