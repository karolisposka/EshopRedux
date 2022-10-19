import React, { useState, useEffect } from "react"
import * as S from "./ProductCard.styles"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ description, title, price, className, category, image }) => {
    const navigate = useNavigate()
    const [showExpandBtn, setShowExpandBtn] = useState(false)
    const [expanded, setExpanded] = useState(false)

    const checkDescriptionLength = (text) => {
        if (text && text.length > 45) {
            setShowExpandBtn(true)
        } else {
            setShowExpandBtn(false)
        }
    }

    useEffect(() => {
        checkDescriptionLength(description)
    }, [])

    return (
        <S.Card className={className}>
            <S.Image image={image} />
            <S.ContentWrapper>
                <S.Title>{title}</S.Title>
                {description !== null ? (
                    <S.Text>
                        {expanded && showExpandBtn ? description.substr(0, 999) : description.substr(0, 45)}
                        {showExpandBtn && (
                            <S.Expand
                                onClick={() => {
                                    setExpanded(!expanded)
                                }}
                            >
                                {expanded ? " less" : " more"}
                            </S.Expand>
                        )}
                    </S.Text>
                ) : null}
                <S.Price>from {Number(price).toFixed(2)} € </S.Price>
                <S.ButtonWrapper>
                    <S.StyledButton handleClick={() => navigate(`/${category}/${title}`)}>
                        View
                        <S.CartIcon />
                    </S.StyledButton>
                </S.ButtonWrapper>
            </S.ContentWrapper>
        </S.Card>
    )
}

ProductCard.propTypes = {
    description: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
}

export default ProductCard
