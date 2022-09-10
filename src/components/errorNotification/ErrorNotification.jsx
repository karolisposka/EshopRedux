import React from "react"
import * as S from "./ErrorNotification.styles"

const ErrorNotification = ({ children, success }) => {
    return (
        <S.NotificationContainer success={success} classNames="show">
            <S.Span>{children}</S.Span>
        </S.NotificationContainer>
    )
}

export default ErrorNotification
