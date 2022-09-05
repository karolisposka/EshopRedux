import React from "react"
import CategoriesItem from "../categoriesItem/CategoriesItem"

import * as S from "./CategoriesList.styles"

const CategoriesList = ({ categories }) => {
    return (
        <>
            <S.CategoriesContainer>
                {categories.map((item, index) => (
                    <CategoriesItem name={item} key={index} categoryName={item} />
                ))}
            </S.CategoriesContainer>
        </>
    )
}

export default CategoriesList
