import Styled from "styled-components"
import { FaBox } from "react-icons/fa"

export const Container = Styled.div`
    width:100%;
    background: transparent;
    border-radius:0.25rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding:1rem;
    font-family:${(props) => props.theme.fonts.names.primary};
    box-sizing:border-box;
    min-height:50vh;
`

export const TitleWrapper = Styled.div`
      
   

`

export const OrdersIcon = Styled(FaBox)`
    color:${(props) => props.theme.colors.background.icons};
    font-size:3rem;
`

export const Title = Styled.h4`
    text-transform: uppercase;
    margin:0.5rem 0;
`
