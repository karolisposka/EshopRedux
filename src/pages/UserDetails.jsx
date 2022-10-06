import React, { useEffect } from "react"
import MainContainer from "../components/mainContainer/MainContainer"
import Footer from "../components/footer/Footer"
import Container from "../components/Container/Container"
import VerticalNavigation from "../components/verticalNavigation/VerticalNavigation"
import UserDetailsLayout from "../components/userDetailsLayout/UserDetailsLayout"
import UserDetailsDisplayWindow from "../components/userDetailsDisplayWindow/UserDetailsDisplayWindow"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails, userKeyDeleted } from "../store/users"
import { Outlet } from "react-router-dom"

const routes = [
    {
        to: "",
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
                        items={routes}
                        handleClick={() => {
                            dispatch(userKeyDeleted())
                        }}
                    />
                    <UserDetailsDisplayWindow>
                        <Outlet />
                    </UserDetailsDisplayWindow>
                </UserDetailsLayout>
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default UserDetails
