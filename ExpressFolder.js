const express=require('express');
const path=require('path');
const app=express();
const publicpath=path.join(__dirname,'public');
// app.use(express.static(publicpath));
app.get("/about",(req,res)=>{
    res.sendFile(`${publicpath}/about.html`)
})
app.get("/home",(req,res)=>{
    res.sendFile(`${publicpath}/Home.html`)
})
app.get("*",(req,res)=>{
    res.sendFile(`${publicpath}/404.html`)
})
app.listen(3005)