import Styled from "styled-components"
import AdditiveCard from "../additiveCard/AdditiveCard"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export const Container = Styled.div`
    padding:1rem 0;
    width:calc(100% - 2rem);
`

export const StyledAdditiveCard = Styled(AdditiveCard)`
    

`

export const NavigationArrowsWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    margin:0.25rem 0;
`

export const NavigationArrowLeft = Styled(FaArrowLeft)`
    font-size:1.5rem;
    color:${(props) => props.theme.colors.background.info};
    cursor:pointer;
`
export const NavigationArrowRight = Styled(FaArrowRight)`
    font-size:1.5rem;
    color:${(props) => props.theme.colors.background.info};
    cursor:pointer;
`
