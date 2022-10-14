import React from "react"
import PropTypes from "prop-types"
import * as S from "./NavigationComponent.styles"

const NavigationComponent = ({ to, text }) => {
    return <S.StyledLink to={to}>{text}</S.StyledLink>
}

NavigationComponent.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default NavigationComponent
