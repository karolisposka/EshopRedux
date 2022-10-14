import { createSlice } from "@reduxjs/toolkit"
import moment from "moment"
import { apiCallBegan } from "./api"

const slice = createSlice({
    name: "products",
    initialState: {
        list: [],
        additives: [],
        categories: [],
        loading: false,
    },
    reducers: {
        productsAdded: (products, action) => {
            return {
                ...products,
                list: [...products, action.payload],
            }
        },

        productsRequested: (products, action) => {
            return {
                ...products,
                loading: true,
            }
        },
        categoriesRecieved: (products, action) => {
            return {
                ...products,
                categories: action.payload,
                loading: false,
            }
        },
        filterProducts: (products, action) => {
            return {
                ...products,
                filteredList: products.list.filter((product) => product.category === action.payload),
                mount: true,
            }
        },
        productsRecieved: (products, action) => {
            return {
                ...products,
                list: action.payload,
                loading: false,
            }
        },
        additivesRecieved: (products, action) => {
            return {
                ...products,
                additives: action.payload,
            }
        },
        productPosted: (products, action) => {
            return {
                ...products,
                list: [...products.list, action.payload],
                loading: false,
            }
        },
        singleProductRequested: (products, action) => {
            return {
                ...products,
                list: [...products.list, action.payload],
            }
        },
    },
})

//action creators

export const loadProducts = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_PRODUCTS_GET,
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
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_CATEGORIES_GET,
            onStart: productsRequested.type,
            onSuccess: categoriesRecieved.type,
        })
    )
}

export const getAdditives = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_GET_ADDITIVES,
            onStart: productsRequested.type,
            onSuccess: additivesRecieved.type,
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

export const singleProductRequest = (data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: process.env.REACT_APP_SINGLE_PRODUCT + data,
            onStart: productsRequested.type,
            onSuccess: singleProductRequested.type,
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
    additivesRecieved,
    filterProducts,
    singleProductRequested,
} = slice.actions

export default slice.reducer
