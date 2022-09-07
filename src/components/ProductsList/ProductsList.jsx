import React from "react"
import PropTypes from "prop-types"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import * as S from "./ProductsList.styles"
import { useSelector } from "react-redux"

const ProductsList = ({ items }) => {
    const data = useSelector((state) => state.entities.products.mount)
    console.log(data)
    return (
        <S.ProductsList>
            {items &&
                items.map((item) => (
                    <CSSTransition in={data} classNames="fade" timeout={300}>
                        <S.StyledProductCard
                            description={item.description}
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            price={item.price}
                        />
                    </CSSTransition>
                ))}
        </S.ProductsList>
    )
}

ProductsList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ProductsList
