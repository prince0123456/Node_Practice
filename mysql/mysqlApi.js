const express=require('express')
const con=require("./config");
const app=express();

app.use(express.json())
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
    const data={name:"prince123",lastname:"12delta"};
    con.query("INSERT INTO users SET ?",data,(err,result,fields)=>{
        if(err)throw err;
        res.send(result);
    })
    // res.send("rout done");
});
app.put("/:id",(req,res)=>{
    // res.send("update API")
    const data=[req.body.name,req.body.lastname,req.params.id]
    con.query("UPDATE users SET name=?,lastname=? where iduser = ?",data,(err,result,fields)=>{
          if(err) throw err;
          res.send(result);
    })
})

app.listen(3006);