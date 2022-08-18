import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";


//User login Controller Route
const userLogin = asyncHandler(async(req,res)=>{
    const {email,password} =req.body;
    const user= await User.findOne({email}); 
    if(user && await user.matchPassword(password)){
        res.json({
            id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        });
    }else{
         res.status(403);
         throw new Error("Invalid Email or Password")
    }
});

//suerRegistration COntroller

const userRegistration=asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body;
    const existUser = await User.findOne({email});
    if(existUser){
        res.status(401);
        throw new Error("User is already registered");
    }else{
        const user = new User({name,email,password})
        await user.save();
        res.json(user);
    }
})

   //User Profile ...

  const userProfile = asyncHandler(async(req,res)=>{
      const {email} =req.body
    const user = await User.findOne({email});
    if(user){
        res.json({
            id:user._id,
            name:user.name,
            email:user.email
        })
        // res.send(user)
    }else{
        res.status(404);
        throw new Error("No user Found")
    }
  })

//   user Profile Update Controller

const updateProfile = async(req,res)=>{
    const id = req.body.id
    try {
        const user = await User.findById(id);
        
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            if(req.body.password){
               user.password=req.body.password
            }
            const updateUser = await user.save();
            // const updatedUser = await user.save()
            res.json({
                id: updateUser._id,
                email: updateUser.email,
                name: updateUser.name,
                isAdmin: updateUser.isAdmin,
                
            });
         
     
     
    } catch (error) {
        res.status(404).json({
            message:"Something is Wrong try after Sometime...",
            error:error.stack
        })
    }
}
    





export {userRegistration,userLogin,userProfile,updateProfile}