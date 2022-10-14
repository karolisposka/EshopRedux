import React, { useEffect } from "react"
import * as S from "./LoginForm.styles"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { loggin, formChanged, formChanged2, formDisplayed } from "../../store/users"
import * as yup from "yup"
import SmallLoader from "../smallLoader/SmallLoader"
import { useSelector } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom"

const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { loading, key } = useSelector((state) => state.users)
    const from = location.state?.from?.pathname || "/"

    console.log(key)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: yup.object({
            email: yup.string().email("must the a valid Email").required("Required field"),
            password: yup.string().min(8).required("Required field"),
        }),
        onSubmit: (values) => {
            dispatch(loggin(values))
        },
    })

    useEffect(() => {
        if (!key) {
            return
        } else {
            navigate("/userDetails")
        }
    }, [key])

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
                {!loading ? <S.StyledButton type="submit"> Login </S.StyledButton> : <SmallLoader />}
                <S.SmallText>
                    Dont have an account?
                    <S.Span
                        to="/account/register"
                        onClick={() => {
                            dispatch(formChanged())
                            setTimeout(() => {
                                formDisplayed("login")
                                dispatch(formChanged2())
                            }, 1000)
                        }}
                    >
                        Sign in
                    </S.Span>
                </S.SmallText>
            </S.Form>
        </S.LoginFormContainer>
    )
}

export default LoginForm
