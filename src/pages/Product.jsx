import React, { useEffect } from "react"
import SingleProductContainer from "../components/SingleProductContainer/SingleProductContainer"
import { useParams, useNavigate } from "react-router-dom"
import { loadProducts, getAdditives } from "../store/products"
import { useDispatch, useSelector } from "react-redux"

const Product = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { title } = useParams()
    useEffect(() => {
        dispatch(loadProducts())
        dispatch(getAdditives())
    }, [])

    const data = useSelector((state) => state.products.list).filter((item) => item.title === title)
    const additives = useSelector((state) => state.products.additives)
    return (
        <SingleProductContainer
            item={data[0]}
            additives={additives[0]}
            handleExit={() => {
                navigate(-1)
            }}
        />
    )
}

export default Product
