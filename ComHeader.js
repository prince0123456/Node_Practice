const express=require('express');
const path=require('path');
const app=express();
const publicpath=path.join(__dirname,'public');

app.set('view engine','ejs')
// app.use(express.static(publicpath));
app.get("/about",(req,res)=>{
    res.sendFile(`${publicpath}/about.html`)
})
app.get("/home",(req,res)=>{
    res.sendFile(`${publicpath}/Home.html`)
})

app.get("/profile",(req,res)=>{
    const user=
        {
            name:'prince',
            email:'shrk@gmasil.com',
            skills:['php','java']
        }
    
    res.render('profile',{user})
})
app.get("/login",(req,res)=>{    
    res.render('login')
})
app.get("*",(req,res)=>{
    res.sendFile(`${publicpath}/404.html`)
})
app.listen(3005)