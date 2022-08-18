import express from "express";
import {usersForAdmin,allProductsForAdmin,addProductController} from "../controller/adminController.js"

const adminRouter = express.Router();

adminRouter.route("/users").get(usersForAdmin);
adminRouter.route("/products").get(allProductsForAdmin);
adminRouter.route("/addproducts").post(addProductController);

export default adminRouter;