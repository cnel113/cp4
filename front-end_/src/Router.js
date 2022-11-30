import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './About.js'
import Header from "./Navbar.js";


ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Header/>
      <Routes>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);