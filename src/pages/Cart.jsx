import React from "react"
import { useSelector } from "react-redux/es/exports"
import Container from "../components/Container/Container"
import CartContainer from "../components/cartContainer/CartContainer"
import CartTable from "../components/cartTable/CartTable"
import OrderInfo from "../components/orderInfo/OrderInfo"

const Cart = () => {
    const cartData = useSelector((state) => state.entities.cart.cart)

    return (
        <Container>
            <CartContainer>
                <CartTable items={cartData}></CartTable>
                <OrderInfo />
            </CartContainer>
        </Container>
    )
}

export default Cart
