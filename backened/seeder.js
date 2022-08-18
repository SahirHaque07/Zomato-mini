// import mongoose from "mongoose";
// import Product from "./models/productModel.js";
// import Order from "./models/orderModel.js";
// import User from "./models/userModel.js";
// import pizzas from "./data/pizzaData.js";


// const importData =
//     Product.deleteMany();
//     Order.deleteMany();
//     User.deleteMany();



//Seeder Data by Sir ... 😀😀😀

import mongoose from "mongoose";
import dotenv from "dotenv";
import "colors";
import connDb from "./config/db.js"
import Pizza from "./models/productModel.js"
import pizzas from "./data/pizzaData.js";

//config dot env and mongodb conn file
dotenv.config();
connDb();

//import data
const importData = async () => {
  try {
    await Pizza.deleteMany();
    const sampleData = pizzas.map((pizza) => {
      return { ...pizza };
    });
    await Pizza.insertMany(sampleData);
    console.log("DATA IMPOrted".bgGreen.white);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.white);
    process.exit(1);
  }
};

importData();
// const dataDestroy = () => {};

// if (process.argv[2] === "-d") {
//   dataDestroy();
// } else {
//   importData();
// }