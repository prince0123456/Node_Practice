const mongoose=require('mongoose');

const main=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-com");
    const ProductSch= new mongoose.Schema({
        name:String,
        product:String,
        price:Number,
        brand:String
    });
  const productModel=mongoose.model('products',ProductSch);
  let data= new productModel({name:"ak47",product:"mobile",price:1500,brand:"realme"});
  let result = await data.save();
  console.log(result);
}
main();