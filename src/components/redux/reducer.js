import { combineReducers } from "redux";
import cartReducer from "../Cart/cartSlice";
import listProductsReducer from "../ListProducts/listProductSlice";
import notifyReducer from "../Notify/notifySlice";


const rootReducer = combineReducers(
    {
        listProducts: listProductsReducer,
        cart: cartReducer,
        notify: notifyReducer
    }
)

export default rootReducer