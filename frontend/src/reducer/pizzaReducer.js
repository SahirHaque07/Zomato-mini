import {PIZZA_REQUEST,PIZZA_SUCCESS,PIZZA_FAILS} from "../constant"

 export const pizzaReducer = (state={},action)=>{
    switch(action.type){
        case PIZZA_REQUEST:return{loading:true}
        case PIZZA_SUCCESS:return{loading:false,pizza:action.payload}
        case PIZZA_FAILS:return{loading:false,error:action.payload}
        default :return state
    }
}