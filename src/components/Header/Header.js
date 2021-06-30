import React from "react";
import "./Header.css";
import logo from "../../images/Logo.png";
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" defaultActiveKey="/home">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Form className="d-flex justify-content-end">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
    <Nav className="me-auto justify-content-end">
    <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/reviews">Reviews</Nav.Link>
      <Nav.Link href="/inventory">Inventory</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;
