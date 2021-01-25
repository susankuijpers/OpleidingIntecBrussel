const express = require('express'); // we import a package

const app =  express(); // we execute it

// MIDDLEWARES
// is a function that executes when routes hit

app.use(auth);


// you can create routes now!
// ROUTES
app.get('/', (req,res)=>{
  res.send('We are on homepage')
})

app.get('/posts', (req,res)=>{
    res.send('We are on posts page')
  })

/*
app.get // get a post
app.post // gives a message or post
app.delete // delete a post
app.patch // updates a post
*/

//how to start listening to the server
app.listen(3000);
