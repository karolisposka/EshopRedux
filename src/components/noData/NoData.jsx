import React from "react"
import PropTypes from "prop-types"
import * as S from "./NoData.styles"

const NoData = ({ text }) => {
    return (
        <S.Container>
            <S.Message>{text}</S.Message>
        </S.Container>
    )
}

NoData.propTypes = {
    text: PropTypes.string.isRequired,
}

export default NoData
