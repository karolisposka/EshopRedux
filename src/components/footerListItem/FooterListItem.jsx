import React from "react"
import PropTypes from "prop-types"
import * as S from "./FooterListItem.styles"

const FooterListItem = ({ title, handleClick }) => {
    return (
        <>
            <S.ListItem onClick={handleClick}>{title}</S.ListItem>
        </>
    )
}

FooterListItem.propTypes = {
    title: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default FooterListItem
