import React from "react"
import * as S from "./ErrorNotification.styles"

const ErrorNotification = ({ children, success, classNames }) => {
    return (
        <S.NotificationContainer success={success} classNames={classNames}>
            <S.Span>{children}</S.Span>
        </S.NotificationContainer>
    )
}

export default ErrorNotification
