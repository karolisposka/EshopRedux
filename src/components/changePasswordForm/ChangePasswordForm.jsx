import React from "react"
import * as S from "./ChangePasswordForm.styles"
import * as Yup from "yup"
import Input from "../Input/Input"
import { useFormik } from "formik"

const ChangePasswordForm = ({ handleSubmit }) => {
    const formik = useFormik({
        initialValues: {
            currentPassword: "",
            newPassword: "",
        },
        validationSchema: Yup.object({
            newPassword: Yup.string().min(8).required(),
            currentPassword: Yup.string().min(8).required(),
        }),
        onSubmit: handleSubmit,
    })

    return (
        <S.Form onSubmit={formik.handleSubmit}>
            <Input
                name="currentPassword"
                type="password"
                value={formik.values.currentPassword}
                label="Password"
                placeholder="Password"
                comment={formik.errors.currentPassword ? formik.errors.currentPassword : null}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
            />
            <Input
                type="password"
                name="newPassword"
                value={formik.values.newPassword}
                label="New Password"
                placeholder="New Password"
                comment={formik.errors.newPassword ? formik.errors.newPassword : null}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
            />
            <S.SubmitButton type="submit">Change Password</S.SubmitButton>
        </S.Form>
    )
}

export default ChangePasswordForm
