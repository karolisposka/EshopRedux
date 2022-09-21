import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import * as S from "./AddAddressForm.styles"

const AddAddressForm = ({ handleClose, handleSubmit, className }) => {
    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            mobile: "",
            address: "",
            city: "",
            post_code: "",
        },
        validationSchema: Yup.object({
            first_name: Yup.string("invalid name")
                .min(3, "First name should be at least 3 characters")
                .max(50)
                .required(),
            last_name: Yup.string("invalid name").required(),
            mobile: Yup.number("invalid input. Mobile phone number should be number not a string").required(
                "this field is required"
            ),
            address: Yup.string().required(),
            city: Yup.string("invalid city").required(),
            post_code: Yup.string().required(),
        }),
        onSubmit: handleSubmit,
    })

    return (
        <S.FormContainer className={className}>
            <S.Form onSubmit={formik.handleSubmit}>
                <S.TitleWrapper>
                    <S.Title>Enter Your Address Details</S.Title>
                    <S.ExitIcon onClick={handleClose} />
                </S.TitleWrapper>
                <S.StyledInput
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    label="First Name"
                    handleChange={formik.handleChange}
                    comment={formik.errors.first_name}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                />
                <S.StyledInput
                    placeholder="Last Name"
                    name="last_name"
                    label="Last Name"
                    comment={formik.errors.last_name}
                    handleChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                />
                <S.StyledInput
                    placeholder="+370 XXXXXXXX"
                    name="mobile"
                    label="Mobile number"
                    comment={formik.errors.mobile}
                    handleChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobile}
                />
                <S.StyledInput
                    placeholder="Address"
                    name="address"
                    label="Address"
                    comment={formik.errors.address}
                    handleChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                />
                <S.StyledInput
                    placeholder="City"
                    name="city"
                    label="City"
                    comment={formik.errors.city}
                    handleChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                />
                <S.StyledInput
                    placeholder="LT-XXXXX"
                    type="text"
                    name="post_code"
                    label="Post Code"
                    comment={formik.errors.post_code}
                    handleChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.post_code}
                />
                <S.StyledButton type="submit">Add</S.StyledButton>
            </S.Form>
        </S.FormContainer>
    )
}

export default AddAddressForm
