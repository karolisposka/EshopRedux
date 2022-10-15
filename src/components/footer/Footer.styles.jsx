import Styled, { keyframes } from "styled-components"
import Input from "../Input/Input"
import Button from "../Button/Button"
import { FaMobile, FaGlobe, FaMailchimp } from "react-icons/fa"

const render = keyframes`
    0%{
        transform: translateX(-100px);
        opacity:0;
    }
    50%{
        opacity:0.5;
    }
    100%{
        transform: translateX(0);
        opacity:1;
    }

`

export const StyledContainer = Styled.div`
    border-top:1px solid rgba(0,0,0,0.3);
    min-height:8rem;
    width:100%;
    font-family:${(props) => props.theme.fonts.names.primary};
`

export const Section = Styled.section`
    max-width:1200px;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;
    align-items:Center;
    @media(max-width:768px){
        flex-direction:column;
    }
`

export const MobileIcon = Styled(FaMobile)`
    margin-right:0.25rem;
`
export const GlobeIcon = Styled(FaGlobe)`
    margin-right:0.25rem;
`
export const MailIcon = Styled(FaMailchimp)`
    margin-right:0.25rem;
`

export const NavigationContainer = Styled.div`
    display:Flex;
    flex-direction:column;

`

export const ItemsListContainer = Styled.div`
      
   
`

export const Title = Styled.h5`
    text-transform: uppercase;
    margin:0 0.5rem;
`

export const ItemsList = Styled.nav`
    display:flex;
    margin-top:1rem;
    
`

export const PlainText = Styled.p`
    margin-left:0.5rem;
    display:flex;
    align-items:center;
`

export const NavSection = Styled.section`
`

export const Text = Styled.h4`
    margin:0.5rem 1rem;
`

export const SectionText1 = Styled.p`
    margin-left:0.25rem;
    min-height:6rem;
    width:15rem;
    animation: ${render} 0.25s ease-in;
`
export const SectionText2 = Styled.p`
    margin-left:0.25rem;
    min-height:6rem;
    width:15rem;
    animation: ${render} 0.25s ease-in;

`
export const SectionText3 = Styled.p`
    margin-left:0.25rem;
    min-height:6rem;
    width:15rem;
    animation: ${render} 0.25s ease-in;
`

export const Span = Styled.span`
    display:block;
    margin:0 1rem;
    color:${(props) => props.theme.colors.background.danger};
`
