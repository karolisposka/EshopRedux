import React, { useEffect } from "react"
import { loadOrders } from "../store/orders"
import { useSelector, useDispatch } from "react-redux"
import OrdersList from "../components/ordersList/OrdersList"
import Loader from "../components/loader/Loader"
import NoData from "../components/noData/NoData"

const OrdersAdmin = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadOrders())
    }, [])
    const { orders, loading } = useSelector((state) => state.orders)

    return <>{!loading ? <OrdersList orders={orders} /> : <Loader />}</>
}

export default OrdersAdmin
