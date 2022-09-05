import React from "react"
import PropTypes from "prop-types"
import * as S from "./ProductsList.styles"

const ProductsList = ({ items }) => {
    return (
        <S.ProductsList>
            {items &&
                items.map((item) => (
                    <S.StyledProductCard
                        description={item.description}
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        price={item.price}
                    />
                ))}
        </S.ProductsList>
    )
}

ProductsList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ProductsList
