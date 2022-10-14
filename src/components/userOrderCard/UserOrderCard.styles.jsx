import Styled, { keyframes } from "styled-components"

const render = keyframes`
    0%{
        transform: translateY(-200px);
        opacity:0
    }
    100%{
        transform: translateY(0px);
        opacity:1

    }
`

export const Container = Styled.div`
    border:1px solid rgba(0,0,0,0.3);
    font-family:${(props) => props.theme.fonts.names.primary};
    border-radius:0.25rem;
    min-height:22rem;
    box-shadow:${(props) => props.theme.shadows.primary};
    box-sizing:border-box;
    position:relative;
    animation:${render} 0.3s ease-in;
`

export const orderInformation = Styled.div`
    margin:1rem;
    border:1px solid rgba(0,0,0,0.3);
    box-shadow:${(props) => props.theme.shadows.primary};
    border-radius:0.25rem;
    padding:0.25rem;
`
export const Key = Styled.span`
    font-weight:700;
`
export const Info = Styled.p`
    margin:0.25rem 0;
`
export const ProductsContainer = Styled.div`
    margin:1rem;
`
export const Status = Styled.p`
    background:${(props) => (props.status === 0 ? "red" : "green")};
    color:white;
    border-radius:0.5rem;
    display:inline;
    padding:0.25rem 0.5rem; 
`

export const ProductContainer = Styled.div`
    border:1px solid rgba(0,0,0,0.3);
    border-radius:0.25rem;
    box-shadow:${(props) => props.theme.shadows.primary};
    padding:0.25rem;
    margin:0.25rem 0;
`

export const Title = Styled.h5`
    margin:0.5rem 0;
    display:inline-block;
    text-transform: uppercase;
    font-family:${(props) => props.theme.fonts.names.secondary};

`

export const Quantity = Styled.span`
    
`

export const Price = Styled.p`
    margin:0.25rem 0;

`
export const Description = Styled.p`
    text-transform: capitalize;
    margin:0.25rem 0;

`
