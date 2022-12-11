//middleware

module.exports= reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("please provide age")
    }else if(req.query.age<20){
        res.send("20 age limit")
    }
    else{
     res.send('nothing')
    }  
}

