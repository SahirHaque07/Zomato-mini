import {PIZZA_REQUEST,PIZZA_SUCCESS,PIZZA_FAILS} from "../constant";
import axios from "axios";

const pizzaAction=()=>async (dispatch)=>{
   try {
    dispatch({type:PIZZA_REQUEST})
    const {data} = await axios.get("/products");
    dispatch({type:PIZZA_SUCCESS,payload:data});
   } catch (error) {
       dispatch({type:PIZZA_FAILS,payload:error.response && error.response.data.message ?
        error.response.data.message : error.message})
   }
}


const filterPizza = (search)=>async (dispatch)=>{
   let result;
   dispatch({type:PIZZA_REQUEST})
    try {
      const res = await axios.get("/products");
      result =  res.data.filter((pizza)=>pizza.name.toLowerCase().includes(search));
      dispatch({type:PIZZA_SUCCESS,payload:result});
      if(result.length===0){
         dispatch({type:PIZZA_FAILS,payload:"No Items Matched"})
      }
    } catch (error) {
      dispatch({type:PIZZA_FAILS,payload:error.response && error.response.data.message ?
         error.response.data.message : error.message})
    }
}



export {pizzaAction,filterPizza};