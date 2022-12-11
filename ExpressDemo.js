const { application } = require("express");
const expr=require("express");
const aap=expr();
aap.get('/',(req,res)=>{
 res.send("hello , this is home page")
})

aap.get('/about',(req,res)=>{
    res.send("hello , this is about page")
   })

   aap.get('/help',(req,res)=>{
    res.send("hello , this is help page")
   })
   aap.listen(3001);