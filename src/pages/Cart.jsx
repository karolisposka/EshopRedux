import React from "react"
import Container from "../components/Container/Container"
import CartContainer from "../components/cartContainer/CartContainer"
import CartTable from "../components/cartTable/CartTable"
import OrderInfo from "../components/orderInfo/OrderInfo"

const items = [
    {
        title: "Test",
        price: 1.99,
        quantity: 2,
    },
]

const Cart = () => {
    return (
        <Container>
            <CartContainer>
                <CartTable items={items}></CartTable>
                <OrderInfo />
            </CartContainer>
        </Container>
    )
}

export default Cart
