import React from "react"
import CheckoutButton from "../checkoutButton/CheckoutButton"
import * as S from "./OrderInfo.styles"

const OrderInfo = ({ quantity, totalPrice, handleChange, options, deliveryOption }) => {
    let finalPrice = Number(totalPrice) + Number(deliveryOption)
    const test = finalPrice.toFixed(2)

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
                <CheckoutButton
                    handleClick={() => {
                        alert("redirect to checkout")
                    }}
                />
            ) : (
                <div />
            )}
        </S.Container>
    )
}

export default OrderInfo
