import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import api from "../store/middleware/api"
import reducer from "./reducer"

export default function configureAppStore() {
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware({
                serializableCheck: false,
            }),
            api,
        ],
    })
}
