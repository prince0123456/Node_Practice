const mysql=require('mysql');

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"sakila"
});
con.connect((err)=>{
    if(err){
        console.warn("error")
    }else{
        console.warn("connected")
    }
})

con.query("select * form")