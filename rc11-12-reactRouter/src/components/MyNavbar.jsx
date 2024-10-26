import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink  to="/teacher" className="nav-link" >Teacher</NavLink>
            <NavLink to="/courses" className="nav-link" >Courses</NavLink>
            <NavLink to="/contact" className="nav-link" >Contact</NavLink>
            <NavLink to="/paths" className="nav-link" >Paths</NavLink>
            <Nav.Link href="https://github.com/tafamus41">GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
