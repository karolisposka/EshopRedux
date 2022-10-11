import Styled from "styled-components"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export const Container = Styled.div`
    width:calc(33% - 1rem);
    border:1px solid rgba(0,0,0,0.3);
    font-family:${(props) => props.theme.fonts.names.primary};
    border-radius:0.25rem;
    min-height:22rem;
    box-shadow:${(props) => props.theme.shadows.primary};
    box-sizing:border-box;
    position:relative;
    @media(max-width:567px){
        width:calc(100% - 1rem);
    }
    @media(min-width:567px) and (max-width:900px){
        width:calc(50% - 1rem);
    }

`
export const Image = Styled.div`
    width:100%;
    height:10rem;
    background-size:contain !important;
    background-repeat:no-repeat !important;
    background-position:center !important;
    background:url(${(props) => props.image});
`

export const ContentSection = Styled.section`
    margin:1rem;
  

`
export const Title = Styled.h4`
    
    
`

export const ContentWrapper = Styled.div`
    

`

export const Text = Styled.h6`
    

`

export const Description = Styled.p`
    

`

export const Status = Styled.span`
    border:1px solid rgba(0,0,0,0.3);
    border-radius:0.25rem;
    padding:0.25rem;
    color:White;
    background:${(props) => (props.status === 0 ? "red" : "green")};

`
export const Recieved = Styled.span`
    color:${(props) => props.theme.colors.background.primary};

`

export const StatusWrapper = Styled.div`
    position:absolute;
    bottom:0;
`

export const Completed = Styled.span`
    

`

export const NavigationArrowsWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    margin: 0.5rem;
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
