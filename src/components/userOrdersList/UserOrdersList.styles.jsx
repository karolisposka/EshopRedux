import Styled from "styled-components"
import UserOrderCard from "../userOrderCard/UserOrderCard"

export const List = Styled.div`
    display:Flex;
    flex-wrap: wrap;
    gap:0.5rem;
    width:100%;
    height:100%;
    box-sizing:border-box;
`

export const StyledUserOrderCard = Styled(UserOrderCard)`
    width:calc(33% - 0.2rem);
    @media(max-width:567px){
        width:100%;
    };
    @media(min-width:567px) and (max-width:900px){
        width:calc(50% - 1rem);
    };
`
