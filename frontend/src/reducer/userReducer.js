const loginReducer = (state={},action)=>{
    switch(action.type){
        case "LOGIN_REQUEST":return{loading:true}
        case "LOGIN_SUCCESS":return{loading:false,userInfo:action.payload}
        case "LOGIN_FAILS":return{loading:false,error:action.payload}
        case "LOGOUT_REQ":return{loading:true}
        case "LOGOUT_SUCCESS":return{}
        default:return state;
    }
}


const registrationReducer = (state={userInfo:null},action) =>{
    switch(action.type){
        case "USER_REG_REQ":return{loading:true}
        case "USER_REG_SUCCESS":return{loading:false,userInfo:action.payload}
        case "USER_REG_FAILS":return {loading:false ,error:action.payload}
        default :return state;
    }
}



const updateUserReducer=(state={},action)=>{
    switch(action.type){
        case "UPDATE_USER_REQ":return{loading:true}
        case "UPDATE_USER_SUCCESS":return{loading:false,success:true,userInfo:action.payload}
        case "UPDATE_USER_FAILS":return{loading:false,error:action.payload}
        case "LOGOUT_SUCCESS":return{}
        default :return state;
    }
}





export {loginReducer,registrationReducer,updateUserReducer};