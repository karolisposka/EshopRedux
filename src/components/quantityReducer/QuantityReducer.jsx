import React from "react"
import * as S from "./QuantityReducer.styles"

const QuantityReducer = ({ quantity, handleDecrement, handleIncrement }) => {
    return (
        <S.ReducerContainer>
            <S.DecrementBtn onClick={handleDecrement}>-</S.DecrementBtn>
            <S.QuantitySpan>{quantity}</S.QuantitySpan>
            <S.IncrementBtn onClick={handleIncrement}>+</S.IncrementBtn>
        </S.ReducerContainer>
    )
}

export default QuantityReducer
