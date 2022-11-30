import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from "./About.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import './App.css';
import ArtForm from "./ArtForm.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/explore" element={<ArtForm/>} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode> 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  
  /*  <React.StrictMode>
    <App/>
  </React.StrictMode>*/ //Original method