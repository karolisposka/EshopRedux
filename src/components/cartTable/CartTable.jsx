import React from "react"
import * as S from "./CartTable.styles"
import PropTypes from "prop-types"
import CartTableItem from "../cartTableItem/CartTableItem"
import { CSSTransition, TransitionGroup } from "react-transition-group"
const CartTable = ({ items }) => {
    return (
        <>
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
                <TransitionGroup component="tbody">
                    {items.map((item, index) => (
                        <CSSTransition key={index} timeout={200} classNames="fade">
                            <CartTableItem
                                index={index + 1 + "."}
                                classNames="fade"
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity}
                                id={item.id}
                                description={item.description}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </S.Table>
        </>
    )
}

CartTable.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            className: PropTypes.string,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
}

export default CartTable
