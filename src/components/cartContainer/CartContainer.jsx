import React from "react"
import PropTypes from "prop-types"
import * as S from "./CartContainer.styles"

const CartContainer = ({ children }) => {
    return (
        <>
            <S.CartContainer>{children}</S.CartContainer>
        </>
    )
}

CartContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CartContainer
