import React from "react"
import PropTypes from "prop-types"
import * as S from "./SmallLoader.styles"

const SmallLoader = ({ className }) => {
    return (
        <S.StyledContainer className={className}>
            <S.Loader />
        </S.StyledContainer>
    )
}

SmallLoader.propTypes = {
    className: PropTypes.string,
}

export default SmallLoader
