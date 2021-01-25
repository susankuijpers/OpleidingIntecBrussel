// changing , reading, writing text in other text document 
//using following methods

//fs file system modal


const fs = require('fs')
const readLine = require('readLine') //npm 'readLine' installeren

// READ FILE
fs.readFile('./readme.txt','utf8',(err,content)=>{
    console.log(content)
})

// APPEND FILE
fs.appendFile('./readme.txt','this is new line',(err)=>{
    if(err) throw err;
    console.log('data saved!')
})

// WRITE FILE
fs.writeFile('./readme.txt','NEW DATA!message', (err)=>{
if(err) throw err;
console.log('file created')
})

// UNLINK FILE
/*
fs.unlink('./readme.txt',(res)=>{
    console.log('deleted!')
})
*/

//rename file
fs.rename('./readme.txt','./helloworld.txt',()=>{
console.log('filename has been renamed')
})


const readInterface = readline.createInterface({
    input:fs.createReadStream('./commandLineApp')
});


//extracting specific data and inserting into new file

readInterface.on('line',(line)=>{
    console.log(line,'this is line') // reads everything line by line
    let extracted = line.split(":")[0]
    console.log(extracted)
    fs.appendFile('./extractedData.txt',`${extracted}\n`,(err)=>{ //template literal
        if(err) return console.log(err);
        console.log('users list extracted')
    })
})