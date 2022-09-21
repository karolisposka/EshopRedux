import React from "react"
import SingleProductContainer from "../components/SingleProductContainer/SingleProductContainer"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const Product = () => {
    const { title } = useParams()
    const navigate = useNavigate()
    const data = useSelector((state) => state.products.list).filter((item) => item.title === title)
    return (
        <SingleProductContainer
            item={data[0]}
            handleExit={() => {
                navigate(-1)
            }}
        />
    )
}

export default Product
