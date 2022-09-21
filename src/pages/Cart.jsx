import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux/es/exports"
import Container from "../components/Container/Container"
import CartContainer from "../components/cartContainer/CartContainer"
import CartTable from "../components/cartTable/CartTable"
import OrderInfo from "../components/orderInfo/OrderInfo"
import ShippingForm from "../components/shippingForm/ShippingForm"
import BackToStore from "../components/backToStore/BackToStore"
import Footer from "../components/footer/Footer"
import MainContainer from "../components/mainContainer/MainContainer"
import AccountPageInfo from "../components/AccountPageInfoSection/AccountPromo"

const Cart = () => {
    const navigate = useNavigate()
    const [deliveryOption, setDeliveryOption] = useState()
    const cartData = useSelector((state) => state.cart.cart)
    const userKey = useSelector((state) => state.users.key)
    const totalQuantity = cartData.reduce((current, value) => current + value.quantity, 0)
    const totalAmount = cartData.reduce((current, value) => current + value.price * value.quantity, 0)
    const deliveryAtHome = 5

    const options = [
        { value: deliveryAtHome, label: "Home" },
        { value: "0", label: "Pick up" },
    ]

    return (
        <>
            <MainContainer>
                <Container>
                    {cartData.length === 0 ? (
                        <BackToStore
                            handleClick={() => {
                                navigate("/")
                            }}
                        />
                    ) : (
                        <>
                            <CartContainer>
                                <CartTable items={cartData}></CartTable>
                                <OrderInfo
                                    totalPrice={totalAmount.toFixed(2)}
                                    quantity={totalQuantity}
                                    options={options}
                                    deliveryOption={deliveryOption}
                                    handleChange={(value) => {
                                        setDeliveryOption(value)
                                    }}
                                />
                            </CartContainer>
                            {deliveryOption === deliveryAtHome && (
                                <ShippingForm
                                    title="Shipping address"
                                    handleCheckbox={(values) => {
                                        console.log(values)
                                    }}
                                />
                            )}
                            {!userKey ? <AccountPageInfo flex="flex" /> : null}
                        </>
                    )}
                </Container>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Cart
