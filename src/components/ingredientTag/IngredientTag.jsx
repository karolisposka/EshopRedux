import React from "react"
import * as S from "./IngredientTag.styles"
import PropTypes from "prop-types"

const IngredientTag = ({ handleDelete, handleUndo, children, deleted, id }) => {
    return (
        <S.Tag deleted={deleted} id={id}>
            {children}
            {deleted ? <S.UndoIngredient onClick={handleUndo} /> : <S.deleteIngredient onClick={handleDelete} />}
        </S.Tag>
    )
}

IngredientTag.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleUndo: PropTypes.func.isRequired,
    children: PropTypes.node,
    deleted: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}

export default IngredientTag
