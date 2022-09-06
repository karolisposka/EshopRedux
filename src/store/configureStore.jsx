import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
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
