import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api"
import moment from "moment"

const cartUrl = "/get"

const Slice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        loading: false,
    },
    reducers: {
        productAddedToCart: (state, action) => {
            const itemToCart = state.cart.find((item) => item.id === action.payload.id)
            if (itemToCart) itemToCart.quantity++
            else {
                state.cart.push({
                    id: action.payload.id,
                    quantity: 1,
                    price: action.payload.price,
                    title: action.payload.title,
                })
            }
        },

        productRemovedFromCart: (state, action) => {
            const itemToRemove = state.cart.find((item) => item.id === action.payload)
            if (itemToRemove) itemToRemove.quantity--
        },
        cartItemsRequested: (state, action) => {
            state.loading = true
        },
        cartItemsRecieved: (state, action) => {
            state.cart.push(...state.quantity, action.payload)
            state.loading = false
        },
    },
})

export const LoadCartItems = (products) => (dispatch, getState) => {
    const { lastCategoriesFetch } = getState().entities.products

    const diff = moment().diff(moment(lastCategoriesFetch), "minutes")
    if (diff < 10) return

    dispatch(
        apiCallBegan({
            url: cartUrl,
            method: "post",
            data: products,
            onStart: cartItemsRequested.type,
            onSuccess: cartItemsRecieved.type,
        })
    )
}

export const { productAddedToCart, productRemovedFromCart, cartItemsRequested, cartItemsRecieved } = Slice.actions
export default Slice.reducer
