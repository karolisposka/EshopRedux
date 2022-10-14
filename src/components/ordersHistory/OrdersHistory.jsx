import React, { useEffect } from "react"
import * as S from "./OrdersHistory.styles"
import { useSelector, useDispatch } from "react-redux"
import { getUserHistoricOrders } from "../../store/userOrders"
import Loader from "../loader/Loader"
import HistoricOrdersTable from "../historicOrdersTable/HistoricOrdersTable"

const OrdersHistory = () => {
    const dispatch = useDispatch()
    const { history } = useSelector((state) => state.userOrders)

    useEffect(() => {
        if (history !== null) {
            return
        } else {
            dispatch(getUserHistoricOrders())
        }
    }, [history])

    return (
        <S.Container>
            <S.TitleWrapper>
                <S.OrdersIcon />
                <S.Title>Previous Orders</S.Title>
            </S.TitleWrapper>
            {history ? <HistoricOrdersTable data={history} /> : <Loader />}
        </S.Container>
    )
}

export default OrdersHistory
