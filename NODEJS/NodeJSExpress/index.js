//REWATCH THIS https://www.youtube.com/watch?v=lY6icfhap2o

/*
// install nodemon (in terminal): sudo npm i nodemon -g

what we did today was actually setting up a server on the 3002 port.like we normaly do with the 'open live server' part from visual studio code.but now we did it manually.

methods to use:
GETting information from the server
POSTing information to the server

*/

/*
install express.js
nmp i express
*/

// INITIALIZING EXPRESS SERVER
// import express
const express = require('express')
// call the express function
const app = express();
//needs a port to run it

/*
To start automatic refreshing your server in the terminal you can install nodemon (npm i nodemon)
then you go to package.json and at script you can add ("start": "nodemon index.js")
then you can start it up in the terminam (npm start)
Nodemon will start

Now we created modules to import our controllers from the other file
*/

// Importing modules
const {homeController,apiController}= require('./controller/index')

// setting up the 2 different pages with the 2 modules

app.get('/',homeController)
/* OR
app.get('/', homeController)
*/

app.get('/api',apiController)
/* OR
app.get('/api', apiController)
*/

app.listen(3000,()=>{
    console.log('Server is running..')
})