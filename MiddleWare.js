const express=require('express');
const reqFilter=require('./mroute')
const app=express();
// const publicpath=path.join(__dirname,'public');

// //middleware

const route=express.Router();
route.use(reqFilter)
// const reqFilter=(req,res,next)=>{
//     if(!req.query.age){
//         res.send("please provide age")
//     }else if(req.query.age<20){
//         res.send("20 age limit")
//     }
//     else{
//     next();
//     }  
// }

// app.use(reqFilter)

// route.get("/about",(req,res)=>{
//     res.sendFile(`${publicpath}/about.html`)
// })

app.get("/",(req,res)=>{
    res.send("AHello home page")
})

route.get("/home2",(req,res)=>{
    res.send("Hello home  2 page")
})
app('/',route);
app.listen(3005)