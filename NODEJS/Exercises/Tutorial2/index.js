//http request

const express = require('express')
const app = express();
const {GetMethod,PostMethod,UpdateMethod,DeleteMethod} = require('./controller/index')
const bodyParser = require('body-parser')

//get method

app.get('./', GetMethod)

//post method
app.post('./', PostMethod)

// update method
app.update('./', UpdateMethod)

// delete method
app.delete('./', DeleteMethod)

app.listen(3002,()=> console.log('server is running...'))