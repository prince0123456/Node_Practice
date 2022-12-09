const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;
fs.writeFileSync(filePath,'This is a text file')
fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
    if(!err)console.log("file is update")
})
// fs.rename(filePath,`${dirPath}/fxxx.txt`,(err)=>{
//     if(!err)console.log("name change")
// })

fs.unlinkSync(`${dirPath}/fxxx.txt`);