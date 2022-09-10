import Styled from "styled-components"
import { FaFilter } from "react-icons/fa"
import { BiRefresh } from "react-icons/bi"

export const FiltersContainer = Styled.div`
    margin: 0rem 1rem;
    padding-top:1rem;
    display:flex;
    align-items:center;
    
`

export const Category = Styled.div`
    flex:1;
    @media(max-width:768px){
        display:none;
    }

`

export const FiltersWrapper = Styled.div`
    display:flex;
    align-items:Center;
    flex-direction:row-reverse;
    flex:2;

`

export const FilterIcon = Styled(FaFilter)`
    color:${(props) => props.theme.colors.background.icons};
    margin-left:1rem;
    @media(max-width:768px){
        display:none;
    }
`

export const RefreshIcon = Styled(BiRefresh)`
    color: ${(props) => props.theme.colors.fonts.info};
    font-size: ${(props) => props.theme.fonts.size.strong};
    cursor: pointer;
    &&.fade-enter {
        transform: rotate(0deg);
    }
    &&.fade-enter-active {
        transform: rotate(360deg);
        transition: all 700ms ease-out;
    }
    &&.fade-exit {
        transform: rotate(360deg);
    }
    &&.fade-exit-active {
        transform: rotate(720deg);
        transition: all 700ms ease-out;
    }
`
