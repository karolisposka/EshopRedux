import React from "react"
import * as S from "./OrderCard.styles"
import TimeAgo from "react-timeago"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { changeStatus } from "../../store/orders"

const OrderCard = ({ id, products, amount, status, time, session_id, shipping }) => {
    const dispatch = useDispatch()

    const setOrderAsCompleted = (orderId) => {
        return dispatch(changeStatus(orderId))
    }

    return (
        <S.OrdersCard>
            <S.OrderDetails>
                <S.Time>
                    <TimeAgo date={time} />
                </S.Time>
                <S.ButtonWrapper
                    onClick={() => {
                        setOrderAsCompleted({ id: session_id, completed_at: new Date().getTime() })
                    }}
                >
                    <S.CompletedBtn completed={status} />
                </S.ButtonWrapper>
                <S.FlexWrapper>
                    <S.Price>{amount / 100} € </S.Price>
                    <S.ShippingIcon status={shipping} />
                </S.FlexWrapper>
            </S.OrderDetails>

            <S.OrderDetails>
                {products.map((product) => (
                    <S.ProductWrapper>
                        <S.textWrapper>
                            <S.Title> {product.title}</S.Title>
                            <S.Description>{product.description}</S.Description>
                        </S.textWrapper>
                    </S.ProductWrapper>
                ))}
            </S.OrderDetails>
        </S.OrdersCard>
    )
}

OrderCard.propTypes = {
    id: PropTypes.number.isRequired,
    product_id: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}

export default OrderCard
