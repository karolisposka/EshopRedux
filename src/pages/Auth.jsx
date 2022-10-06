import React, { useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import AccountContainer from "../components/accountContainer/AccountContainer"

const Auth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { status } = useSelector((state) => state.users)

    return (
        <AccountContainer state={status}>
            <Outlet />
        </AccountContainer>
    )
}

export default Auth
