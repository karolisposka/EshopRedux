import React from "react"
import NoData from "../noData/NoData"
import PropTypes from "prop-types"
import * as S from "./HistoricOrdersTable.styles"

const HistoricOrdersTable = ({ data }) => {
    return (
        <>
            {data.length > 0 ? (
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
                        {data.map((item, index) => (
                            <S.StyledHistoricOrdersTableData
                                key={index}
                                id={item.id}
                                created_at={item.created_at}
                                product_id={item.product_id}
                                amount={item.amount}
                                productsInfo={item.products}
                            />
                        ))}
                    </S.TableBody>
                </S.Table>
            ) : (
                <NoData text="no data found" />
            )}
        </>
    )
}

HistoricOrdersTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            created_at: PropTypes.number.isRequired,
            product_id: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
        })
    ),
}

export default HistoricOrdersTable
