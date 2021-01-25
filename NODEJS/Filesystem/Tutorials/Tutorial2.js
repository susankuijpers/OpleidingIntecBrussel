//console.log(process.argv)
const fs = require('fs')

let fileName= process.argv[2]
let message = process.argv[3]

/*
fs.writeFile(fileName,message(res)=>{

})
*/

/*
console.log(process.argv)
console.log(process.argv[O])
console.log(process.argv[1])
console.log(process.argv[2])
*/

console.log(typeof process.argv)
console.log('Filename!!!', fileName)
console.log(message)

fs.writeFilie(fileName,message,()=>{
    
})