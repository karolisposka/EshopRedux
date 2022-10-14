import React from "react"
import PropTypes from "prop-types"
import * as S from "./QuantityReducer.styles"

const QuantityReducer = ({ quantity, handleDecrement, handleIncrement, className }) => {
    return (
        <S.ReducerContainer className={className}>
            <S.DecrementBtn onClick={handleDecrement}>-</S.DecrementBtn>
            <S.QuantitySpan>{quantity}</S.QuantitySpan>
            <S.IncrementBtn onClick={handleIncrement}>+</S.IncrementBtn>
        </S.ReducerContainer>
    )
}

QuantityReducer.propTypes = {
    quantity: PropTypes.number.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    className: PropTypes.string,
}

export default QuantityReducer
