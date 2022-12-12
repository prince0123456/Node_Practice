const {MongoClient}= require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const dataBase=('test');
//_____________________________________
async function dbConnect(){
    let result=await client.connect();
    let db=result.db(dataBase);
    return db.collection('test');
}


module.exports=dbConnect;











