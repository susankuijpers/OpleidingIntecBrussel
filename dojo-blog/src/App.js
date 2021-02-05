//ROUTE COMPONENT

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';

import './index.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* switch will change and only show one route at a time */

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/Create">
              <Create />
            </Route>

            <Route path="/Blogs/:id">
              <BlogDetails />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;






/*
STUFF I TESTED
from ninja tutorial in teh main component
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ 10 }</p>
        <p>{ "hello ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>
        <a href={ link }>googleSite</a>
      }
*/