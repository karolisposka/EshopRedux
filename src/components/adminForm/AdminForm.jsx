import React from "react"
import * as S from "./AdminForm.styles"
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import { UploadProduct } from "../../store/products"
import Input from "../Input/Input"
import { useFormik } from "formik"

const AdminForm = () => {
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
        validationSchema: Yup.object({
            title: Yup.string().required(),
            description: Yup.string().required(),
            price: Yup.number()
                .test("is-decimal", "invalid decimal", (value) => (value + "").match(/^\d*\.{1}\d*$/))
                .required(),
            bigPrice: Yup.string().test("is-decimal", "invalid decimal", (value) =>
                (value + "").match(/^\d*\.{1}\d*$/)
            ),
            category: Yup.string().required(),
            file: Yup.string().required(),
        }),
        onSubmit: (values) => {
            dispatch(UploadProduct(values))
        },
    })

    return (
        <S.Container>
            <S.Form onSubmit={formik.handleSubmit}>
                <S.Title> Add product </S.Title>
                <Input
                    placeholder="title"
                    name="title"
                    type="text"
                    comment={formik.touched.title && formik.errors.title && formik.errors.title}
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                    value={formik.values.title}
                />
                <Input
                    placeholder="description"
                    name="description"
                    type="text"
                    value={formik.values.description}
                    comment={formik.touched.description && formik.errors.description && formik.errors.description}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                />
                <Input
                    placeholder="price"
                    name="price"
                    type="number"
                    comment={formik.touched.price && formik.errors.price && formik.errors.price}
                    handleChange={formik.handleChange}
                    value={formik.values.price}
                    handleBlur={formik.handleBlur}
                />
                <Input
                    placeholder="BigPrice"
                    name="bigPrice"
                    type="number"
                    handleChange={formik.handleChange}
                    comment={formik.touched.price && formik.errors.bigPrice && formik.errors.bigPrice}
                    value={formik.values.bigPrice}
                    handleBlur={formik.handleBlur}
                />
                <Input
                    placeholder="category"
                    name="category"
                    type="text"
                    handleChange={formik.handleChange}
                    comment={formik.touched.category && formik.errors.category && formik.errors.category}
                    value={formik.values.category}
                    handleBlur={formik.handleBlur}
                />
                <Input
                    type="file"
                    placeholder="file"
                    name="file"
                    accept="image/*"
                    handleBlur={formik.handleBlur}
                    comment={formik.touched.file && formik.errors.file && formik.errors.file}
                    handleChange={(e) => {
                        formik.setFieldValue("file", e.currentTarget.files[0])
                    }}
                />
                <S.StyledButton type="submit">Submit</S.StyledButton>
            </S.Form>
        </S.Container>
    )
}

export default AdminForm
