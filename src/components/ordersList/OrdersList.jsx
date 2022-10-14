import React from "react"
import PropTypes from "prop-types"
import * as S from "./OrdersList.styles"
import OrderCard from "../orderCard/OrderCard"

const OrdersList = ({ orders }) => {
    return (
        <S.Container>
            <S.List>
                {orders &&
                    orders.map((item, index) => (
                        <OrderCard
                            key={index}
                            shipping={item.shipping}
                            amount={item.amount}
                            time={item.created_at}
                            id={item.id}
                            products={item.products}
                            status={item.status}
                            timeago={item.timeAgo}
                            session_id={item.session_id}
                        />
                    ))}
            </S.List>
        </S.Container>
    )
}

OrdersList.propTypes = {
    children: PropTypes.node.isRequired,
}

export default OrdersList
