import React from "react"
import CategoriesItem from "../categoriesItem/CategoriesItem"
import PropTypes from "prop-types"
import * as S from "./CategoriesList.styles"

const CategoriesList = ({ className, routes }) => {
    return (
        <S.CategoriesContainer className={className}>
            {routes && routes.map((item, index) => <CategoriesItem path={item.path} key={index} text={item.text} />)}
        </S.CategoriesContainer>
    )
}

export default CategoriesList
