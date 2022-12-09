const app=require('./app')
console.log("hello");
let a=10;
let b='10';
if(a===b){
    console.log('ok match')
}
const arr=[1,2,3,4,5,6,7,3,3];
const result=arr.filter((item)=>{
//   console.log(item)
return item===3;
})
console.log(result)