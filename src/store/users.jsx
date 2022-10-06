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
        roles: [],
        expanded: false,
        success: false,
        message: "",
        address: [],
    },

    reducers: {
        formDisplayed: (users, action) => {
            users.status = action.payload
        },
        userTokenRequested: (users, action) => {
            users.loading = true
            users.error = ""
            users.message = ""
            users.success = false
        },
        userTokenRecieved: (users, action) => {
            users.key = action.payload.id
            users.roles = action.payload.roles.split(",")
            users.loading = false
            users.success = true
        },
        errorRecieved: (users, action) => {
            users.error = action.payload
            users.message = ""
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
        userDetailsRequested: (users, action) => {
            users.loading = true
        },
        userDetailsRecieved: (users, action) => {
            users.loading = false
            users.address = action.payload
        },
        successMessageRecieved: (users, action) => {
            users.message = action.payload
            users.error = ""
            users.loading = false
        },
        userDefaultAddressChanged: (users, action) => {
            users.loading = false
            const itemToCart = users.address.find((item) => item.id === action.payload.id)
            itemToCart.default_status = action.payload.status
        },
        addressDeleted: (users, action) => {
            users.address = users.address.filter((item) => item.id !== Number(action.payload.id))
            users.loading = false
        },
        addressPostRequested: (users, action) => {
            users.loading = true
        },
        addressPostResponseRecieved: (users, action) => {
            users.address.push(action.payload)
            users.loading = false
        },
        userKeyDeleted: (users, action) => {
            users.key = ""
            users.status = "login"
            users.error = ""
            users.success = false
            users.roles = []
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

export const getUserDetails = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_USERDETAILS,
            headers: {
                Authorization: `Bearer ${getState().users.key}`,
            },
            onStart: userDetailsRequested.type,
            onError: errorRecieved.type,
            onSuccess: userDetailsRecieved.type,
        })
    )
}

export const deleteAddress = (id) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_DELETEADDRESS + id,
            method: "delete",
            headers: {
                Authorization: `Bearer ${getState().users.key}`,
            },
            onStart: userDetailsRequested.type,
            onSuccess: addressDeleted.type,
            onError: errorRecieved.type,
        })
    )
}

export const PostAddress = (data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_POST_NEW_ADDRESS,
            method: "post",
            headers: {
                Authorization: `Bearer ${getState().users.key}`,
            },
            data: data,
            onStart: addressPostRequested.type,
            onSuccess: addressPostResponseRecieved.type,
            onError: errorRecieved.type,
        })
    )
}

export const setAddressAsDefault = (data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_DEFAULTADDRESS,
            method: "post",
            headers: {
                Authorization: `Bearer ${getState().users.key}`,
            },
            data: data,
            onStart: userDetailsRequested.type,
            onError: errorRecieved.type,
            onSuccess: userDefaultAddressChanged.type,
        })
    )
}

export const changePassword = (data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_CHANGE_PASSWORD,
            method: "post",
            headers: {
                "Content-type": "multipart/form-data",
                authorization: `Bearer ${getState().users.key}`,
            },
            data: data,
            onStart: userDetailsRequested.type,
            onError: errorRecieved.type,
            onSuccess: successMessageRecieved.type,
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
    userDetailsRecieved,
    userDetailsRequested,
    userDefaultAddressChanged,
    addressDeleted,
    addressPostRequested,
    addressPostResponseRecieved,
    userKeyDeleted,
    successMessageRecieved,
} = slice.actions
export default slice.reducer
