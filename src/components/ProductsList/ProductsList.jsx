import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { CSSTransition } from "react-transition-group"
import * as S from "./ProductsList.styles"
import { useSelector, useDispatch } from "react-redux"
import { filterProducts } from "../../store/products"
import { useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"

const ProductsList = () => {
    const dispatch = useDispatch()
    const { category } = useParams()

    useEffect(() => {
        dispatch(filterProducts(category))
    }, [category])

    const data = useSelector((state) => state.products)

    return (
        <>
            <S.ProductsList>
                {data.list &&
                    data.list.map((item) => (
                        <CSSTransition in={data.mount} classNames="fade" timeout={2000} key={item.id}>
                            <S.StyledProductCard
                                description={item.description}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.imageurl}
                                smallPrice={item.small}
                                category={item.category}
                            />
                        </CSSTransition>
                    ))}
            </S.ProductsList>
            <Outlet />
        </>
    )
}

ProductsList.propTypes = {
    items: PropTypes.shape([
        {
            id: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            classNames: PropTypes.string,
        },
    ]),
}

export default ProductsList
