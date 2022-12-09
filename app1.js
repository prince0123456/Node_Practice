//http module
const http=require('http');
const { json } = require('stream/consumers');
const data=require('./data')
//server 

http.createServer((req,res)=>{
      res.writeHead(200,{'content-Type':'application\json'});
      res.write(JSON.stringify(data))
      res.end();
}).listen(5000);