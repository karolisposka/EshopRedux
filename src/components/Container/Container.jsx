import React from "react"
import PropTypes from "prop-types"
import * as S from "./Container.styles"

const Container = ({ children, className }) => {
    return (
        <S.Container className={className}>
            <S.Section>{children}</S.Section>
        </S.Container>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default Container
