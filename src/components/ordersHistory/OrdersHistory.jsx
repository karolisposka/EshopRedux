import React from "react"
import * as S from "./OrdersHistory.styles"
import NoData from "../noData/NoData"

const OrdersHistory = ({ data }) => {
    return (
        <S.Container>
            <S.TitleWrapper>
                <S.OrdersIcon />
                <S.Title>Previous Orders</S.Title>
            </S.TitleWrapper>
            {data ? data.map((item, index) => <div key={index}> {item}</div>) : <NoData />}
        </S.Container>
    )
}

export default OrdersHistory
