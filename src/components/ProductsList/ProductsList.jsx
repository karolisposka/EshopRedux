import React from "react"
import PropTypes from "prop-types"
import * as S from "./ProductsList.styles"

const ProductsList = ({ data, error }) => {
    return (
        <>
            {data.length > 0 && !error ? (
                <S.ProductsList>
                    {data.map((item, index) => (
                        <S.StyledProductCard
                            key={index}
                            description={item.description}
                            id={Number(item.id)}
                            title={item.title}
                            image={item.imageurl}
                            price={item.small}
                            category={item.category}
                        />
                    ))}
                </S.ProductsList>
            ) : (
                <S.StyledNotification status={"err"} msg={error} />
            )}
        </>
    )
}

ProductsList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            classNames: PropTypes.string,
        })
    ),
    error: PropTypes.string,
}

export default ProductsList
