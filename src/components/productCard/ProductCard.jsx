import React, { useState, useEffect } from "react"
import * as S from "./ProductCard.styles"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ description, title, smallPrice, className, category, image }) => {
    const navigate = useNavigate()
    const data = useSelector((state) => state.cart)
    const [showExpandBtn, setShowExpandBtn] = useState(false)
    const [expanded, setExpanded] = useState(false)

    const checkDescriptionLength = (text) => {
        if (text.length > 45) {
            setShowExpandBtn(true)
        }
    }

    const checkProductCategory = (product) => {
        switch (product) {
            case product.includes("Vistiena"):
                return <S.Chicken />
            case product.includes("Kumpis"):
                return <S.Ham />
            default:
                ;<div />
        }
    }

    useEffect(() => {
        checkDescriptionLength(description)
    }, [])

    return (
        <S.Card className={className}>
            <S.Image image={image} />
            <S.ContentWrapper>
                <S.Title>
                    {title} {checkProductCategory(description)}
                </S.Title>
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
                <S.Price>from {smallPrice} € </S.Price>
                <S.StyledButton handleClick={() => navigate(`${title}`)}>
                    View
                    <S.CartIcon />
                </S.StyledButton>
            </S.ContentWrapper>
        </S.Card>
    )
}

ProductCard.propTypes = {
    description: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default ProductCard
