// require('dotenv').config()
import connectDB from "../src/databases/index.js"
import dotenv from "dotenv"
import {app} from "./app.js"

dotenv.config({
  path: './.env'
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  
  .catch((err) => {
    console.log("MongoDB connection failed !!", err);
    
  });

//second process to connect a databace file to database folder
// First process to connect a database with mongoose

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL} / ${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("ERROR : ", error);
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listen on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR:", error);
//     throw err;
//   }
// })();
