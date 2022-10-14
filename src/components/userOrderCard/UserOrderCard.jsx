import React from "react"
import * as S from "./UserOrderCard.styles"

import "swiper/css"
import "swiper/css/navigation"

const UserOrderCard = ({ created_at, completed_at, products, status, amount, className }) => {
    const convertUnixTimestamp = (unix) => {
        const date = new Date(unix)
        return {
            date: date.toLocaleDateString("en-us"),
            time: date.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }),
        }
    }

    const changeFormatOfAmount = (amount) => {
        return amount / 100 + " €"
    }

    return (
        <S.Container className={className}>
            <S.orderInformation>
                <S.Info>
                    <S.Key>Amount:</S.Key> {changeFormatOfAmount(amount)}
                </S.Info>
                <S.Info>
                    <S.Key>Order status: </S.Key>
                    <S.Status status={status}>{status === 0 ? "Processing" : "Completed"}</S.Status>
                </S.Info>
                <S.Info>
                    <S.Key>Order recieved at: </S.Key>
                    {convertUnixTimestamp(created_at).time}
                </S.Info>
                {status === 1 && (
                    <S.Info>
                        <S.Key>Order completed at: </S.Key>
                        {convertUnixTimestamp(completed_at).time}
                    </S.Info>
                )}
            </S.orderInformation>
            <S.ProductsContainer>
                {products &&
                    products.map((item, index) => (
                        <S.ProductContainer key={index}>
                            <S.Quantity>{item.quantity}x </S.Quantity>
                            <S.Title>{item.title}</S.Title>
                            <S.Price>{item.price} €</S.Price>
                            <S.Description>{item.description}</S.Description>
                        </S.ProductContainer>
                    ))}
            </S.ProductsContainer>
        </S.Container>
    )
}

export default UserOrderCard
