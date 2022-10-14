import React from "react"
import PropTypes from "prop-types"
import * as S from "./MainContainer.styles"

const MainContainer = ({ children }) => {
    return <S.Container>{children}</S.Container>
}

MainContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainContainer
