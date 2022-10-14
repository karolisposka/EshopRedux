import React, { useEffect } from "react"
import MainContainer from "../components/mainContainer/MainContainer"
import Footer from "../components/footer/Footer"
import { open } from "../store/cart"
import Container from "../components/Container/Container"
import VerticalNavigation from "../components/verticalNavigation/VerticalNavigation"
import UserDetailsLayout from "../components/userDetailsLayout/UserDetailsLayout"
import UserDetailsDisplayWindow from "../components/userDetailsDisplayWindow/UserDetailsDisplayWindow"
import MobileSideMenu from "../components/mobileSideMenu/MobileSideMenu"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getUserDetails, userKeyDeleted } from "../store/users"
import { allDataDeleted } from "../store/userOrders"
import { Outlet } from "react-router-dom"

const routes = [
    {
        path: "",
        text: "Orders",
    },
    {
        path: "history",
        text: "Orders History",
    },
    {
        path: "address",
        text: "Address Book",
    },
    {
        path: "changePassword",
        text: "Change Password",
    },
]

const UserDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUserDetails())
    }, [])

    const data = useSelector((state) => state.users)
    const mobileSideBarStatus = useSelector((state) => state.cart.status)

    return (
        <MainContainer>
            <Container>
                <UserDetailsLayout>
                    <MobileSideMenu
                        routes={routes}
                        open={mobileSideBarStatus}
                        handleExit={() => {
                            dispatch(open(false))
                        }}
                        handleClick={() => {
                            navigate("/account")
                        }}
                    />
                    <VerticalNavigation
                        items={routes}
                        handleClick={() => {
                            dispatch(userKeyDeleted())
                            dispatch(allDataDeleted())
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
