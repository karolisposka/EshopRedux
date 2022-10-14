import Styled from "styled-components"
import Container from "../Container/Container"
import Loader from "../loader/Loader"
import { FaCartArrowDown, FaUser } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"
import { RiAdminFill } from "react-icons/ri"

export const NavigationContainer = Styled.div`
  border-bottom:1px solid rgba(0,0,0,0.3);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  max-height:6rem;  
`

export const Section = Styled.section`
    max-width:1200px;
    height:100%;
    margin:0 auto;
`

export const ItemsContainer = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const LogoWrapper = Styled.div`
    margin:1rem 2rem;
    display:flex;
    align-items:center;
    @media(max-width:768px){
        margin:0 1rem;
    }

`
export const LogoImg = Styled.img`
    width:3rem;
    height:3rem;

`

export const CartWrapper = Styled.div`
    margin: 1rem;
    display:Flex;
    @media(max-width:768px){
        display:none;
    }
    

`
export const CartIcon = Styled(FaCartArrowDown)`
    font-size:1.5rem;
    color: ${(props) => props.theme.colors.background.icons}; 
    display:relative;
    cursor:pointer;
  
    
`

export const BurgerMenu = Styled(HiMenu)`
    font-size:1.5rem;
    color: ${(props) => props.theme.colors.background.icons};
    cursor:pointer;
    margin:1rem;
    @media(min-width:768px){
        display:none;
    }
`

export const UserIcon = Styled(FaUser)`
    color:${(props) => props.theme.colors.background.icon};
    cursor:pointer;
    margin: 0 2rem;
    font-size:1.5rem;
    position:relative;

`

export const AdminIcon = Styled(RiAdminFill)`
    color:${(props) => props.theme.colors.background.icon};
    cursor:pointer;
    font-size:1.7rem;
    position:relative;

`

export const CartItemsNumber = Styled.span`
    color:white; 
    width:1rem;
    height:1rem;
    padding:0.2rem;
    background:${(props) => props.theme.colors.background.warning}; //pakeisti spalva
    font-size:0.8rem;
    border-radius:100%;
    display:flex;
    justify-content:center;
    align-self: flex-end;
`
