import React from 'react'; //makes this file work in react!!! use this in every reactpage!
import ReactDOM from 'react-dom'; 
import './index.css'; // imports Css styling
import App from './App'; //imports the app file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
