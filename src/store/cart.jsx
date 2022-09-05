import { createSlice } from "@reduxjs/toolkit"

const Slice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        productAddedToCart: (state, action) => {
            const itemToCart = state.cart.find((item) => item.id === action.payload)
            if (itemToCart) itemToCart.quantity++
            else {
                state.cart.push({ ...action.payload, id: action.payload, quantity: 1 })
            }
        },
        productRemovedFromCart: (state, action) => {
            const itemToRemove = state.cart.find((item) => item.id === action.payload)
            if (itemToRemove) itemToRemove.quantity--
        },
    },
})

export const { productAddedToCart } = Slice.actions
export default Slice.reducer
