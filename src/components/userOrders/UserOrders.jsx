import React, { useEffect } from "react"
import * as S from "./UserOrders.styles"
import UserOrderCard from "../userOrderCard/UserOrderCard"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { getUserOrders } from "../../store/userOrders"
import NoData from "../noData/NoData"

const UserOrders = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserOrders())
    }, [])

    const today = new Date().getTime()

    const userOrders = useSelector((state) => state.userOrders.orders)
    const products = useSelector((state) => state.products.list)

    const pasttwelvehoursorders = userOrders
        .map((item) => {
            return {
                ...item,
                products: products.filter((product) => item.product_id.split(",").includes(product.id.toString())),
            }
        })
        .filter((products) => today - products.created_at < 3600 * 12 * 1000)

    return (
        <S.Container>
            <S.OrderIcon />
            <S.Title>Orders</S.Title>
            <S.List>
                {pasttwelvehoursorders.length > 0 ? (
                    pasttwelvehoursorders.map((item) => {
                        return (
                            <UserOrderCard
                                products={item.products}
                                status={item.status}
                                completed_at={item.completed_at}
                                created_at={item.created_at}
                                order_id={item.id}
                            />
                        )
                    })
                ) : (
                    <NoData text="No data found" />
                )}
            </S.List>
        </S.Container>
    )
}

export default UserOrders
