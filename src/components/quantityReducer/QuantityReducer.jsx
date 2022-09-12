import React from "react"
import PropTypes from "prop-types"
import * as S from "./QuantityReducer.styles"

const QuantityReducer = ({ quantity, handleDecrement, handleIncrement, classNames }) => {
    return (
        <S.ReducerContainer classNamaes={classNames}>
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
}

export default QuantityReducer
