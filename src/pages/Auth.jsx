import React from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import AccountContainer from "../components/accountContainer/AccountContainer"
import Notification from "../components/notification/Notification"

const Auth = () => {
    const { status, error, message } = useSelector((state) => state.users)

    return (
        <AccountContainer state={status}>
            {error && <Notification msg={error.err} status={Object.keys(error).toString()} />}
            {message && <Notification msg={message.msg} status={Object.keys(message).toString()} />}
            <Outlet />
        </AccountContainer>
    )
}

export default Auth
