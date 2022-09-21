import React from "react"
import * as S from "./AdditiveCard.styles"

const AdditiveCard = ({ url, title, price, handleAdd }) => {
    return (
        <S.CardContainer>
            <S.Image image={url} />
            <S.ContentWrapper>
                <S.Title>{title}</S.Title>
                <S.Price>{price}</S.Price>
                <S.StyledButton handleClick={handleAdd}>Add </S.StyledButton>
            </S.ContentWrapper>
        </S.CardContainer>
    )
}

export default AdditiveCard
