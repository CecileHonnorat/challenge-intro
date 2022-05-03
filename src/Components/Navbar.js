import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';

export default function Navigation() {

    return (
        <Navbar expand="xl">
        <Container fluid>
        <Navbar.Brand><img src='../images/logo.svg' alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto my-2 my-lg-0" style={{margin:15}}>
        <NavDropdown title="Features" id="basic-nav-dropdown"style={{margin:15}}>
          <NavDropdown.Item ><img src='../images/icon-todo.svg' style={{marginRight:15}} alt="logo-todo"/>Todo List</NavDropdown.Item>
          <NavDropdown.Item ><img src='../images/icon-calendar.svg' style={{marginRight:15}} alt="logo-calendar"/>Calendar</NavDropdown.Item>
          <NavDropdown.Item ><img src='../images/icon-reminders.svg' style={{marginRight:15}}alt="logo-reminders"/>Reminders</NavDropdown.Item>
          <NavDropdown.Item ><img src='../images/icon-planning.svg' style={{marginRight:15}} alt="logo-planning"/>Planning</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Company" id="basic-nav-dropdown"style={{margin:15}}>
          <NavDropdown.Item >History</NavDropdown.Item>
          <NavDropdown.Item >Our Team</NavDropdown.Item>
          <NavDropdown.Item >Blog</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item style={{margin:15}}><Nav.Link>Careers</Nav.Link></Nav.Item>
        <Nav.Item style={{margin:15}}><Nav.Link>About</Nav.Link></Nav.Item>
        </Nav>
        <Nav className="d-flex">
        <Nav.Item style={{margin:15}}><Nav.Link>Login</Nav.Link></Nav.Item>
        <Button variant="outline-dark" style={{margin:15, borderRadius:15}}>Register</Button>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}