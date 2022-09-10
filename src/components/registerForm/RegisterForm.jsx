import React from "react"
import * as S from "./RegisterForm.styles"
import * as yup from "yup"
import { useFormik } from "formik"

const RegisterForm = ({ handleSubmit, handleClick }) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: yup.object({
            email: yup.string().email("must be valid email").required("required field"),
            password: yup.string().min(8).required("required field"),
            confirmPassword: yup
                .string()
                .min(8)
                .oneOf([yup.ref("password"), null], "Passwords must match"),
        }),
        onSubmit: handleSubmit,
    })
    return (
        <S.RegisterFormContainer>
            <S.Form onSubmit={formik.handleSubmit}>
                <S.StyledInput
                    label="Email"
                    type="email"
                    placeholder="Example@example.com"
                    name="email"
                    comment={formik.touched.email ? formik.errors.email : null}
                    value={formik.values.email}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                />
                <S.StyledInput
                    label="Password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    comment={formik.touched.password ? formik.errors.password : null}
                    value={formik.values.password}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                />
                <S.StyledInput
                    type="password"
                    label="Confirm password"
                    placeholder="Password"
                    name="confirmPassword"
                    comment={formik.touched.confirmPassword ? formik.errors.confirmPassword : null}
                    value={formik.values.confirmPassword}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                />
                <S.SmallText>
                    Already have account? <S.Span onClick={handleClick}>Sign in</S.Span>
                </S.SmallText>
                <S.StyledButton type="submit">Register</S.StyledButton>
            </S.Form>
        </S.RegisterFormContainer>
    )
}

export default RegisterForm
