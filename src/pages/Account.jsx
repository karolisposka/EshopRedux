import React from "react"
import AccountContainer from "../components/accountContainer/AccountContainer"
import LoginForm from "../components/loginForm/LoginForm"
import RegisterForm from "../components/registerForm/RegisterForm"
import MainContainer from "../components/mainContainer/MainContainer"
import { loggin, formChanged, formChanged2, register } from "../../src/store/users"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { formDisplayed } from "../../src/store/users"
import ErrorNotification from "../components/errorNotification/ErrorNotification"
import { useNavigate } from "react-router-dom"
import AccountPageLayout from "../components/accountPageLayout/AccountPageLayout"
import AccountPromo from "../components/AccountPageInfoSection/AccountPromo"

const Account = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const status = useSelector((state) => state.users)

    const checkIfLoggedIn = () => {
        if (status.success === true) {
            return navigate("/userDetails")
        }
    }

    checkIfLoggedIn()

    return (
        <>
            <MainContainer>
                <AccountPageLayout>
                    <AccountContainer state={status}>
                        {status.error.err && <ErrorNotification success={false}>{status.error.err}</ErrorNotification>}
                        {status.message.msg && (
                            <ErrorNotification success={true}>{status.message.msg}</ErrorNotification>
                        )}
                        {status.status === "login" ? (
                            <LoginForm
                                handleSubmit={(values) => {
                                    dispatch(loggin(values))
                                }}
                                handleClick={() => {
                                    dispatch(formChanged())
                                    setTimeout(() => {
                                        dispatch(formChanged2())
                                        dispatch(formDisplayed("register"))
                                    }, 1000)
                                }}
                                status={status.loading}
                            />
                        ) : (
                            <RegisterForm
                                handleSubmit={(values) => {
                                    dispatch(register(values))
                                }}
                                handleClick={() => {
                                    dispatch(formChanged())
                                    setTimeout(() => {
                                        dispatch(formChanged2())
                                        dispatch(formDisplayed("login"))
                                    }, 1000)
                                }}
                            />
                        )}
                    </AccountContainer>
                    <AccountPromo />
                </AccountPageLayout>
            </MainContainer>
        </>
    )
}

export default Account
