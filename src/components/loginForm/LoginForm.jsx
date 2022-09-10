import React from "react"
import * as S from "./LoginForm.styles"
import { useFormik } from "formik"
import * as yup from "yup"
import Loader from "../loader/Loader"

const LoginForm = ({ handleClick, handleSubmit, status }) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: yup.object({
            email: yup.string().email("must the a valid Email").required("Required field"),
            password: yup.string().min(8).required("Required field"),
        }),
        onSubmit: handleSubmit,
    })

    return (
        <S.LoginFormContainer>
            <S.Form onSubmit={formik.handleSubmit}>
                <S.StyledInput
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    label="Email"
                    comment={formik.touched.email ? formik.errors.email : null}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                <S.StyledInput
                    name="password"
                    type="password"
                    placeholder="password"
                    label="Password"
                    comment={formik.touched.password ? formik.errors.password : null}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                <S.StyledButton type="submit">{status.loading ? <Loader /> : "Log in"}</S.StyledButton>
                <S.SmallText>
                    Dont have an account? <S.Span onClick={handleClick}>Sign in</S.Span>
                </S.SmallText>
            </S.Form>
        </S.LoginFormContainer>
    )
}

export default LoginForm
