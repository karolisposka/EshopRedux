import Styled from "styled-components"
import { FaArrowCircleRight } from "react-icons/fa"

export const StyledButton = Styled.button`
    padding:0.4rem 3rem;
    border-radius:0.25rem;
    margin:0 0rem 1rem 1rem;
    border:none;
    background:#f92a45d6;
    color:rgb(255,255,255);
    text-transform: uppercase;
    font-size:0.8rem;
    display:flex;
    align-items:center;
    position:relative;
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
