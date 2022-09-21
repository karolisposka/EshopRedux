import React from "react"
import CategoriesItem from "../categoriesItem/CategoriesItem"
import PropTypes from "prop-types"
import * as S from "./CategoriesList.styles"
import { Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { loadCategories } from "../../store/products"

const CategoriesList = () => {
    const dispatch = useDispatch()
    dispatch(loadCategories())
    const categories = useSelector((state) => state.products.categories)
    const mappedCategories = categories.map((item) => ({
        path: "/products/" + "categories/" + item,
        text: item,
    }))
    return (
        <>
            <S.CategoriesContainer>
                {mappedCategories.map((item, index) => (
                    <CategoriesItem path={item.path} key={index} text={item.text} />
                ))}
            </S.CategoriesContainer>
        </>
    )
}

CategoriesList.propTypes = {
    categories: PropTypes.shape({
        text: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    }),
}

export default CategoriesList
