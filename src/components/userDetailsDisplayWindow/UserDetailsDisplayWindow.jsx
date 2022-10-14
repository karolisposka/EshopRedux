import React from "react"
import PropTypes from "prop-types"
import * as S from "./UserDetailsDisplayWindow.styles"

const UserDetailsDisplayWindow = ({ children }) => {
    return <S.Container>{children}</S.Container>
}

UserDetailsDisplayWindow.propTypes = {
    children: PropTypes.node.isRequired,
}

export default UserDetailsDisplayWindow
