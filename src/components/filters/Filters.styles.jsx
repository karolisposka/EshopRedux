import Styled from "styled-components"
import { BiRefresh } from "react-icons/bi"
import SelectDropDown from "../SelectDropDown/SelectDropDown"
import SearchBox from "../searchBox/SearchBox"

export const FiltersContainer = Styled.div`
    margin: 0rem 2rem;
    padding-top:1rem;
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 4fr;
    align-items:center;
    gap:0;
    @media(max-width:768px){
        grid-template-columns: 1fr;
    }
`

export const FiltersWrapper = Styled.div`
    width:100%;
    display:flex;
    margin-right:1rem;
    grid-column: 2;
    align-items:Center;
    justify-content:flex-end;
    @media(max-width:768px){
        grid-column: 1;
    }

`

export const StyledSearchBox = Styled(SearchBox)`
   
   
    
`

export const RefreshIcon = Styled(BiRefresh)`
    color: ${(props) => props.theme.colors.fonts.info};
    font-size: ${(props) => props.theme.fonts.size.strong};
    margin-left:1rem;
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
    @media(max-width:768px){
        display:none;
    }
`

export const Select = Styled(SelectDropDown)`
   @media(max-width:768px){
        
   }
`

export const CategoriesSelect = Styled(SelectDropDown)`
    display:none;
    @media(max-width:768px){
        display:block;
    }

`
