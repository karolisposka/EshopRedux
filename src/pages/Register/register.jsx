import React from "react"
import * as S from "./register.styles"
import * as yup from "yup"
import { useDispatch } from "react-redux"
import { register, formChanged, formChanged2, formDisplayed } from "../../store/users"
import { useFormik } from "formik"

const Register = () => {
    const dispatch = useDispatch()
    const handleRegister = (values) => {
        return dispatch(register(values))
    }

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
        onSubmit: (values) => {
            handleRegister(values)
        },
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
                    Already have account?{" "}
                    <S.Span
                        to="/account"
                        onClick={() => {
                            dispatch(formChanged())
                            setTimeout(() => {
                                dispatch(formChanged2())
                                dispatch(formDisplayed("register"))
                            }, 500)
                        }}
                    >
                        Sign in
                    </S.Span>
                </S.SmallText>
                <S.StyledButton type="submit">Register</S.StyledButton>
            </S.Form>
        </S.RegisterFormContainer>
    )
}

export default Register
