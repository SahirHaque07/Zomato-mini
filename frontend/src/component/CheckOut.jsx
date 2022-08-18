import React,{useEffect} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {orderPlaceAction} from "../action/orderAction";
import {useNavigate} from "react-router-dom"



const CheckOut = ({price}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderPlaceReducer = useSelector(state=>state.orderPlaceReducer)
  const {success} =orderPlaceReducer
    const tokenHandler =(token)=>{
       dispatch(orderPlaceAction(token,price));
    }
    useEffect(()=>{
      if(success){
        navigate("/success");
      }
    },[success,navigate])
  return (
   <StripeCheckout
   amount ={price * 100}
   token = {tokenHandler}
   shippingAddress
   currency='INR'
   stripeKey="pk_test_51KgJ13SGZnLMw5oE3ys0G0M2CdYEZNBDidsWkyd00cbSsxy6tBOPEuryyFvAO9qKv6WFaaiMIzYNhJjE3WUZG9Xc00ejEYeiEv"
   >
        <Button className="btn btn-block" style={{ borderRadius: "25px",width:"100%" }}>Proceed to Checkout</Button>
   </StripeCheckout>
  )
}

export default CheckOut