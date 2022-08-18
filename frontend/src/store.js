import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducer/combineReducer";

const middleWare =[thunk];


const cartitemsFromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]
const userInfoFromLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")):null
const initialState={
    addToCartReducer:{cartItems:cartitemsFromLocalStorage},
    loginReducer:{userInfo:userInfoFromLocalStorage}
}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)





export default store;