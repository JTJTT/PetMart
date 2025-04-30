import "./Header.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default class MyNav extends Component {
  render() {
    return (
      <Navbar bg="warning-subtle" expand="lg" sticky="top" variant="light">
        <Container fluid>
          <Navbar.Brand>
            <img className="navbar-logo spin-logo" src="/images/PetmartLogo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              <Nav.Link href="homePage.html">Home</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="dog.html">Dog</NavDropdown.Item>
                <NavDropdown.Item href="cat.html">Cat</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="iguana.html">Iguana</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="shoppingCart.html">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}