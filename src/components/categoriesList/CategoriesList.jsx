import React, { useEffect } from "react"
import CategoriesItem from "../categoriesItem/CategoriesItem"
import PropTypes from "prop-types"
import * as S from "./CategoriesList.styles"
import { useSelector, useDispatch } from "react-redux"
import { loadCategories } from "../../store/products"

const CategoriesList = ({ className }) => {
    const categories = useSelector((state) => state.products.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCategories())
    }, [])

    const mappedCategories = categories.map((item) => ({
        path: "/" + item,
        text: item,
    }))

    return (
        <S.CategoriesContainer className={className}>
            {mappedCategories.map((item, index) => (
                <CategoriesItem path={item.path} key={index} text={item.text} />
            ))}
        </S.CategoriesContainer>
    )
}

CategoriesList.propTypes = {
    categories: PropTypes.shape({
        text: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    }),
}

export default CategoriesList
