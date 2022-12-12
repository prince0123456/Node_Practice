const dbConnect=require('./mongoCon');

const insert =async()=>{
    const db=await dbConnect();
    const result=await db.insertMany([
        {
            name:'Delta1',email:'delta1@gmail.com',unit:'SF1'
        },
        {
            name:'Daku1',email:'delta@gmail.com',unit:'SF2'
        }
    ])
    // console.log(result)
    if(result.acknowledged){
        console.log('data inserted');
    }
    console.log('insert fun insert')
}
insert()