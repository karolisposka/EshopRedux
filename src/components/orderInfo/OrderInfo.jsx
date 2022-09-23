import React from "react"
import PropTypes from "prop-types"
import StripeCheckout from "react-stripe-checkout"
import CheckoutButton from "../checkoutButton/CheckoutButton"
import * as S from "./OrderInfo.styles"
import { useSelector, dispatch } from "react-redux"

const OrderInfo = ({ quantity, totalPrice, handleChange, options, deliveryOption, handleBackToStore }) => {
    let finalPrice = Number(totalPrice) + Number(deliveryOption)
    const test = finalPrice.toFixed(2)
    const products = useSelector((state) => state.cart.cart)

    const makePayment = (data) => async (token) => {
        return fetch("http://localhost:8080/v1/cart/checkout", {
            method: "post",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                token,
                products: data,
            }),
        })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
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
                    token={makePayment(products)}
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
