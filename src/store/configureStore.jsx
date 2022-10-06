import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import api from "../store/middleware/api"
import productsReducer from "./products"
import usersReducer from "./users"
import cartReducer from "./cart"
import ordersReducer from "./orders"
import userOrdersReducer from "./userOrders"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    users: usersReducer,
    orders: ordersReducer,
    userOrders: userOrdersReducer,
})

const rootPersistConfig = {
    key: "primary",
    storage,
    version: 1,
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export default function configureAppStore() {
    return configureStore({
        reducer: persistedReducer,
        middleware: [
            ...getDefaultMiddleware({
                serializableCheck: false,
            }),
            api,
            thunk,
        ],
    })
}

export const persistor = persistStore(configureAppStore())
