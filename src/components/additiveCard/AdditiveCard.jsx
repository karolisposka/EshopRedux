import React from "react"
import PropTypes from "prop-types"
import * as S from "./AdditiveCard.styles"

const AdditiveCard = ({ url, title, price, handleAdd }) => {
    return (
        <S.CardContainer>
            <S.Image image={url} />
            <S.ContentWrapper>
                <S.Title>{title}</S.Title>
                <S.Price>{price.toFixed(2)} €</S.Price>
                <S.StyledButton handleClick={handleAdd}>Add </S.StyledButton>
            </S.ContentWrapper>
        </S.CardContainer>
    )
}

AdditiveCard.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    handleAdd: PropTypes.func.isRequired,
}

export default AdditiveCard
