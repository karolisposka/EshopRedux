import React from "react"
import * as S from "./UserOrdersList.styles"
import NoData from "../noData/NoData"

const UserOrdersList = ({ data }) => {
    return (
        <S.List>
            {data.length > 0 ? (
                data.map((item, index) => (
                    <S.StyledUserOrderCard
                        key={index}
                        products={item.products}
                        status={item.status}
                        completed_at={item.completed_at}
                        created_at={item.created_at}
                        amount={item.amount}
                        order_id={item.id}
                        shipping={item.shipping}
                    />
                ))
            ) : (
                <NoData text="No data found" />
            )}
        </S.List>
    )
}

export default UserOrdersList
