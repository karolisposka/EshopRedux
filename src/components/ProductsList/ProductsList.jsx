import React from "react"
import PropTypes from "prop-types"
import { CSSTransition } from "react-transition-group"
import * as S from "./ProductsList.styles"
import { useSelector } from "react-redux"

const ProductsList = ({ items }) => {
    const data = useSelector((state) => state.products.mount)
    return (
        <S.ProductsList>
            {items &&
                items.map((item) => (
                    <CSSTransition in={data} classNames="fade" timeout={2000} key={item.id}>
                        <S.StyledProductCard
                            description={item.description}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                        />
                    </CSSTransition>
                ))}
        </S.ProductsList>
    )
}

ProductsList.propTypes = {
    items: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        classNames: PropTypes.string,
    }),
}

export default ProductsList
