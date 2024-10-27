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
            <NavLink 
            style={({isActive})=> ({color:isActive&&"red"})}
            className="nav-link" to="/">Home</NavLink>
            <NavLink style={({isActive})=> ({fontSize:isActive&&"50px"})} to="/teacher" className="nav-link" >Teacher</NavLink>
            <NavLink style={({isActive})=> ({border:isActive&&"1px solid blue"})} to="/courses" className="nav-link" >Courses</NavLink>
            <NavLink style={({isActive})=> ({backgroundColor:isActive&&"salmon"})} to="/contact" className="nav-link" >Contact</NavLink>
            <NavLink to="/paths" className="nav-link" >Paths</NavLink>
            <Nav.Link href="https://github.com/tafamus41">GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
