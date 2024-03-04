const express=require("express")
const mongoose=require("mongoose");
const studentRouter = require("./routes/studentRoutes");
let app=express()

async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
    console.log("db connected");
}
db()

app.use(express.json())
app.use("/app",studentRouter)

app.listen(5000,()=>{
    console.log("server is running on port 5000...");
})