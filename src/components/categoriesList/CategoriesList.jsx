import React from "react"
import CategoriesItem from "../categoriesItem/CategoriesItem"
import { filterProducts } from "../../store/products"
import { useDispatch } from "react-redux"
import * as S from "./CategoriesList.styles"

console.log(filterProducts)

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
