const express=require("express");
const app =express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors");

// mongoose.connect(process.env.DATABASE,()=>{
//     // console.log(process.env.DATABASE)
//     console.log("Connection to Database successfull");
// },(err)=>{
//     console.log(err);
// });
console.log(process.env.DATABASE);



app.get("/",(req,res)=>{
    console.log(req);
    res.send("asdasdasd")
});

app.listen(process.env.PORT,()=>{
    console.log(`Listening on Port ${process.env.PORT}`);
});
