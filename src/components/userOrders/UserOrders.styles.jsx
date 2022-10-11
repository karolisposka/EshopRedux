import Styled from "styled-components"
import { FaBox } from "react-icons/fa"

export const Container = Styled.div`
    width:100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius:0.25rem;
    padding:1rem;
    font-family:${(props) => props.theme.fonts.names.primary};
    box-sizing:border-box;


`

export const OrderIcon = Styled(FaBox)`
    color:${(props) => props.theme.colors.background.icons};
    font-size:3rem;
`

export const Title = Styled.h4`
    text-transform: uppercase;
    margin:0.5rem 0;
`

export const List = Styled.div`
    display:Flex;
    flex-wrap: wrap;
    gap:1rem;
    width:100%;
    height:100%;
    box-sizing:border-box;
`
