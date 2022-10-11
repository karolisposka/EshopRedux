import React from "react"
import * as S from "./Notification.styles"

const Notification = ({ msg, status, className }) => {
    return (
        <S.Notification className={className} status={status}>
            {msg}
        </S.Notification>
    )
}

export default Notification
