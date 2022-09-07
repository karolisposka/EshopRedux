import { createSlice } from "@reduxjs/toolkit"
import moment from "moment"
import { apiCallBegan } from "./api"

const url = "v1/products/get"
const urlPost = "postBug"
const urlCategories = "v1/products/categories"

const slice = createSlice({
    name: "products",
    initialState: {
        list: [],
        categories: [],
        loading: false,
        lastFetch: null,
        lastCategoriesFetch: null,
    },
    reducers: {
        productsAdded: (products, action) => {
            products.list.push(action.payload)
        },
        productsFiltered: (products, action) => {
            products.list = products.list.filter((item) => item.category === action.payload)
        },
        productsSortedByPrice: (products, action) => {
            if (action.payload === "lowest price") {
                products.list.sort((a, b) => a.price - b.price)
            } else if (action.payload === "highest price") {
                products.list.sort((a, b) => b.price - a.price)
            } else if (action.payload === "popularity") {
                products.list.sort((a, b) => b.title - a.title)
            }
        },
        productsRequested: (products, action) => {
            products.loading = true
        },
        categoriesRecieved: (products, action) => {
            products.categories = action.payload
            products.loading = false
            products.lastCategoriesFetch = Date.now()
        },
        productsRecieved: (products, action) => {
            products.list = action.payload
            products.loading = false
            products.lastFetch = Date.now()
        },
    },
})
//action creator

export const loadProducts = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url,
            onStart: productsRequested.type,
            onSuccess: productsRecieved.type,
        })
    )
}

export const filterProducts = (category) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: url + "/" + category,
            onStart: productsRequested.type,
            onSuccess: productsRecieved.type,
        })
    )
}

export const loadCategories = () => (dispatch, getState) => {
    const { lastCategoriesFetch } = getState().entities.products

    const diff = moment().diff(moment(lastCategoriesFetch), "minutes")
    if (diff < 1) return

    dispatch(
        apiCallBegan({
            url: urlCategories,
            onStart: productsRequested.type,
            onSuccess: categoriesRecieved.type,
        })
    )
}

export const addProduct = (products) =>
    apiCallBegan({
        url: urlPost,
        method: "post",
        data: products,
        onSuccess: productsAdded.type,
    })

export const {
    productsAdded,
    productsResolved,
    productsRecieved,
    productsFiltered,
    productsRequested,
    categoriesRecieved,
    productsSortedByPrice,
} = slice.actions
export default slice.reducer
