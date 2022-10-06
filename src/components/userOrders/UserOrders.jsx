import React, { useEffect } from "react"
import * as S from "./UserOrders.styles"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { getUserOrders } from "../../store/userOrders"
import NoData from "../noData/NoData"

const UserOrders = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserOrders())
    }, [])
    const userOrders = useSelector((state) => state.userOrders)

    return <>{userOrders.orders.length > 0 ? <div> yra </div> : <NoData text={userOrders.error} />}</>
}

export default UserOrders
