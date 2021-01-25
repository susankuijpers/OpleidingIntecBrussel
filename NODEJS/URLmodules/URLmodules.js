const { parse } = require('path')
/*
for more info on IRL modules look at video on 17:14 min
https://www.youtube.com/watch?v=zQRrXTSkvfw&list=PLOU2w2icQVbOjtApMsc_QPYp6vZAaqVaV&index=35&t=259s
*/

/*
const url = require ('url');

const adress = 'https://www.youtube.com/watch?v=zQRrXTSkvfw&list=PLOU2w2icQVbOjtApMsc_QPYp6vZAaqVaV&index=35&t=259s'
const parsedUrl = url.parse(adress, true);

console.log(parsedUrl.pathname)
*/

/*
const url = require ('url')

let result = url parse('https://www.youtube.com/watch?v=zQRrXTSkvfw&list=PLOU2w2icQVbOjtApMsc_QPYp6vZAaqVaV&index=35&t=259s')


console.log(result)
*/

//in terminal type 'node URLmodules.js' to see result

// commandline application 
//search in google the links of a certain subject that you search using node
/*
use :


- npm google-scraper packet (google-it)
- http server
- fs module (to save result)
- yargs package (commandline argument parser)
*/


const googleIt = require('google-it')
const fs = require('fs') //file system
const http = require('http')

let argv = require('yargs/yargs')(process.argv.slice(2))
.usage('{0 --dork "intitle: Index of mp3" --output [filename.json] --live 1 --port[num]') //optional
.demandOption([dork]) // required
.argv

console.log(argv.dork) // undifined as default
console.log(argv.output) // filename.json

googleIT ({'query' : 'intecbrussel'}).then(result=>{
    console.log(results)
    if(argv.output !=undifined){
    fs.writeFile(argv.output,JSON.stringify(results));
    }

   if(argv.live !=undefined){ //create a server with all info
       http.createServer((req,res)=>{
         res.write(JSON.stringify(results))
         res.end();
       }).listen(Number(argv.port,()=>{
           console.log(`visit link for result: http://localhost:${argv.port}/`)
       })
   }
})

//https://en.wikipedia.org/wiki/Port_(computer_networking)#:~:text=A%20port%20number%20is%20a,ranging%20from%200%20to%2065535.

//https://fsymbols.com/text-art/twitter/#all_cats

// httpserver with html
