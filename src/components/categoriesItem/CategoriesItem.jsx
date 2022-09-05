import React from "react"
import * as S from "./CategoriesItem.styles"
import { useDispatch } from "react-redux"
import { productsFiltered } from "../../store/products"

const CategoriesItem = ({ categoryName }) => {
    const dispatch = useDispatch()
    return (
        <S.ListItem
            value={categoryName}
            onClick={() => {
                console.log(categoryName)
                dispatch(productsFiltered(categoryName))
            }}
        >
            {categoryName}
        </S.ListItem>
    )
}

export default CategoriesItem
