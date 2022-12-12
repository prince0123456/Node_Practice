const express=require('express');
const dbConnect=require('./mongoCon');
const app=express();

//middle
 app.use(express.json());

//api

app.get('/',async (req,res)=>{
    let data= await dbConnect();
    data= await data.find().toArray();
    console.log(data)
     res.send(data);
})
app.post('/',async (req,res)=>{
    console.log(req.body);
    let data=await dbConnect();
    let result = await data.insertOne(req.body);
    console.log(result)
    res.send('hello post')
})
app.put("/",async (req,res)=>{
    console.log(req.body);
    let data=await dbConnect();
    let result=await data.updateOne(
        {name:"Delta1"},{$set:{price:900}}
        )
    res.send({
        result:"update"
    })
})
app.listen(3005)