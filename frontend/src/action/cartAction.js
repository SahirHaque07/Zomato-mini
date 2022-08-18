import axios from "axios";
import { ADD_TO_CART } from "../constant";

const addToCartAction = ({id,variant,qty,price})=>async(dispatch,getState)=>{
   try {
    const {data} = await axios.get(`products/${id}`)
    dispatch({type:ADD_TO_CART,payload:{
        product:data._id,
        name:data.name,
        image:data.image,
        price:price,
        variant:variant,
        qty:qty
    }});
     const {addToCartReducer:{cartItems}} = getState();
   localStorage.setItem("cartItems",JSON.stringify(cartItems));
   } catch (error) {
       dispatch({type:"ERROR_CART",payload:error.response && error.response.data.message ?
       error.response.data.message : error.message})
   }
}


const cartRemoveItemAction = (id)=>(dispatch,getState)=>{
    dispatch({type:"CART_REMOVE_ITEM",payload:id})
    const {addToCartReducer:{cartItems}} = getState();
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
}


export {addToCartAction,cartRemoveItemAction}