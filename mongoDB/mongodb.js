const {MongoClient}= require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const dataBase=('test');
//_____________________________________
async function dbConnect(){
    let result=await client.connect();
    // result.db('test');
    let db=result.db(dataBase);
    return db.collection('test');
    // let response=await collection.find({}).toArray();
    // console.log(response);
}
// console.log(dbConnect());
// dbConnect();


// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

module.exports=dbConnect;











