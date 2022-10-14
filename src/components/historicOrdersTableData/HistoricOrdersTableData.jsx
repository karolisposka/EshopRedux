import React from "react"
import PropTypes from "prop-types"
import * as S from "./HistoricOrdersTableData.styles"

const HistoricOrdersTableData = ({ id, created_at, amount, productsInfo, className }) => {
    const calculateDate = (unix) => {
        return new Date(unix).toLocaleDateString("en-US", { hour12: false, minute: "2-digit", hour: "2-digit" })
    }
    return (
        <>
            <S.Row className={className}>
                <S.Cell>{id}</S.Cell>
                <S.Cell>{calculateDate(created_at)}</S.Cell>
                <S.Cell>
                    {productsInfo.map((item, index) => {
                        return (
                            <S.ProductInfoWrapper key={index} index={index}>
                                <S.ProductTitle>{item.title.toUpperCase()}</S.ProductTitle>
                                <S.ProductDescription>{item.description}</S.ProductDescription>
                            </S.ProductInfoWrapper>
                        )
                    })}
                </S.Cell>
                <S.Cell>{amount / 100} €</S.Cell>
            </S.Row>
        </>
    )
}

HistoricOrdersTableData.propTypes = {
    id: PropTypes.number.isRequired,
    created_at: PropTypes.number.isRequired,
    product_id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
}

export default HistoricOrdersTableData
