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
import Events from "./Events.js";
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/explore" element={<ArtForm/>} />
        <Route path="/events" element={<Events/>} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode> 

);


reportWebVitals();