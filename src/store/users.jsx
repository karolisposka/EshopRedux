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
            return {
                ...users,
                status: action.payload,
            }
        },
        userTokenRequested: (users, action) => {
            return {
                ...users,
                loading: true,
                error: null,
                success: false,
            }
        },
        userTokenRecieved: (users, action) => {
            return {
                ...users,
                key: action.payload.id,
                roles: action.payload.roles.split(","),
                loading: false,
                success: true,
            }
        },
        errorRecieved: (users, action) => {
            return {
                ...users,
                error: action.payload,
                message: "",
                loading: false,
            }
        },
        formChanged: (users, action) => {
            return {
                ...users,
                expanded: true,
                error: "",
                message: "",
            }
        },
        formChanged2: (users, action) => {
            return {
                ...users,
                expanded: false,
                error: "",
                message: "",
            }
        },
        userRegistationStarted: (users, action) => {
            return {
                ...users,
                loading: true,
                error: "",
                message: "",
            }
        },
        userRegistered: (users, action) => {
            return {
                ...users,
                status: "register",
                loading: false,
                message: action.payload,
            }
        },
        userDetailsRequested: (users, action) => {
            return {
                ...users,
                loading: true,
            }
        },
        userDetailsRecieved: (users, action) => {
            return {
                ...users,
                loading: false,
                address: action.payload,
            }
        },
        successMessageRecieved: (users, action) => {
            return {
                ...users,
                message: action.payload,
                error: "",
                loading: false,
            }
        },
        userDefaultAddressChanged: (users, action) => {
            return {
                ...users,
                loading: false,
                address: users.address.map((add) => {
                    if (add.id === Number(action.payload.id)) {
                        return { ...add, status: action.payload.status }
                    }
                    return add
                }),
            }
        },
        addressDeleted: (users, action) => {
            return {
                ...users,
                address: users.address.filter((item) => item.id !== Number(action.payload.id)),
                loading: false,
            }
        },
        addressPostRequested: (users, action) => {
            return {
                ...users,
                loading: true,
            }
        },
        addressPostResponseRecieved: (users, action) => {
            return {
                ...users,
                address: [...users.address, action.payload],
                loading: false,
            }
        },
        userKeyDeleted: (users, action) => {
            return {
                ...users,
                key: "",
                status: "login",
                error: "",
                success: false,
                roles: [],
            }
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

export const reegister = (data) => (dispatch, getState) => {
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
