import React from "react"
import * as S from "./ChangePassword.styles"
import ChangePasswordForm from "../changePasswordForm/ChangePasswordForm"
import { useDispatch } from "react-redux"
import { changePassword } from "../../store/users"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const ChangePassword = ({ data }) => {
    console.log(data)
    const dispatch = useDispatch()
    return (
        <S.Container>
            <S.TitleWrapper>
                <S.ChangePasswordIcon />
                <S.Title>Change Password</S.Title>
            </S.TitleWrapper>
            {(data.error.err || data.message.msg) && (
                <CSSTransition on={data.error || data.message} timeout={200} classNames="show">
                    <S.StyledErrorNotification className="show" success={data.message.msg ? true : false}>
                        {data.error.err || data.message.msg}
                    </S.StyledErrorNotification>
                </CSSTransition>
            )}

            <ChangePasswordForm
                handleSubmit={(values) => {
                    dispatch(changePassword(values))
                }}
            />
        </S.Container>
    )
}

export default ChangePassword
