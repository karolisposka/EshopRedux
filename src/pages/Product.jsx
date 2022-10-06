import React, { useEffect } from "react"
import SingleProductContainer from "../components/SingleProductContainer/SingleProductContainer"
import { useParams, useNavigate } from "react-router-dom"
import { loadProducts, getAdditives, singleProductRequest } from "../store/products"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/loader/Loader"

const Product = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(loadProducts())
        dispatch(getAdditives())
    }, [])

    const data = useSelector((state) => state.products.list).filter((item) => item.title === params.title)
    const additives = useSelector((state) => state.products.additives)

    return (
        <>
            {data[0] ? (
                <SingleProductContainer
                    item={data[0]}
                    additives={additives}
                    handleExit={() => {
                        navigate(-1)
                    }}
                />
            ) : (
                <Loader />
            )}
        </>
    )
}

export default Product
