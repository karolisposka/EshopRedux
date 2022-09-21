import { createSlice } from "@reduxjs/toolkit"
import moment from "moment"
import { apiCallBegan } from "./api"

const slice = createSlice({
    name: "products",
    initialState: {
        list: [],
        categories: [],
        loading: false,
        mount: "",
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
            products.mount = false
        },
        categoriesRecieved: (products, action) => {
            products.categories = action.payload
            products.loading = false
            products.lastCategoriesFetch = Date.now()
        },
        productsRecieved: (products, action) => {
            products.list = action.payload
            products.loading = false
            products.mount = true
            products.lastFetch = Date.now()
        },
        productPosted: (products, action) => {
            products.list.push(action.payload)
            products.loading = false
            products.mount = true
        },
    },
})
//action creator

export const loadProducts = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_PRODUCTS_GET,
            onStart: productsRequested.type,
            onSuccess: productsRecieved.type,
        })
    )
}

export const filterProducts = (category) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_PRODUCTS_GET_CATEGORY + category,
            onStart: productsRequested.type,
            onSuccess: productsRecieved.type,
        })
    )
}

export const searchProducts = (query) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_PRODUCTS_SEARCH + query,
            onStart: productsRequested.type,
            onSuccess: productsRecieved.type,
        })
    )
}

export const loadCategories = () => (dispatch, getState) => {
    const { lastCategoriesFetch } = getState().products

    const diff = moment().diff(moment(lastCategoriesFetch), "minutes")
    if (diff < 1) return

    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_CATEGORIES_GET,
            onStart: productsRequested.type,
            onSuccess: categoriesRecieved.type,
        })
    )
}

export const UploadProduct = (data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_POST_PRODUCT,
            method: "post",
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${getState().users.key}`,
            },
            data: data,
            onStart: productsRequested.type,
            onSuccess: productPosted.type,
        })
    )
}

export const {
    productsAdded,
    productsResolved,
    productsRecieved,
    productsFiltered,
    productsRequested,
    categoriesRecieved,
    productsSortedByPrice,
    productPosted,
} = slice.actions

export default slice.reducer
