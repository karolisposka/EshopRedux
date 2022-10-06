import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadOrders } from "../store/orders"
import OrdersList from "../components/ordersList/OrdersList"
import OrderCard from "../components/orderCard/OrderCard"
import NoData from "../components/noData/NoData"
import Loader from "../components/loader/Loader"

const CompletedOrders = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadOrders())
    }, [])

    const orders = useSelector((state) => state.orders.orders).filter((item) => item.status === 1)
    return (
        <>
            {!orders ? (
                <Loader />
            ) : (
                <OrdersList>
                    {orders.map((item, index) => (
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
        </>
    )
}

export default CompletedOrders
