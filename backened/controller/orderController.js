import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51KgJ13SGZnLMw5oEzjA3bcd4aR0TmPO9JAwcwHauDQMljwS0jqwv01yeRhFxSLX7Lv71qDyz0ZLfXMF6twpUiVSd00beRnu2zQ');
import Order from "../models/orderModel.js";
import { v4 as uuidv4 } from 'uuid';

//Stripe Payment and Order creation to Database ...
export const placeOrder=async (req,res)=>{
    const {token,userInfo,cartItems,price} = req.body;
   try {
       const customer = await stripe.customers.create({
            email:token.email,
            source:token.id
       });

       const payment = await stripe.paymentIntents.create({
            amount: price*100,
            currency:"INR",
            customer:customer.id,
            receipt_email:token.email
       },
       
        {
            idempotencyKey: uuidv4(),
          }
       );
       if(payment){
           const order = new Order({
                name:userInfo.name,
                email:userInfo.email,
                userid:userInfo.id,
                orderItems:cartItems,
                orderAmount:price,
                shippingAddress:{
                    address:token.card.address_line1,
                    city:token.card.address_city,
                    pin:token.card.address_zip,
                    country:token.card.address_country

                },
                transactionId:payment.id
           });
           await order.save();
           res.json(order);
       }else{
           res.send("payment failed")
       }
   } catch (error) {
       res.status(400).json({
           message:error.stack,
           error:error.stack
       })
   }
}


//Finding Order USing orderId

export const getOrderById = async(req,res)=>{
    const id = req.params.id;
    try {
        const order = await Order.findById(id);
        if(order){
            res.json(order)
        }else{
            res.json("No order Found")
        }
    } catch (error) {
        res.status(404).json({
            message:error.stack
        })
    }
}


// getting All order of User Order By user id

export const getMyOrders=async(req,res)=>{
    const  userid = req.body.userid;
   try {
    const orders = await Order.find({userid});
    if(orders){
        res.json(orders);
    }else{
        res.json("Not Found")
    }
   } catch (error) {
       res.status(404).json({
           message:error.stack,
           error:error.stack
       })
   }
}