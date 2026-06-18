const express = require('express');
const app = express()
const Product = require("./models/Product")
const productRoute=require("./router/productRoute")
const connectDB=require("./config/db")
const authroute = require('./router/authRouter')
require('dotenv').config()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/uploads",express.static("uploads"))
app.use("/uploads", express.static("uploads"));
connectDB()
app.use(express.json());
app.use("/uploads", express.static("uploads"));


//this will be used to the developers when they will change the versions
app.use("/api/v1",productRoute)
app.use("/api/v1",authroute)
app.use("/auth",authroute)
//starting route
app.get("/",(req,res)=>{
   res.send("server is working ")
})
//port number
app.listen(3004,()=>{
    console.log("server .started")
})

// console.log("auth router loaded");
// app.use(authroute);

// app.get("/", (req, res) => {
//     res.send("Server Working");
// });
