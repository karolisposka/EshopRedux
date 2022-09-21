import React from "react"
import Input from "../components/Input/Input"
import Button from "../components/Button/Button"
import axios from "axios"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { UploadProduct } from "../store/products"

const Admin = () => {
    const key = useSelector((state) => state.users.key)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            price: "",
            bigPrice: "",
            category: "",
            file: "",
        },
        onSubmit: (values) => {
            dispatch(UploadProduct(values))
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Input
                placeholder="title"
                name="title"
                type="text"
                handleChange={formik.handleChange}
                value={formik.values.title}
            />
            <Input
                placeholder="description"
                name="description"
                type="text"
                value={formik.values.description}
                handleChange={formik.handleChange}
            />
            <Input
                placeholder="price"
                name="price"
                type="number"
                handleChange={formik.handleChange}
                value={formik.values.price}
            />
            <Input
                placeholder="BigPrice"
                name="bigPrice"
                type="number"
                handleChange={formik.handleChange}
                value={formik.values.bigPrice}
            />
            <Input
                placeholder="category"
                name="category"
                type="text"
                handleChange={formik.handleChange}
                value={formik.values.category}
            />
            <Input
                type="file"
                placeholder="file"
                name="file"
                accept="image/*"
                handleChange={(e) => {
                    formik.setFieldValue("file", e.currentTarget.files[0])
                }}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default Admin
