const dbConnect=require('./mongoCon');

const updateData=async ()=>{
    let data=await dbConnect();
     let result=await data.updateOne({name:'alfa'},
     {$set:{name:'alfa0001'}});
    console.warn(data);
    console.log(result);
}
updateData()