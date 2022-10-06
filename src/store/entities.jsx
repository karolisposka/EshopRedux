import { combineReducers } from "redux"
import productsReducer from "./products"
import userReducer from "./users"
import cartReducer from "./cart"
import ordersReducer from "./orders"
import userOrdersReducer from "./userOrders"

export default combineReducers({
    products: productsReducer,
    users: userReducer,
    cart: cartReducer,
    orders: ordersReducer,
    userOrders: userOrdersReducer,
})
