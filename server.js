const http=require('http');
const dataCheck=(req,res)=>{
    res.write("<h1>hello this is prince gupta...</h1>")
    res.end();
}
http.createServer(dataCheck).listen(4500);

const color=require('colors');
console.log("package".bgCyan)