import { combineReducers } from "redux"
import productsReducer from "./products"
import userReducer from "./users"
import cartReducer from "./cart"

export default combineReducers({
    products: productsReducer,
    users: userReducer,
    cart: cartReducer,
})
