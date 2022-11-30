import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand href="#home">Art Discovery</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav>
                    <LinkContainer to="/">
                        <Nav.Link>Service</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;



/*import React from "react";
//import { Router, Route, Link } from 'react-router-dom';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/src/App.js">
        Art Discovery
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#"> Departments </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Years </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/src/About.js"> About </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;*/

/*
 <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          
         */
 /*       
import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/src/App.js">
        Art Discovery
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#"> Departments </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Years </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/src/About.js"> About </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
*/

/*
import { Routes, Route, Link } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom";
import {NavBar, Nav, NavItem} from 'react-bootstrap';
import Home from "./App.js";
import About from "./About.js";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar>
            <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavItem eventkey={1} href="/">
                  <Nav.Link as={Link} to="/" >Home</Nav.Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route exact path='/' component={< Home />} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default Navbar;*/

/*import React from 'react';
import { Link } from "react-router-dom";

const Navbar= () =>{
  return (
      <div>
        <li>
          <Link to="/">Art Discovery</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </div>
  );
}
export default Navbar;*/