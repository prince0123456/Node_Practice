const express=require('express')
const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-com");

const product=require('./product');

const app=express();
app.use(express.json());

app.post("/create",async (req,res)=>{
    let data=new product(req.body);
    let result=await data.save();
    console.log(req.body);
    res.send("done");
});

app.get("/list",async (req,res)=>{
    let data=await product.find();
    res.send(data);
    console.log(data)
})

app.listen(3006)