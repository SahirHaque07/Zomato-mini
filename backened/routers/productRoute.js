import express from "express";
import { getProduct,getSingleProduct } from "../controller/productController.js";

const productRoute = express.Router();

productRoute.route("/products").get(getProduct);
productRoute.route("/products/:id").get(getSingleProduct);



export default productRoute;
