const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
//mongodb+srv://StudioSuus:<password>@clustertutorial.mg9tt.mongodb.net/<dbname>?retryWrites=true&w=majority

//express app
const app = express();

//connects to mongoDB database collection
const dbURI = 'mongodb+srv://StudioSuus:20Drum10@clustertutorial.mg9tt.mongodb.net/MongoDB-Tutorial?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true});
.then((result) => app.listen(3000))//listen for requests
.catch((err) => console.log(err))view

//egister view engine
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));