import Pizza from  "../models/productModel.js";
import asyncHandler from "express-async-handler";

//Fetching ASll Product From Data 😀😀😀
const getProduct = asyncHandler(async(req,res)=>{
    const product = await Pizza.find({});
    if(product){
        res.json(product);
    }else{
        res.status(404);
        throw new Error("Not Found")
    }
});


//Fetching Single Product By Id 😀😀😀

const getSingleProduct =asyncHandler(async(req,res)=>{
    const singleProduct = await Pizza.findById(req.params.id);
    if(singleProduct){
        res.json(singleProduct);
    }else{
        res.status(404)
        throw new Error("Not Found")
    }

})










export {getProduct,getSingleProduct};