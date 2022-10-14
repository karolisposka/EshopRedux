import React from "react"
import PropTypes from "prop-types"
import * as S from "./UnauthorizedContainer.styles"

const UnauthorizedContainer = ({ children }) => {
    return <S.Container>{children}</S.Container>
}

UnauthorizedContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default UnauthorizedContainer
