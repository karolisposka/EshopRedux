import React from "react"
import * as S from "./IngredientTag.styles"

const IngredientTag = ({ handleDelete, handleUndo, children, deleted, id }) => {
    return (
        <S.Tag deleted={deleted} id={id}>
            {children}
            {deleted ? <S.UndoIngredient onClick={handleUndo} /> : <S.deleteIngredient onClick={handleDelete} />}
        </S.Tag>
    )
}

export default IngredientTag
