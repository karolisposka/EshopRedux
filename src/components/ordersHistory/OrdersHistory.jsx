import React from "react"
import * as S from "./OrdersHistory.styles"
import NoData from "../noData/NoData"
import { useSelector } from "react-redux"
import Loader from "../loader/Loader"

const OrdersHistory = () => {
    const orders = useSelector((state) => state.userOrders.orders)
    const products = useSelector((state) => state.products.list)

    const transformUnixTimeToDate = (unix) => {
        return new Date(unix).toLocaleDateString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" })
    }

    return (
        <S.Container>
            <S.TitleWrapper>
                <S.OrdersIcon />
                <S.Title>Previous Orders</S.Title>
            </S.TitleWrapper>
            {orders.length > 0 ? (
                <S.Table>
                    <S.TableHead>
                        <S.Row>
                            <S.Cell>Order ID</S.Cell>
                            <S.Cell>Order date</S.Cell>
                            <S.Cell>Ordered items</S.Cell>
                            <S.Cell>Total amount</S.Cell>
                        </S.Row>
                    </S.TableHead>
                    <S.TableBody>
                        {orders &&
                            orders.map((item) => {
                                return (
                                    <S.Row>
                                        <S.Cell> {item.id}</S.Cell>
                                        <S.Cell> {transformUnixTimeToDate(item.created_at)}</S.Cell>
                                        <S.Cell>
                                            {item.product_id.split(",").map((item) => {
                                                return <S.Product>{item}</S.Product>
                                            })}
                                        </S.Cell>
                                        <S.Cell> {item.amount} €</S.Cell>
                                    </S.Row>
                                )
                            })}
                    </S.TableBody>
                </S.Table>
            ) : (
                <NoData text="No data found" />
            )}
        </S.Container>
    )
}

export default OrdersHistory
