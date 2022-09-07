import React from "react"
import * as S from "./CartTableItem.styles"
import QuantityReducer from "../quantityReducer/QuantityReducer"
import { useDispatch } from "react-redux/es/exports"
import { CSSTransition } from "react-transition-group"
import { increment, decrement, cartItemRemove } from "../../store/cart"

const CartTableItem = ({ title, price, quantity, id, classNames }) => {
    const dispatch = useDispatch()
    const total = price * quantity
    return (
        <>
            <S.TableRow key={id} classNames={classNames}>
                <S.TableCell></S.TableCell>
                <S.TableCell>{title}</S.TableCell>
                <S.TableCell>{price.toFixed(2)} €</S.TableCell>
                <S.TableCell>
                    <QuantityReducer
                        quantity={quantity}
                        handleDecrement={() => {
                            dispatch(decrement({ id: id }))
                        }}
                        handleIncrement={() => {
                            dispatch(increment({ id: id }))
                        }}
                    />
                </S.TableCell>
                <S.TableCell>{total.toFixed(2)} €</S.TableCell>
                <S.TableCell>
                    <S.DeleteIcon
                        onClick={() => {
                            console.log("click")
                            dispatch(cartItemRemove({ id: id }))
                        }}
                    />
                </S.TableCell>
            </S.TableRow>
        </>
    )
}

export default CartTableItem
