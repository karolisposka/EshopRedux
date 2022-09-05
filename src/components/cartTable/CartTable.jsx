import React from "react"
import * as S from "./CartTable.styles"
import CartTableItem from "../cartTableItem/CartTableItem"

const CartTable = ({ items }) => {
    return (
        <S.Table>
            <S.TableHeaders>
                <S.TableRow>
                    <S.HeaderCell></S.HeaderCell>
                    <S.HeaderCell>Title</S.HeaderCell>
                    <S.HeaderCell>Price</S.HeaderCell>
                    <S.HeaderCell>Quantity</S.HeaderCell>
                    <S.HeaderCell>Total</S.HeaderCell>
                </S.TableRow>
            </S.TableHeaders>
            <S.TableBody>
                {items &&
                    items.map((item) => (
                        <CartTableItem title={item.title} price={item.price} quantity={item.quantity} id={item.id} />
                    ))}
            </S.TableBody>
        </S.Table>
    )
}

export default CartTable
