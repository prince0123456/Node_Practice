const dbConnect=require('./mongoCon');

const deleteData=async ()=>{
    let data=await dbConnect();
    let result=await data.deleteOne({name:'Dakuy'});
    console.log(result);
    if(result.acknowledged){
        console.log("delete the recored")
    }
}
deleteData();