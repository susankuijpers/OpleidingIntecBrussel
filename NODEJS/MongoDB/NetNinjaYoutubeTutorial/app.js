const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//express app
const app = express();


//connects to mongoDB database collection
const dbURI = 'mongodb+srv://StudioSuus:20Drum10@clustertutorial.mg9tt.mongodb.net/MongoDB-Tutorial?retryWrites=true&w=majority'


mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
.then((result) => app.listen(3000))//listen for requests
.catch((err) => console.log(err));//view


//egister view engine
app.set('view engine', 'ejs');


//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

//mongoose and mongo sandbox routers
app.get('/add-blog', (req, res) => {
const blog = new Blog({
    title: 'new blog',
    snippet: 'about my new blog',
    body: 'more about my blog'
});

blog.save()
.then((result)=> {
    res.send(result)
})
.catch((err)=> {
    console.log(err);
})
})

//routes