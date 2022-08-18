const orderPlaceReducer = (state={},action)=>{
    switch(action.type){
        case "ORDER_DETAILS":return{success:true,
            orderDetails:action.payload
        }
        case "ORDER_FAILS":return{
             error:action.payload
        }
        default:return state
    }
}


const getOrderReducer = (state={},action)=>{
    switch(action.type){
        case "ORDER_FETCH_REQ":return{loading:true}
        case "ORDER_FETCH_SUCCESS":return{loading:false,myOrders:action.payload}
        case "ORDER_FETCH_FAILS":return{loading:false,error:action.payload}
        default :return state
    }
}


//Getting myOrders in profile Reducer

const getMyOrdersReducer = (state={},action)=>{
    switch(action.type){
        case "GET_MY_ORDERS_REQUEST":return{loading:true}
        case "GET_MY_ORDERS_SUCCESS":return{loading:false,myAllOrders:action.payload}
        case "GET_MY_ORDERS_FAILS":return{loading:false,error:action.payload}
        case "GET_MY_ORDER_RESET":return{}
        default:return state
    }
}


export {orderPlaceReducer,getOrderReducer,getMyOrdersReducer};