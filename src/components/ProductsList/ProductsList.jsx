import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { CSSTransition } from "react-transition-group"
import * as S from "./ProductsList.styles"
import { useSelector, useDispatch } from "react-redux"
import { loadProducts } from "../../store/products"
import { useParams, useSearchParams } from "react-router-dom"
import Loader from "../loader/Loader"

const ProductsList = () => {
    const dispatch = useDispatch()
    const { category } = useParams()
    const [searchParams] = useSearchParams()
    const [sortParams] = useSearchParams()
    const sort = searchParams.get("sort") || ""
    const title = searchParams.get("title") || ""

    useEffect(() => {
        dispatch(loadProducts())
    }, [])

    let data = useSelector((state) => state.products)

    const filterProducts = (url, title, sort) => {
        if ((title, url)) {
            return data.list
                .filter((product) => product.category.toLowerCase() === url.toLowerCase())
                .filter((filteredProducts) => filteredProducts.title.toLowerCase().includes(title))
        }
        if (url) {
            return data.list.filter((product) => product.category.toLowerCase() === url.toLowerCase())
        }
        if (title) {
            return data.list.filter((product) => product.title.toLowerCase().includes(title.toLowerCase()))
        } else {
            return data.list
        }
    }

    useEffect(() => {
        filterProducts(category)
    }, [category])

    return (
        <>
            <S.ProductsList>
                {data.list ? (
                    filterProducts(category, title, sort).map((item) => (
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
                    ))
                ) : (
                    <Loader />
                )}
            </S.ProductsList>
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
