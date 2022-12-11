// const { application } = require("express");
const expr=require("express");
const aap=expr();
aap.get('/',(req,res)=>{
    console.log("data sent " ,req.query.name);
 res.send("hello , this is home page"+" "+req.query.name)
})

aap.get('/about',(req,res)=>{
    res.send("hello , this is about page")
   })

   aap.get('/help',(req,res)=>{
    res.send("hello , this is help page")
   })
   aap.listen(3001);