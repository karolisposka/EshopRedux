import React from "react"
import CategoriesItem from "../categoriesItem/CategoriesItem"
import PropTypes from "prop-types"
import * as S from "./CategoriesList.styles"

const CategoriesList = ({ categories, className }) => {
    return (
        <>
            <S.CategoriesContainer className={className}>
                {categories.map((item, index) => (
                    <CategoriesItem name={item} key={index} categoryName={item} />
                ))}
            </S.CategoriesContainer>
        </>
    )
}

CategoriesList.propTypes = {
    categories: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
}

export default CategoriesList
