import React from "react"
import PropTypes from "prop-types"
import StripeCheckout from "react-stripe-checkout"
import CheckoutButton from "../checkoutButton/CheckoutButton"
import * as S from "./OrderInfo.styles"
import { useSelector, useDispatch } from "react-redux"
import { placeOrder } from "../../store/cart"
import { useNavigate } from "react-router-dom"

const OrderInfo = ({ quantity, totalPrice, handleChange, options, deliveryOption, handleBackToStore }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let finalPrice = Number(totalPrice) + Number(deliveryOption)
    const test = finalPrice.toFixed(2)
    const products = useSelector((state) => state.cart)
    const key = useSelector((state) => state.users.key)

    const makePayment = (data) => (token) => {
        dispatch(placeOrder(token, data))
        navigate("/")
    }

    return (
        <S.Container>
            <S.BigTest>Order Summary</S.BigTest>
            <S.TextWrapper>
                <S.SmallText>Quantity:</S.SmallText>
                <S.Span>{quantity}</S.Span>
            </S.TextWrapper>
            <S.TextWrapper>
                <S.SmallText>Sub-Total:</S.SmallText>
                <S.Span>{totalPrice} € </S.Span>
            </S.TextWrapper>
            <S.TextWrapper>
                <S.SmallText>Devilery:</S.SmallText>
                <S.Select
                    options={options}
                    handleChange={(e) => {
                        handleChange(e)
                    }}
                />
                {deliveryOption !== "0" && <S.Error>Not available at this moment</S.Error>}
            </S.TextWrapper>
            <S.TextWrapper>
                <S.SmallText>Total:</S.SmallText>
                <S.Span>
                    {deliveryOption ? (deliveryOption === "0" ? totalPrice : test) + " €" : "Choose delivery option"}
                </S.Span>
            </S.TextWrapper>
            {deliveryOption === "0" ? (
                <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_SECRET_KEY}
                    token={makePayment(products.cart)}
                    currency="EUR"
                    name={"checkout"}
                    amount={Number(totalPrice) * 100}
                >
                    <CheckoutButton>Checkout</CheckoutButton>
                </StripeCheckout>
            ) : (
                <S.ButtonsWrapper>
                    <S.BackToStore handleClick={handleBackToStore}>Continue shopping</S.BackToStore>
                </S.ButtonsWrapper>
            )}
        </S.Container>
    )
}

OrderInfo.propTypes = {
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    options: PropTypes.shape({}),
    deliveryOption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default OrderInfo
