import React, { useState, useEffect } from "react"
import * as S from "./ProductCard.styles"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { productAddedToCart } from "../../store/cart"

const ProductCard = ({ description, title, price, handleClick, className, id }) => {
    const data = useSelector((state) => state.entities.cart)
    const dispatch = useDispatch()
    const [showExpandBtn, setShowExpandBtn] = useState(false)
    const [expanded, setExpanded] = useState(false)
    console.log(data)

    const checkDescriptionLength = (text) => {
        if (text.length > 45) {
            setShowExpandBtn(true)
        }
    }

    useEffect(() => {
        checkDescriptionLength(description)
    }, [])

    return (
        <S.Card className={className}>
            <S.Title>{title}</S.Title>
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
            <S.Price>{price} € </S.Price>
            <S.StyledButton id={id} handleClick={() => dispatch(productAddedToCart(id))}>
                Add to Cart
                <S.CartIcon />
            </S.StyledButton>
        </S.Card>
    )
}

ProductCard.propTypes = {
    description: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default ProductCard
