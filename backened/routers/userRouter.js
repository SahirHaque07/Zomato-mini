import express from "express";
import { userRegistration,userLogin,userProfile,updateProfile } from "../controller/userController.js";
const userRouter = express.Router();

userRouter.post("/register",userRegistration);
userRouter.route("/login").post(userLogin);
userRouter.route("/profile").post(userProfile).put(updateProfile)
// userRouter.route("updateprofile").put(updateProfile);


export default userRouter;