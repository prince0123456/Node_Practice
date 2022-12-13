const express=require("express");
const EventEmitter=require("events");
const event=new EventEmitter();
let count=0;
event.on("countAPI",()=>{
    count++;
    console.log("event called",count);
})
const app=express();
app.get("/",(req,res)=>{
    res.send("api called");
    event.emit("countAPI");
})

app.get("/search",(req,res)=>{
    res.send("api called search");
    event.emit("countAPI");
})

app.get("/update",(req,res)=>{
    res.send("api called update");
    event.emit("countAPI");
})



app.listen(3003);