import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import NavigationBar from './components/NavigationBar'

export default class App extends Component {
  render() {

    const myLocalDB = [
      {
        id: 1,
        title: 'Lorem Ipsum1',
        body: 'Ipsum Lorem.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum'
      },
      {
        id: 2,
        title: 'Lorem Ipsum2',
        body: 'Ipsum Lorem.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum'
      },
      {
        id: 3,
        title: 'Lorem Ipsum3',
        body: 'Ipsum Lorem.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum'
      }
    ]

    return (
      <Router>
        <div>
          <NavigationBar />
        </div>

        <Route exact path='/' component={Home} />
        <Route path='/Blog' render={() => <Blog data={myLocalDB} />} />
        
      </Router>
    )
  }
}

/*
install react app
install react router
*/

