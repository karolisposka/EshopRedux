import React from "react"
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

export default MobileCartIcon
