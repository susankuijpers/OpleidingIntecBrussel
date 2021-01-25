const express = require('express')
const app = express();
const {homepageController,loginController, registerController, singleUserController} = require('./controller/index')
const bodyParser = require('body-parser')
let apiToken = '123456'
// npm install nodemon -g
//macOS an linuc ; sudo nmp install nodemon -g

app.use(bodyParser({
    extended:true
}))

function loginCheck(req,res,next){
    let isLogged = false;
    if(!isLogged){
         console.log('middelware is running and isLogged=true')
         next()
        }//true
}

function captureData(req,res,next){
    console.log(req.body)
    next()
}

function CheckToken(req,res,next){
    let token = req.headers.token
    console.log(token)
    if(token!=apiToken){
        res.status(500).send('invalid token')
    }
    next()
}

// app.use(loginCheck) //application level middelware

app.get('/',homepageController);
app.get('/login',loginCheck,loginController); //router level middleware
app.post('/register',captureData, registerController);
app.get('/api',CheckToken, apiController)
//advanced routing:
app.all('/user',UserController)
app.get('/user/:id',singleUserController)
app.get(/post-/, postController)

// https://stackabuse.com/?page=2&limit=3

app.listen(3002,()=>{
    console.log('serveris running')
})