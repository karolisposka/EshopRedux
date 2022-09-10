import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api"
import moment from "moment"

const Slice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        loading: false,
        status: false,
    },
    reducers: {
        increment: (state, action) => {
            const itemToCart = state.cart.find((item) => item.id === action.payload.id)
            if (itemToCart) {
                itemToCart.quantity++
            } else {
                state.cart.push({
                    id: action.payload.id,
                    quantity: Number(1),
                    price: Number(action.payload.price),
                    title: action.payload.title,
                })
                return state
            }
        },
        open: (state, action) => {
            state.status = action.payload
        },

        decrement: (state, action) => {
            const itemToDecrement = state.cart.find((item) => item.id === action.payload.id)
            if (itemToDecrement.quantity <= 1) {
                itemToDecrement.quantity = 1
            } else {
                itemToDecrement.quantity--
            }
        },
        cartItemRemove: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
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
    },
})

export const LoadCartItems = (products) => (dispatch, getState) => {
    const { lastCategoriesFetch } = getState().entities.products

    const diff = moment().diff(moment(lastCategoriesFetch), "minutes")
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

export const { increment, decrement, cartItemsRequested, cartItemsRecieved, cartItemRemove, changeStatus, open } =
    Slice.actions
export default Slice.reducer
