import React from 'react';
import Navbar from  'react-bootstrap/Navbar';
import { BrowserRouter as Router, Link }  from 'react-router-dom';
import { Nav } from 'react-bootstrap';


function NavBar() {
  return (
    <>
        <Navbar bg="secondary" variant="dark">
            <Navbar.Brand href="/">DanVino</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>             
            <Router >
                    <Nav><Link to="/" className="nav-link">About</Link></Nav>
                    <Nav><Link to="/projects" className="nav-link">Projects</Link></Nav>
                </Router>                 
        </Navbar>
    </>
  );
}
export default NavBar;