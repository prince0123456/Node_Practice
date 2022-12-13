const express=require('express')
const app=express();
app.get("/",(req,res)=>{
    res.send("rout done");
});

app.listen(5000);