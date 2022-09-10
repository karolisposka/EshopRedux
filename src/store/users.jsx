import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api"
import { useNavigate } from "react-router-dom"

const slice = createSlice({
    name: "users",
    initialState: {
        key: "",
        status: "login",
        loading: false,
        error: "",
        expanded: false,
        message: "",
    },

    reducers: {
        formDisplayed: (users, action) => {
            users.status = action.payload
        },
        userTokenRequested: (users, action) => {
            users.loading = true
            users.error = ""
            users.message = ""
        },
        userTokenRecieved: (users, action) => {
            users.key = action.payload
            users.loading = false
        },
        errorRecieved: (users, action) => {
            users.error = action.payload
            users.loading = false
        },
        formChanged: (users, action) => {
            users.expanded = true
            users.error = ""
            users.message = ""
        },
        formChanged2: (users, action) => {
            users.expanded = false
            users.error = ""
            users.message = ""
        },
        userRegistationStarted: (users, action) => {
            users.loading = "true"
            users.error = ""
            users.message = ""
        },
        userRegistered: (users, action) => {
            users.status = "register"
            users.loading = "false"
            users.message = action.payload
        },
    },
})

export const loggin = (data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_LOGIN,
            method: "post",
            data: data,
            onStart: userTokenRequested.type,
            onSuccess: userTokenRecieved.type,
            onError: errorRecieved.type,
        })
    )
}

export const register = (data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_REGISTER,
            method: "post",
            data: data,
            onStart: userRegistationStarted.type,
            onSuccess: userRegistered.type,
            onError: errorRecieved.type,
        })
    )
}

export const {
    formDisplayed,
    userTokenRecieved,
    userTokenRequested,
    userRegistered,
    errorRecieved,
    formChanged,
    formChanged2,
    userRegistationStarted,
} = slice.actions
export default slice.reducer
