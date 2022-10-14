import React from "react"
import PropTypes from "prop-types"
import * as S from "./Loader.styles"

const Loader = ({ className }) => {
    return (
        <S.StyledContainer className={className}>
            <S.Loader />
        </S.StyledContainer>
    )
}

Loader.propTypes = {
    className: PropTypes.string,
}

export default Loader
