import React from "react"
import * as S from "./CartTableItem.styles"
import QuantityReducer from "../quantityReducer/QuantityReducer"
import { useDispatch } from "react-redux/es/exports"
import PropTypes from "prop-types"
import { increment, decrement, cartItemRemove } from "../../store/cart"

const CartTableItem = ({ title, price, quantity, id, description, classNames, index }) => {
    const dispatch = useDispatch()
    const total = price * quantity
    return (
        <>
            <S.TableRow key={id} classNames={classNames}>
                <S.TableCell>{index}</S.TableCell>
                <S.TableCell>
                    {title}
                    <S.Span> {description}</S.Span>
                </S.TableCell>
                <S.TableCell>{price.toFixed(2)} €</S.TableCell>
                <S.TableCell>
                    <S.StyledQuantityReducer
                        quantity={quantity}
                        handleDecrement={() => {
                            dispatch(decrement({ id: id, description: description }))
                        }}
                        handleIncrement={() => {
                            dispatch(increment({ id: id, description: description }))
                        }}
                    />
                </S.TableCell>
                <S.TableCell>{total.toFixed(2)} €</S.TableCell>
                <S.TableCell>
                    <S.DeleteIcon
                        onClick={() => {
                            dispatch(cartItemRemove({ id: id, description: description }))
                        }}
                    />
                </S.TableCell>
            </S.TableRow>
        </>
    )
}

CartTableItem.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    classNames: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
}

export default CartTableItem
