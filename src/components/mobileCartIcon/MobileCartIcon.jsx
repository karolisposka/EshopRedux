import React from "react"
import PropTypes from "prop-types"
import * as S from "./MobileCartIcon.styles"

const MobileCartIcon = ({ quantity, handleClick }) => {
    return (
        <S.Container onClick={handleClick}>
            <S.CartIcon />
            <S.SpanFrame>
                <S.Span>{quantity}</S.Span>
            </S.SpanFrame>
        </S.Container>
    )
}

MobileCartIcon.propTypes = {
    quantity: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default MobileCartIcon
