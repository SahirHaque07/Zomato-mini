import axios from "axios";

//Placing order
const orderPlaceAction =(token,price)=>async (dispatch,getState)=>{

     const {loginReducer:{userInfo}} =getState();
     const {addToCartReducer:{cartItems}} =getState();
   try {
       const config = {Headers:{"Content-Type":"application/json"}}
       const res = await axios.post("/order/placeorder",{token,userInfo,cartItems,price},config)
      dispatch({type:"ORDER_DETAILS",payload:res})
    } catch (error) {
       dispatch({type:"ORDER_FAILS",payload:error.response && error.response.data.message ?
       error.response.data.message : error.message})
   }
}

//Fetching Order by Order id
const orderFetchAction = (id)=> async (dispatch)=>{
  
  try {
    dispatch({type:"ORDER_FETCH_REQ"});
    const {data} = await axios.get(`/order/${id}`);
   
   dispatch({type:"ORDER_FETCH_SUCCESS",payload:data});
   
  } catch (error) {
    dispatch({type:"ORDER_FETCH_FAILS",payload:error.response && error.response.data.message ?
    error.response.data.message : error.message})
  }
}


//Getting All orders using user id

const getmyOrdersAction =(userid)=>async(dispatch)=>{
  try {
    dispatch({type:"GET_MY_ORDERS_REQUEST"})
    const {data} = await axios.post("/order/myorders",{userid});
    dispatch({type:"GET_MY_ORDERS_SUCCESS",payload:data})
  } catch (error) {
    dispatch({type:"GET_MY_ORDERS_FAILS",payload:error.response && error.response.data.message ?
    error.response.data.message : error.message})
  }
}


export {orderPlaceAction,orderFetchAction,getmyOrdersAction};