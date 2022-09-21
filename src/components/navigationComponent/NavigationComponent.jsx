import React from "react"
import * as S from "./NavigationComponent.styles"

const NavigationComponent = ({ to, text }) => {
    return <S.StyledLink to={to}>{text}</S.StyledLink>
}

export default NavigationComponent
