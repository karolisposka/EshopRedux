import React from "react"
import * as S from "./NoData.styles"

const NoData = ({ text }) => {
    return (
        <S.Container>
            <S.Message>{text}</S.Message>
        </S.Container>
    )
}

export default NoData
