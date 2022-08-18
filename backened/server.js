import express from "express";
import dotenv from "dotenv";
import connDb from "./config/db.js";
import productRoute from "./routers/productRoute.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js"
import {errorHandler} from "./middleWare/errorHandler.js";
import adminRouter from "./routers/adminRoutes.js"
dotenv.config();
const app = express();
 app.use(express.json())
connDb();


app.use("",productRoute);
app.use("/users",userRouter);
app.use("/order",orderRouter);
app.use("/admin",adminRouter);



if(process.env.NODE_ENV === "production"){
    app.use(express.static("frontend/build"))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
    })
}else{
    app.get("/",(req,res)=>{
        res.send("<h1>Api is Running ...</h1>");
    }) 
}



app.use(errorHandler);
app.listen(process.env.PORT||8080,()=>{
    console.log("server is running at port = ",process.env.PORT)
})