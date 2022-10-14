import React from "react"
import * as S from "./ChangePasswordForm.styles"
import * as Yup from "yup"
import Input from "../Input/Input"
import { useDispatch } from "react-redux"
import { changePassword } from "../../store/users"
import { useFormik } from "formik"

const ChangePasswordForm = () => {
    const dispatch = useDispatch()

    const handleChangePassword = (values) => {
        return dispatch(changePassword(values))
    }

    const formik = useFormik({
        initialValues: {
            currentPassword: "",
            newPassword: "",
        },
        validationSchema: Yup.object({
            newPassword: Yup.string().min(8).required(),
            currentPassword: Yup.string().min(8).required(),
        }),
        onSubmit: (values) => {
            handleChangePassword(values)
        },
    })

    return (
        <S.Form onSubmit={formik.handleSubmit}>
            <Input
                name="currentPassword"
                type="password"
                value={formik.values.currentPassword}
                label="Password"
                placeholder="Password"
                comment={
                    formik.errors.currentPassword
                        ? formik.touched.currentPassword && formik.errors.currentPassword
                        : null
                }
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
            />
            <Input
                type="password"
                name="newPassword"
                value={formik.values.newPassword}
                label="New Password"
                placeholder="New Password"
                comment={formik.errors.newPassword && formik.touched.newPassword && formik.errors.newPassword}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
            />
            <S.SubmitButton type="submit">Change Password</S.SubmitButton>
        </S.Form>
    )
}

export default ChangePasswordForm
