import React from "react"
import * as S from "./OrdersList.styles"

const OrdersList = ({ children }) => {
    return (
        <S.Container>
            <S.List>{children}</S.List>
        </S.Container>
    )
}

export default OrdersList
