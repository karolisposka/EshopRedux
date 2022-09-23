import Styled from "styled-components"
import { FaArrowCircleRight } from "react-icons/fa"

export const StyledButton = Styled.button`
    padding:0.4rem 3rem;
    border-radius:0.25rem;
    margin:0 0rem 1rem 1rem;
    border:none;
    text-transform: uppercase;
    font-size:0.8rem;
    display:flex;
    align-items:center;
    background:transparent;
    border:2px solid rgba(0,0,0,0.7);
    font-weight:700;
    position:relative;
    transition: all 0.3s ease-in-out;
    &:hover{
        background:${(props) => props.theme.colors.background.info};
        color:White;
    }
    
`

export const Icon = Styled(FaArrowCircleRight)`
    padding-left:0.5rem;
    position:absolute;
    left: 3rem;
    transition: 0.3s ease-in-out;
    width:100%;

    &&:hover{
       left:3.2rem;
    }`
