import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand mx-4 " href="#">Student Management System</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
      <li className="nav-item active">
        <Link className="nav-link " to="/student">Add Student</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/liststudents">View Students</Link>
      </li>
     
    </ul>
   
  </div>
</nav>
    </div>
  )
}