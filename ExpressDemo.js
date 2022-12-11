// const { application } = require("express");
const expr=require("express");
const aap=expr();
aap.get('/',(req,res)=>{
    console.log("data sent " ,req.query.name);
 res.send("<h1>hello , this is home page</h1>"+" "+req.query.name)
})

aap.get('/about',(req,res)=>{
    res.send("hello , this is about page"+`
    <input type='text' value="${req.query.name}"/>
    <a href="/about">about</a>
    <a href="/help">help</a>
    `)
   })

   aap.get('/help',(req,res)=>{
    res.send([
        {
            name:"prince",
            email:'axyz@test.com'
        },
        {
            name:'prince',
            email:'axyz@test.com'
        },
        {
            name:'prince',
            email:'axyz@test.com'
        }
    ]);
   });
   aap.listen(3001);