import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api"

const slice = createSlice({
    name: "orders",
    initialState: {
        orders: null,
        loading: false,
        error: "",
    },
    reducers: {
        ordersRequested: (state, action) => {
            return {
                ...state,
                loading: true,
            }
        },

        ordersRecieved: (state, action) => {
            return {
                ...state,
                orders: action.payload,
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
        setAsCompleted: (state, action) => {
            return {
                ...state,
                loading: false,
                orders: state.orders.map((selectedOrder) => {
                    if (selectedOrder.session_id === Number(action.payload)) {
                        return { ...selectedOrder, status: 1, completed_at: new Date().getTime() }
                    }
                    return selectedOrder
                }),
            }
        },
    },
})

export const loadOrders = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_GET_ORDERS,
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${getState().users.key}`,
            },
            onStart: ordersRequested.type,
            onSuccess: ordersRecieved.type,
            onError: errorRecieved.type,
        })
    )
}

export const changeStatus = (data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_ORDER_STATUS,
            method: "post",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${getState().users.key}`,
            },
            data: data,
            onStart: ordersRequested.type,
            onSuccess: setAsCompleted.type,
            onError: errorRecieved.type,
        })
    )
}

export const { ordersRequested, ordersRecieved, errorRecieved, orderDispatched, setAsCompleted } = slice.actions
export default slice.reducer
