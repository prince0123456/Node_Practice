const express=require('express')
const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-com");

const product=require('./product');

const app=express();
app.use(express.json());

app.get("/search/:key",async (req,res)=>{
    console.log(req.params.key)
    let data= await product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}}
            ]
        }
    );
     res.send(data)
    res.send("search done")
})
app.listen(3006)