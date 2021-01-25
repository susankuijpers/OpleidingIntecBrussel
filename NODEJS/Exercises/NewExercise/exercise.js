/*use 

https://jsonplaceholer.typicode.come/posts/
yargs
http
fs module

node getPost.js --id 10

https://jsonplaceholer.typicode.come/posts/10

print in console
console.log(singlePost)
res.write()

1) make command-line app interface with yargs module
2) make async funciton to get single post
3) save resoponse data in local folder (server)
4) print the response data in browser with http module

id is resquired

if you want use nice art in your application :) 
https://fsymbols.com/text-art/twitter/#all_cats

//node getPost.js --id 10

*/

const getPosts = require('posts')
const http = require('http')
const fs = require('fs')
const yargs = require('yargs/yargs')

//let argv = require('yargs/yargs')(process.argv.slice(2))
//.usage(`node getPost.js --id 10`) // optional 
//.demandOption(['']) // required
//.argv

console.log(singlePost)
res.write()

/*
getPosts({'something',argv.something}).then(results=>{
    console.log(results)
    if(argv.output !=undefined){
        fs.writeFileSync(argv.output,JSON.stringify(results));
    };

    if(argv.live !=undefined){
        http.createServer((req,res)=>{
            //res.write(JSON.stringify(results))
            res.write() //add bootstrap jumbotron here
            res.end();
        }).listen(Number(argv.port),()=>{
            console.log(`Visit Link for Result: http://localhost:${argv.port}/`)
        })
    }

})
*/

