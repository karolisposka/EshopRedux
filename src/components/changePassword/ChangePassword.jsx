import React from "react"
import * as S from "./ChangePassword.styles"
import ChangePasswordForm from "../changePasswordForm/ChangePasswordForm"

import { useSelector } from "react-redux"

const ChangePassword = () => {
    const data = useSelector((state) => state.users)
    return (
        <S.Container>
            <S.TitleWrapper>
                <S.ChangePasswordIcon />
                <S.Title>Change Password</S.Title>
            </S.TitleWrapper>
            {data.error && <S.StyledNotification status={Object.keys(data.error).toString()} msg={data.error.err} />}
            <ChangePasswordForm />
        </S.Container>
    )
}

export default ChangePassword
