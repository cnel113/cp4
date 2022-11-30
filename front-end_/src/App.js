import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtForm from "./ArtForm.js";
import Footer from "./Footer.js";
import About from "./About.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.js";

function App() {
  return (
    <div>
      <ArtForm />
      <h1> This is homepage </h1>
    </div>
  );
}

export default App;

/*
  <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact component={ArtForm} />
          <Route path="/about" component={About}/>
        </Routes>
      </Router>
      <Footer/>*/


/*<Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact component={ArtForm} />
          <Route path="/about" component={About}/>
        </Routes>
      </Router>*/

