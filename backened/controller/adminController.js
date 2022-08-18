//Finding all users Route
import Users from "../models/userModel.js";
import Pizza from "../models/productModel.js";

export const usersForAdmin = async(req,res)=>{
  try {
      const user = await Users.find({});
      res.json(user)
  } catch (error) {
      res.status(404).json({
          message:error.stack,
          error:error.stack
      })
  }
}

//Finding All Products Route

export const allProductsForAdmin=async(req,res)=>{
    try {
        const products = await Pizza.find({});
        res.json(products);
    } catch (error) {
        res.status(404).json({
            message:error.stack,
            error:error.stack
        })
    }
}



//Adding Product Controller 
export const addProductController = async(req,res)=>{
    const {pizza}= req.body;
    try {
        const product = new Pizza({
                name:pizza.name,
                image:pizza.image,
               prices:[pizza.prices],
               description:pizza.description,
               category:pizza.category,
               varients:["small","medium","large"]
        });
        await product.save();
        res.status(200).json({
            message:"Pizza Added SuccessFully"
        })
    } catch (error) {
        res.status(404).json({
            message:error.stack,
            error:error.stack
        })
    }
}