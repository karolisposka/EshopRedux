import React, { useEffect } from "react"
import SingleProductContainer from "../components/SingleProductContainer/SingleProductContainer"
import { useParams, useNavigate } from "react-router-dom"
import { loadProducts, getAdditives } from "../store/products"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/loader/Loader"

const Product = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { title } = useParams()

    useEffect(() => {
        dispatch(loadProducts())
        dispatch(getAdditives())
    }, [])

    const data = useSelector((state) => state.products.list)

    const filterData = (data) => {
        if (!data) {
            return
        } else {
            return data.filter((item) => item.title.toLowerCase() === title.toLowerCase())[0]
        }
    }

    return (
        <>
            {data ? (
                <SingleProductContainer
                    item={filterData(data)}
                    handleExit={() => {
                        navigate("/")
                    }}
                />
            ) : (
                <Loader />
            )}
        </>
    )
}

export default Product
