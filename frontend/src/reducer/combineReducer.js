import {combineReducers} from "redux"
import {pizzaReducer} from "./pizzaReducer";
import {addToCartReducer} from "./cartReducer"
import {loginReducer,registrationReducer,updateUserReducer} from "./userReducer"
import {orderPlaceReducer,getOrderReducer,getMyOrdersReducer} from "./orderReducer";
import {adminUserReducer,adminProductReducer,addProductReducer} from "./adminReducers"

const rootReducer=combineReducers({
    pizzaReducer,
    addToCartReducer,
    loginReducer,
    registrationReducer,
    orderPlaceReducer,
    getOrderReducer,
    getMyOrdersReducer,
    updateUserReducer,
    adminUserReducer,
    adminProductReducer,
    addProductReducer
})

export default rootReducer