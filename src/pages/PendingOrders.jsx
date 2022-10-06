import React, { useEffect } from "react"
import { loadOrders } from "../store/orders"
import { useSelector, useDispatch } from "react-redux"
import OrderCard from "../components/orderCard/OrderCard"
import OrdersList from "../components/ordersList/OrdersList"
import Loader from "../components/loader/Loader"
import NoData from "../components/noData/NoData"

const OrdersAdmin = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadOrders())
    }, [])

    const orders = useSelector((state) => state.orders.orders).filter((items) => items.status === 0)

    return (
        <>
            {!orders ? (
                <Loader />
            ) : (
                <OrdersList>
                    {orders &&
                        orders.map((item, index) => (
                            <OrderCard
                                key={index}
                                number={index + 1}
                                time={item.created_at}
                                id={item.id}
                                product_id={item.product_id}
                                status={item.status}
                                timeago={item.timeAgo}
                                description={item.description}
                            />
                        ))}
                </OrdersList>
            )}
            {orders.length === 0 && <NoData>no data</NoData>}
        </>
    )
}

export default OrdersAdmin
