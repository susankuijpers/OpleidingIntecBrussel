import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home'

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </nav>
      </div>

      <Route exact path="/" component={Home}/>
      </Router>
    )
  }
}

/*
install react app
install react router
*/

