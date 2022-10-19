import React, { useEffect } from "react"
import Loader from "../components/loader/Loader"
import Container from "../components/Container/Container"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useSearchParams } from "react-router-dom"
import { loadProducts, filterProducts, filterByTitle, sortHighestPrice, sortLowestPrice } from "../store/products"
import ProductsList from "../components/ProductsList/ProductsList"

const Layout = () => {
    const { filteredData, error } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const { category } = useParams()
    const [searchParams] = useSearchParams()
    const sort = searchParams.get("sort")
    const title = searchParams.get("title")

    useEffect(() => {
        dispatch(loadProducts())
    }, [])

    useEffect(() => {
        if (!category) {
            return
        } else {
            dispatch(filterProducts(category))
        }
    }, [category])

    useEffect(() => {
        if (!title) {
            return
        } else {
            dispatch(filterByTitle(title))
        }
    }, [title])

    const checkSortAction = (sort) => {
        if (sort === "highest price") {
            return dispatch(sortHighestPrice())
        }
        if (sort === "lowest price") {
            return dispatch(sortLowestPrice())
        } else {
            return
        }
    }

    useEffect(() => {
        checkSortAction(sort)
    }, [sort])

    return <Container>{filteredData ? <ProductsList data={filteredData} error={error} /> : <Loader />}</Container>
}

export default Layout
