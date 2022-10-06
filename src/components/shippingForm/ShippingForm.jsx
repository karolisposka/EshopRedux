import React, { useState } from "react"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import * as S from "./ShippingForm.styles"
import { useFormik } from "formik"
import CheckoutButton from "../checkoutButton/CheckoutButton"
import { useSelector } from "react-redux"

const ShippingForm = ({ title, handleSubmit, handleCheckbox }) => {
    const [checkbox, setCheckBox] = useState(true)
    const userData = useSelector((state) => state.users)
    const CheckIfUserHasDefaultAddress = () => {
        if (userData.key && userData.address) {
            const filteredData = userData.address.filter((item) => item.default_status === 1)[0]
            return filteredData
        } else {
            return null
        }
    }
    const defaultAddress = CheckIfUserHasDefaultAddress()
    const formik = useFormik({
        initialValues: {
            firstName: "" || defaultAddress.first_name,
            lastName: "" || defaultAddress.last_name,
            mobile: "" || defaultAddress.mobile,
            address: "" || defaultAddress.address,
            city: "" || defaultAddress.city,
            postCode: "" || defaultAddress.post_code,
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

        onSubmit: handleSubmit,
    })

    return (
        <>
            <S.FormContainer>
                <S.Title>{title}</S.Title>
                <S.Form onSubmit={formik.handleSubmit}>
                    <S.StyledInput
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        label="First Name"
                        comment={formik.touched.firstName ? formik.errors.firstName : null}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    <S.StyledInput
                        placeholder="Last Name"
                        name="lastName"
                        label="Last Name"
                        comment={formik.touched.lastName ? formik.errors.lastName : null}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    <S.StyledInput
                        placeholder="+370 XXXXXXXX"
                        name="mobile"
                        label="Mobile number"
                        comment={formik.touched.mobile ? formik.errors.mobile : null}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.mobile}
                    />
                    <S.StyledInput
                        placeholder="Address"
                        name="address"
                        label="Address"
                        comment={formik.touched.address ? formik.errors.address : null}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.address}
                    />
                    <S.StyledInput
                        placeholder="City"
                        name="city"
                        label="City"
                        comment={formik.touched.city ? formik.errors.city : null}
                        handleChange={formik.handleChange}
                        onhandleBlur={formik.handleBlur}
                        value={formik.values.city}
                    />
                    <S.StyledInput
                        placeholder="LT-XXXXX"
                        type="text"
                        name="postCode"
                        label="PostCode"
                        comment={formik.touched.postCode ? formik.errors.postCode : null}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.postCode}
                    />
                    {userData.key && !defaultAddress && (
                        <S.CheckboxContainer>
                            <S.CheckBox
                                type="checkbox"
                                onChange={() => {
                                    setCheckBox(!checkbox)
                                    handleCheckbox(checkbox)
                                }}
                            />
                            <S.Label>I want it to be my default address</S.Label>
                        </S.CheckboxContainer>
                    )}
                    <CheckoutButton type="submit" />
                </S.Form>
            </S.FormContainer>
        </>
    )
}

export default ShippingForm
