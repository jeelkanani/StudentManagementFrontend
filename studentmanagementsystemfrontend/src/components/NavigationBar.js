import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
        <a className="nav-link " href="#">Add Student</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">View Students</a>
      </li>
     
    </ul>
   
  </div>
</nav>
    </div>
  )
}