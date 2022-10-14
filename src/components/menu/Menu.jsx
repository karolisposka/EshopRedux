import React from "react"
import PropTypes from "prop-types"
import * as S from "./Menu.styles"

const Menu = ({ children }) => {
    return <S.MenuContainer>{children}</S.MenuContainer>
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Menu
