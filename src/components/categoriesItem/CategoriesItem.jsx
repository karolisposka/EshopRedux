import React from "react"
import * as S from "./CategoriesItem.styles"
import PropTypes from "prop-types"

const CategoriesItem = ({ path, text, className }) => {
    return (
        <S.ListItem className={className}>
            <S.Item to={path}>{text}</S.Item>
        </S.ListItem>
    )
}
CategoriesItem.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default CategoriesItem
