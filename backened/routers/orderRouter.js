import express from "express";
import {getOrderById, placeOrder,getMyOrders} from "../controller/orderController.js"
const orderRouter =express.Router();

orderRouter.route("/placeorder").post(placeOrder);
orderRouter.route("/:id").get(getOrderById);
orderRouter.route("/myorders").post(getMyOrders);

export default orderRouter;