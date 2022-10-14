import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api"
import moment from "moment"

const Slice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        loading: false,
        status: false,
        completed: false,
        url: null,
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
            return {
                ...state,
                status: action.payload,
            }
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
            return {
                ...state,
                cart: state.cart.filter((item) => item.description !== action.payload.description),
            }
        },
        cartItemsRequested: (state, action) => {
            return {
                ...state,
                loading: true,
            }
        },
        cartItemsRecieved: (state, action) => {
            return {
                ...state,
                cart: [...state.cart, action.payload],
                loading: false,
            }
        },
        changeStatus: (state, action) => {
            return {
                ...state,
                status: action.payload,
            }
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
                url: action.payload,
            }
        },
    },
})

export const LoadCartItems = (products) => (dispatch, getState) => {
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

export const placeOrder = (data, key, delivery) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_MAKE_ORDER,
            method: "post",
            headers: {
                "Content-type": "application/json",
            },
            data: {
                products: data,
                userKey: key,
                delivery: delivery,
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
