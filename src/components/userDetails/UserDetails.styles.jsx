import Styled from "styled-components"
import CategoriesList from "../categoriesList/CategoriesList"
import Carousel from "../carousel/Carousel"
import Container from "../Container/Container"
import { FaBox, FaHistory, FaAddressBook } from "react-icons/fa"

export const ContentSection = Styled.section`
    display:flex;
    width:100%;
  

`

export const StyledCategoriesList = Styled(CategoriesList)`
  flex:1;

`

export const WindowWrapper = Styled.div`
  flex:3;
  margin:1rem;
  min-height:74vh;
  @media(max-width:768px){
    flex:none;
  }

`
export const StyledCarousel = Styled(Carousel)`
  display:none;
  @media(max-width:768px){
    display:block;
  }
`

export const TitleContainer = Styled.div`
  margin:1rem;
  width:100%;
  font-family:${(props) => props.theme.fonts.names.primary};
  background:${(props) => props.theme.colors.background.secondary};

`

export const TextWrapper = Styled.section`
  padding:1rem;

`

export const Title = Styled.h4`
  font-size:1.5rem;
  margin:0.5rem 0;  
  text-transform: uppercase;

`

export const StyledOrdersIcon = Styled(FaBox)`
  font-size:3rem;
  color:${(props) => props.theme.colors.background.icons};

`
export const StyledHistoryIcon = Styled(FaHistory)`
  font-size:3rem;
  color:${(props) => props.theme.colors.background.icons};

`
export const StyledAddressBook = Styled(FaAddressBook)`
  font-size:3rem;
  color:${(props) => props.theme.colors.background.icons};


`

export const AddAddress = Styled.button`
  border: 2px solid ${(props) => props.theme.colors.background.icons};
  text-transform: uppercase;
  padding:0.25rem 3rem;
  font-weight:700;
  background:transparent;
  cursor:pointer;
  box-sizing:border-box;
  
`
