import React from "react"
import * as S from "./CategoriesItem.styles"
import { filterProducts } from "../../store/products"
import { useDispatch } from "react-redux"

const CategoriesItem = ({ categoryName }) => {
    const dispatch = useDispatch()
    return (
        <S.ListItem>
            <S.Item
                value={categoryName}
                onClick={() => {
                    dispatch(filterProducts(categoryName))
                }}
            >
                {categoryName}
                <S.Arrow />
            </S.Item>
        </S.ListItem>
    )
}

export default CategoriesItem
