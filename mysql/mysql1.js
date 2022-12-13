const mysql=require('mysql');

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"world"
});
con.connect((err)=>{
    if(err){
        console.warn(err)
    }else{
        console.warn("connected")
    }
})

con.query("SELECT * FROM city",(err,result)=>{
    console.warn(err);
    console.warn("result",result);
})
