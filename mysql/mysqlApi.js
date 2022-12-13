const express=require('express')
const con=require("./config");
const app=express();
app.get("/",(req,res)=>{
    con.query("SELECT * FROM city",(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result)
        }
    })
    // res.send("rout done");
});
app.post("/",(req,res)=>{
    con.query("SELECT * FROM users",(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result)
        }
    })
    // res.send("rout done");
});

app.listen(3001);