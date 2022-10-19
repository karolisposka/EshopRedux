import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import * as S from "./MobileCartIcon.styles"

const MobileCartIcon = ({ handleClick }) => {
    const { cart } = useSelector((state) => state.cart)
    const totalQuantity = cart.reduce((a, b) => a + b.quantity, 0)
    return (
        <S.Container onClick={handleClick}>
            <S.CartIcon />
            <S.SpanFrame>
                <S.Span>{totalQuantity}</S.Span>
            </S.SpanFrame>
        </S.Container>
    )
}

MobileCartIcon.propTypes = {
    handleClick: PropTypes.func.isRequired,
}

export default MobileCartIcon
