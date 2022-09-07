import React from "react"
import * as S from "./CartTable.styles"
import CartTableItem from "../cartTableItem/CartTableItem"
import { CSSTransition, TransitionGroup } from "react-transition-group"

console.log(TransitionGroup)

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
            <TransitionGroup component="tbody">
                {items &&
                    items.map((item, index) => (
                        <CSSTransition key={index} timeout={200} classNames="fade">
                            <S.StyledCartTableItem
                                classNames="fade"
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity}
                                id={item.id}
                            />
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </S.Table>
    )
}

export default CartTable
