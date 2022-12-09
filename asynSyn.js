let a=10;
let b=0;
console.log("start exe...");
setTimeout(()=>{
    b=20;
    console.log("logic exe..." +a+b)
},2000)

console.log(a+b)