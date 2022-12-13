const mysql=require('mysql');

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"world"
});
module.exports=con;