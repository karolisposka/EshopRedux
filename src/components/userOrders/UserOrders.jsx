import React, { useEffect } from "react"
import * as S from "./UserOrders.styles"
import UserOrdersList from "../userOrdersList/UserOrdersList"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { getUserOrders } from "../../store/userOrders"
import Loader from "../loader/Loader"

const UserOrders = () => {
    const dispatch = useDispatch()
    const { orders } = useSelector((state) => state.userOrders)

    useEffect(() => {
        if (orders !== null) {
            return
        } else {
            dispatch(getUserOrders())
        }
    }, [orders])

    return (
        <S.Container>
            <S.OrderIcon />
            <S.Title>Orders</S.Title>

            {!orders ? <Loader /> : <UserOrdersList data={orders} />}
        </S.Container>
    )
}

export default UserOrders
