import React from "react"
import * as S from "./CartTableItem.styles"

const CartTableItem = ({ title, price, quantity, id }) => {
    const total = price * quantity
    return (
        <>
            <S.TableRow key={id}>
                <S.TableCell></S.TableCell>
                <S.TableCell>{title}</S.TableCell>
                <S.TableCell>{price} €</S.TableCell>
                <S.TableCell>{quantity}</S.TableCell>
                <S.TableCell>{total} €</S.TableCell>
            </S.TableRow>
        </>
    )
}

export default CartTableItem
