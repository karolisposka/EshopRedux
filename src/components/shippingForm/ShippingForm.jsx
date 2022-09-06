import React from "react"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import * as S from "./ShippingForm.styles"
import Input from "../Input/Input"
import { useFormik } from "formik"
import CheckoutButton from "../checkoutButton/CheckoutButton"

const ShippingForm = ({ title }) => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            mobile: "",
            address: "",
            city: "",
            postCode: "",
        },

        validationSchema: Yup.object({
            firstName: Yup.string("invalid name")
                .min(3, "First name should be at least 3 characters")
                .max(50)
                .required(),
            lastName: Yup.string("invalid name").required(),
            mobile: Yup.number("invalid input. Mobile phone number should be number not a string").required(
                "this field is required"
            ),
            address: Yup.string().required(),
            city: Yup.string("invalid city").required(),
            postCode: Yup.string().required(),
        }),

        onSubmit: (values) => {
            console.log(values)
            navigate("/checkout")
        },
    })

    console.log(formik.errors)
    return (
        <>
            <S.FormContainer>
                <S.Title>{title}</S.Title>
                <S.Form onSubmit={formik.handleSubmit}>
                    <Input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        label="First Name"
                        handleChange={formik.handleChange}
                        comment={formik.errors.firstName}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    <Input
                        placeholder="Last Name"
                        name="lastName"
                        label="Last Name"
                        comment={formik.errors.lastName}
                        handleChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    <Input
                        placeholder="+370 XXXXXXXX"
                        name="mobile"
                        label="Mobile number"
                        comment={formik.errors.mobile}
                        handleChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobile}
                    />
                    <Input
                        placeholder="Address"
                        name="address"
                        label="Address"
                        comment={formik.errors.address}
                        handleChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                    />
                    <Input
                        placeholder="City"
                        name="city"
                        label="City"
                        comment={formik.errors.city}
                        handleChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                    />
                    <Input
                        placeholder="LT-XXXXX"
                        type="text"
                        name="postCode"
                        label="PostCode"
                        comment={formik.errors.postCode}
                        handleChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.postCode}
                    />
                    <CheckoutButton type="submit" />
                </S.Form>
            </S.FormContainer>
        </>
    )
}

export default ShippingForm
