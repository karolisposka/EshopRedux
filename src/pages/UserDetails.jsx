import React, { useEffect } from "react"
import MainContainer from "../components/mainContainer/MainContainer"
import Footer from "../components/footer/Footer"
import Container from "../components/Container/Container"
import VerticalNavigation from "../components/verticalNavigation/VerticalNavigation"
import UserDetailsLayout from "../components/userDetailsLayout/UserDetailsLayout"
import UserDetailsDisplayWindow from "../components/userDetailsDisplayWindow/UserDetailsDisplayWindow"
import AddressBook from "../components/addressBook/AddressBook"
import ChangePassword from "../components/changePassword/ChangePassword"
import OrdersHistory from "../components/ordersHistory/OrdersHistory"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails, userKeyDeleted, setAddressAsDefault, PostAddress, deleteAddress } from "../store/users"
import { Route, Routes } from "react-router-dom"

const ChangeCheckBoxValue = (status) => {
    if (status === 1) {
        return 0
    } else {
        return 1
    }
}

const routes = [
    { path: "history", Element: OrdersHistory },
    { path: "address", Element: AddressBook },
    { path: "changePassword", Element: ChangePassword },
]

const links = [
    {
        to: "orders",
        text: "Orders",
    },
    {
        to: "history",
        text: "Orders History",
    },
    {
        to: "address",
        text: "Address Book",
    },
    {
        to: "changePassword",
        text: "Change Password",
    },
]

const UserDetails = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDetails())
    }, [])

    const data = useSelector((state) => state.users)

    return (
        <MainContainer>
            <Container>
                <UserDetailsLayout>
                    <VerticalNavigation
                        items={links}
                        handleClick={() => {
                            dispatch(userKeyDeleted())
                        }}
                    />
                    <UserDetailsDisplayWindow>
                        <Routes>
                            <Route path="history" element={<OrdersHistory />} />

                            <Route
                                path="address"
                                element={
                                    <AddressBook
                                        data={data}
                                        handleSubmit={(values) => {
                                            dispatch(PostAddress(values))
                                        }}
                                        handleDelete={(value) => {
                                            dispatch(deleteAddress(value))
                                        }}
                                        handleChange={(values) => {
                                            const activeItems = data.address.filter((item) => item.default_status === 1)
                                            if (activeItems.length === 0 && values.status === 0) {
                                                dispatch(
                                                    setAddressAsDefault({
                                                        id: values.id,
                                                        status: ChangeCheckBoxValue(values.status),
                                                    })
                                                )
                                            }
                                            if (values.status === 1) {
                                                dispatch(
                                                    setAddressAsDefault({
                                                        id: values.id,
                                                        status: ChangeCheckBoxValue(values.status),
                                                    })
                                                )
                                            }
                                            if (activeItems.length >= 1 && values.status === 0) {
                                                return alert("invalid selection")
                                            }
                                        }}
                                    />
                                }
                            />
                            <Route path="changePassword" element={<ChangePassword data={data} />} />
                        </Routes>
                    </UserDetailsDisplayWindow>
                </UserDetailsLayout>
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default UserDetails
