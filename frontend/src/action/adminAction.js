import axios from "axios";


export const adminUserAction = ()=>async(dispatch)=>{
   try {
      dispatch({type:"GET_USER_REQ"});
      const {data} = await axios.get("/admin/users");
      dispatch({type:"GET_USER_SUCCESS",payload:data})
    } catch (error) {
      dispatch({type:"GET_USER_FAILS",payload:error.response && error.response.data.message ?
      error.response.data.message : error.message})
  }
}



export const adminProductAction = ()=>async(dispatch)=>{
    try {
       dispatch({type:"GET_PRODUCT_REQ"});
       const {data} = await axios.get("/admin/products");
       dispatch({type:"GET_PRODUCT_SUCCESS",payload:data})
     } catch (error) {
       dispatch({type:"GET_PRODUCT_FAILS",payload:error.response && error.response.data.message ?
       error.response.data.message : error.message})
   }
 }


 // Add Product action

 export const addProductAction=(pizza)=>async(dispatch)=>{
   try {
     dispatch({type:"ADD_PIZZA_REQUEST"});
     const config ={headers:{"Content-Type":"application/json"}}
     const {data} = await axios.post("/admin/addproducts",{pizza},config);
     dispatch({type:"ADD_PIZZA_SUCCESS",payload:data});


   } catch (error) {
     dispatch({type:"ADD_PIZZA_FAILS",payload:error.response && error.response.data.message ?
     error.response.data.message : error.message})
   }
 }