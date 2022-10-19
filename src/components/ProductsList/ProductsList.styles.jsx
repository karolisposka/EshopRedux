import Styled from "styled-components"
import ProductCard from "../productCard/ProductCard"
import Notification from "../notification/Notification"

export const ProductsList = Styled.div`
    min-height:62vh;
    width:100%;
    display:flex;
    flex-wrap:wrap;
`
export const StyledNotification = Styled(Notification)`
    width:80%;
    margin:2rem auto;
    text-align:center;
`

export const StyledProductCard = Styled(ProductCard)`
    width:calc(33% - 2rem);
    box-sizing:border-box;
    margin: 1rem;
    &.fade-enter {
        opacity: 0;
    }
    &.fade-enter-active {
        transition: opacity 1000ms;
        opacity: 1;
    }
    &.fade-exit {
        opacity: 1;
    }
    &.fade-exit-active {
        opacity: 0;
        transition: opacity 100ms;
    }

    @media(max-width:576px){
        width:calc(100% - 1rem);
        
    }
    @media (min-width:576px) and (max-width:1000px){
        width:calc(50% - 2rem);
    }

`
