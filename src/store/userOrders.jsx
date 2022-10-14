import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api"

const slice = createSlice({
    name: "userOrders",
    initialState: {
        orders: null,
        history: null,
        loading: false,
        error: "",
        message: "",
    },
    reducers: {
        dataRequested: (state, action) => {
            return {
                ...state,
                loading: true,
            }
        },
        userOrdersRecieved: (state, action) => {
            return {
                ...state,
                orders: action.payload,
                loading: false,
                error: "",
            }
        },
        userHistoricOrdersRecieved: (state, action) => {
            return {
                ...state,
                history: action.payload,
                loading: false,
                error: "",
            }
        },
        errorRecieved: (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
        allDataDeleted: (state, action) => {
            return {
                ...state,
                orders: null,
                history: null,
                loading: false,
                error: "",
                message: "",
            }
        },
    },
})

export const getUserOrders = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_USER_ORDERS,
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${getState().users.key}`,
            },
            onStart: dataRequested.type,
            onSuccess: userOrdersRecieved.type,
            onError: errorRecieved.type,
        })
    )
}

export const getUserHistoricOrders = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_HISTORIC_ORDERS,
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${getState().users.key}`,
            },
            onStart: dataRequested.type,
            onSuccess: userHistoricOrdersRecieved.type,
            onError: errorRecieved.type,
        })
    )
}

export const { dataRequested, userOrdersRecieved, errorRecieved, userHistoricOrdersRecieved, allDataDeleted } =
    slice.actions
export default slice.reducer
