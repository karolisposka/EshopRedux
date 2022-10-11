import React from "react"
import * as S from "./OrderCard.styles"
import TimeAgo from "react-timeago"
import { useSelector, useDispatch } from "react-redux"
import { changeStatus } from "../../store/orders"

const OrderCard = ({ id, product_id, status, time, description }) => {
    const products = useSelector((state) => state.products.list)
    const dispatch = useDispatch()
    console.log(products)

    const changeTimeFormat = (time) => {
        return new Date(time).toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" })
    }

    const setOrderAsCompleted = (orderId) => {
        return dispatch(changeStatus(orderId))
    }

    return (
        <S.OrdersCard>
            <S.OrderDetails>
                {products
                    .filter((item) => product_id.split(",").includes(item.id.toString()))
                    .map((product) => (
                        <>
                            <S.Title> {product.title}</S.Title>
                        </>
                    ))}
                <div>{description && description.split(",").map((item) => <S.Description>{item}</S.Description>)}</div>
                <S.Time>
                    <TimeAgo date={time} />
                </S.Time>
                <S.ButtonWrapper
                    onClick={() => {
                        setOrderAsCompleted({ id: id, completed_at: new Date().getTime() })
                    }}
                >
                    <S.CompletedBtn completed={status} />
                </S.ButtonWrapper>
            </S.OrderDetails>
        </S.OrdersCard>
    )
}

export default OrderCard
