const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-com");
  const ProductSch= new mongoose.Schema({
        name:String,
        product:String,
        price:Number,
        brand:String,
        warranty:String
    });

const main=async ()=>{
  const productModel=mongoose.model('products',ProductSch);
  let data= new productModel({name:"UBZ",product:"Guns",price:1500,brand:"M4",warranty:"no warranty"});
  let result = await data.save();
  console.log(result);
}
const updateData=async ()=>{
   const product=mongoose.model('products',ProductSch);
   let data=await product.updateOne({name:"mi7"},
   {$set:{price:8898,name:"MI16"}})
   console.log(data);
}
const deleteData=async()=>{
    const product=mongoose.model('products',ProductSch);
    let data= await product.deleteOne({name:'ak47'});
    console.log(data)
}
// updateData()
// deleteData()
main()
