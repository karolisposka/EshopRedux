import React from "react"
import PropTypes from "prop-types"
import * as S from "./Menu.styles"
// import CategoriesList from "../categoriesList/CategoriesList"
// import ProductsList from "../ProductsList/ProductsList"
// import { useParams, Outlet } from "react-router-dom"

const Menu = ({ children }) => {
    return <S.MenuContainer>{children}</S.MenuContainer>
}

export default Menu
