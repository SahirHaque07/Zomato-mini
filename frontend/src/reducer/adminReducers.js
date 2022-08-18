

export const adminUserReducer=(state={},action)=>{
    switch(action.type){
        case "GET_USER_REQ":return{loading:true}
        case "GET_USER_SUCCESS":return{loading:false,users:action.payload}
        case "GET_USER_FAILS":return{loading:false,error:action.payload}
        default:return state
    }
}

export const adminProductReducer=(state={},action)=>{
    switch(action.type){
        case "GET_PRODUCT_REQ":return{loading:true}
        case "GET_PRODUCT_SUCCESS":return{loading:false,products:action.payload}
        case "GET_PRODUCT_FAILS":return{loading:false,error:action.payload}
        default:return state
    }

}



//Add product rducer

export const addProductReducer =(state={},action)=>{
    switch(action.type){
        case "ADD_PIZZA_REQUEST":return{loading:true}
        case "ADD_PIZZA_SUCCESS":return{loading :false,success:true}
        case "ADD_PIZZA_FAILS":return{loading:false,error:action.payload}
        default:return state
    }
}