import axios from "axios";

//User Login Action
const userLoginAction = (email,password) => async (dispatch) => {
    try {
        const config = {
            headers: { "Content-type": "application/json" }}
        const { data } = await axios.post("/users/login", {email,password}, config);
        console.log("loginData ",data)
        dispatch({
            type: "LOGIN_REQUEST"
        })
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data
        });
        localStorage.setItem("userInfo",JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILS",
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }

}

//User Logout Action

const userLogOutAction=()=>(dispatch)=>{
     localStorage.removeItem("userInfo");
     dispatch({type:"LOGOUT_REQ"})
     dispatch({type:"LOGOUT_SUCCESS"})
}


//UserRegistration Action

const userRegistrationAction = (name,email,password)=>async(dispatch)=>{
  try {
    dispatch({type:"USER_REG_REQ"})
    const config = {headers:{"Content-Type":"application/json"}}
    const {data} = await axios.post("/users/register",{name,email,password},config)
    dispatch({type:"USER_REG_SUCCESS",payload:data});
    
    
  } catch (error) {
      dispatch({type:"USER_REG_FAILS",payload:error.response && error.response.data.message ?
      error.response.data.message : error.message})
  }
}


//user Profile update Action
const userProfileUpdateAction = (name,email,password)=>async(dispatch,getState)=>{
  try {
      dispatch({type:"UPDATE_USER_REQ"})
      const config={headers:{"Content-Type":"application/json"}}
      const {loginReducer:{userInfo}} = getState();
      const id = userInfo.id;
      const {data} = await axios.put("/users/profile",{id,name,email,password},config)
        dispatch({type:"UPDATE_USER_SUCCESS",payload:data});
        dispatch({type:"LOGIN_SUCCESS",payload:data});
        localStorage.setItem("userInfo",JSON.stringify(data));

    } catch (error) {
      dispatch({type:"UPDATE_USER_FAILS",payload:error.response && error.response.data.message ?
      error.response.data.message : error.message})
  }


}

export {userLoginAction,userLogOutAction,userRegistrationAction,userProfileUpdateAction}