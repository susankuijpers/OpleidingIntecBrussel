//[]{}

//npm install express body-parser, node-fetch, ejs , cors
//cors = important npm look at what it is : https://expressjs.com/en/resources/middleware/cors.html
//zoek op wat ejs is aub : https://ejs.co AND/OR https://www.youtube.com/watch?v=JGl9WjEvjOc

const express = requie('express');
const app = express();
const bodyParser = require('body-parser');
const{HomeController} =require('./controller/HomeController')


app.use(bodyParser({
    extended:false
}))

app.set('view engine', 'ejs',)

app.get('/', HomeController)

app.listen(3009,()=>{
    console.log('server is running')
})