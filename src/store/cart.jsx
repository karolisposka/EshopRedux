import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api"
import moment from "moment"

const Slice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        loading: false,
        status: false,
        lastFetch: null,
        completed: false,
    },
    reducers: {
        increment: (state, action) => {
            const itemToCart = state.cart.find(
                (item) => item.id === action.payload.id && item.description === action.payload.description
            )
            if (itemToCart) {
                itemToCart.quantity++
            } else {
                state.cart.push({
                    id: action.payload.id,
                    quantity: Number(1),
                    price: Number(action.payload.price),
                    title: action.payload.title,
                    description: action.payload.description,
                })
                return state
            }
        },
        open: (state, action) => {
            state.status = action.payload
        },

        decrement: (state, action) => {
            const itemToDecrement = state.cart.find(
                (item) => item.id === action.payload.id && item.description === action.payload.description
            )
            if (itemToDecrement.quantity <= 1) {
                itemToDecrement.quantity = 1
            } else {
                itemToDecrement.quantity--
            }
        },
        cartItemRemove: (state, action) => {
            state.cart = state.cart.filter((item) => item.description !== action.payload.description)
        },
        cartItemsRequested: (state, action) => {
            state.loading = true
        },
        cartItemsRecieved: (state, action) => {
            state.cart.push(...state.quantity, action.payload)
            state.loading = false
        },
        changeStatus: (state, action) => {
            state.status = action.payload
        },
        orderPlaced: (state, action) => {
            return {
                ...state,
                loading: true,
                error: "",
            }
        },
        orderDispatched: (state, action) => {
            return {
                ...state,
                cart: [],
                loading: false,
                completed: true,
                error: action.payload.err ? action.payload.err : "",
            }
        },
    },
})

export const LoadCartItems = (products) => (dispatch, getState) => {
    const { lastFetch } = getState().cart

    const diff = moment().diff(moment(lastFetch), "minutes")
    if (diff < 10) return

    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_CART_GET,
            method: "post",
            data: products,
            onStart: cartItemsRequested.type,
            onSuccess: cartItemsRecieved.type,
        })
    )
}

export const placeOrder = (token, data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_MAKE_ORDER,
            method: "post",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${getState().users.key}`,
            },
            data: {
                products: data,
                token,
            },
            onStart: orderPlaced.type,
            onSuccess: orderDispatched.type,
        })
    )
}

export const {
    increment,
    decrement,
    cartItemsRequested,
    cartItemsRecieved,
    cartItemRemove,
    changeStatus,
    open,
    orderDispatched,
    orderPlaced,
} = Slice.actions

export default Slice.reducer
