import React from "react"
import PropTypes from "prop-types"
import * as S from "./Notification.styles"

const Notification = ({ msg, status, className }) => {
    return (
        <S.Notification className={className} status={status}>
            {msg}
        </S.Notification>
    )
}

Notification.propTypes = {
    msg: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
}

export default Notification
