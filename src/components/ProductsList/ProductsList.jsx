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
    const sort = searchParams.get("sort") || ""
    const title = searchParams.get("title") || ""

    const { list, loading, mount } = useSelector((state) => state.products)

    useEffect(() => {
        if (list !== undefined) {
            return
        } else {
            dispatch(loadProducts())
        }
    }, [list])

    const filterProducts = (url, title, sort) => {
        if (title && url) {
            return list
                .filter((product) => product.category.toLowerCase() === url.toLowerCase())
                .filter((filteredProducts) => filteredProducts.title.toLowerCase().includes(title))
        }
        if (url && sort === "lowest price") {
            return list
                .filter((product) => product.category.toLowerCase().includes(url.toLowerCase()))
                .sort((a, b) => Number(a.small) - Number(b.small))
        }
        if (url && sort === "highest price") {
            return list
                .filter((product) => product.category.toLowerCase().includes(url.toLowerCase()))
                .sort((a, b) => Number(b.small) - Number(a.small))
        }
        if (sort === "lowest price") {
            return [...list].sort((a, b) => Number(a.small) - Number(b.small))
        }
        if (sort === "highest price") {
            return [...list].sort((a, b) => Number(b.small) - Number(a.small))
        }
        if (title) {
            return list.filter((product) => product.title.toLowerCase().includes(title))
        }
        if (url) {
            return list.filter((product) => product.category.toLowerCase() === url.toLowerCase())
        } else {
            return list
        }
    }

    useEffect(() => {
        filterProducts(category)
    }, [category])

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <S.ProductsList>
                    {filterProducts(category, title, sort).map((item) => (
                        <CSSTransition in={mount} classNames="fade" timeout={2000} key={item.id}>
                            <S.StyledProductCard
                                description={item.description}
                                id={Number(item.id)}
                                title={item.title}
                                price={item.price}
                                image={item.imageurl}
                                smallPrice={Number(item.small)}
                                category={item.category}
                            />
                        </CSSTransition>
                    ))}
                </S.ProductsList>
            )}
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
