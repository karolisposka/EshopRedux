import React from "react"
import PropTypes from "prop-types"
import axios from "axios"
import * as S from "./OrderInfo.styles"
import { useSelector } from "react-redux"

const OrderInfo = ({ quantity, totalPrice, handleChange, options, deliveryOption, handleBackToStore }) => {
    const fetch = async (products, key, deliveryOption) => {
        try {
            const res = await axios.request({
                baseURL: process.env.REACT_APP_BACKEND_BASE,
                url: process.env.REACT_APP_MAKE_ORDER,
                method: "post",
                data: {
                    products: products,
                    userKey: key,
                    delivery: deliveryOption,
                },
                headers: {
                    "content-type": "application/json",
                },
            })
            if (res.data) {
                return window.open(res.data)
            } else {
                return console.log("error")
            }
        } catch (err) {
            console.log(err)
        }
    }

    let finalPrice = Number(totalPrice) + Number(deliveryOption)
    const test = finalPrice.toFixed(2)
    const products = useSelector((state) => state.cart)
    const key = useSelector((state) => state.users.key)

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
                {deliveryOption === 5 && <S.Error>Not available at this moment</S.Error>}
            </S.TextWrapper>
            <S.TextWrapper>
                <S.SmallText>Total:</S.SmallText>
                <S.Span>
                    {deliveryOption ? (deliveryOption === "0" ? totalPrice : test) + " €" : "Choose delivery option"}
                </S.Span>
            </S.TextWrapper>
            {deliveryOption === "0" ? (
                // <StripeCheckout
                //     stripeKey={process.env.REACT_APP_STRIPE_SECRET_KEY}
                //     token={}
                //     currency="EUR"
                //     name={"checkout"}
                //     amount={Number(totalPrice) * 100}
                // >
                <S.CheckOutButton
                    handleClick={() => {
                        fetch(products.cart, key, deliveryOption)
                    }}
                >
                    Checkout
                </S.CheckOutButton>
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
