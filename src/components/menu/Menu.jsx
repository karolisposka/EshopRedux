import React from "react"
import PropTypes from "prop-types"
import * as S from "./Menu.styles"
import CategoriesList from "../categoriesList/CategoriesList"
import ProductsList from "../ProductsList/ProductsList"
import { useParams, Outlet } from "react-router-dom"

const Menu = () => {
    const { category } = useParams()
    return (
        <S.MenuContainer>
            <CategoriesList />
            {!category && <ProductsList />}
            <Outlet />
        </S.MenuContainer>
    )
}

export default Menu
