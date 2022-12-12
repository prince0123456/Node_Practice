const {MongoClient}= require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const dataBase=('test');
async function getData(){
    let result=await client.connect();
    // result.db('test');
    let db=result.db(dataBase);
    let collection=db.collection('test');
    let response=await collection.find({}).toArray();
    console.log(response);
}
getData()