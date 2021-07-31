import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.png";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Container>
  <img src={logo} alt="" />
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="me-auto justify-content-end">
    
    <Nav.Link to="/home">Home</Nav.Link>
      <Nav.Link to="/review">Review</Nav.Link>
      <Nav.Link to="/inventory">Inventory</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    
  </Navbar.Collapse>
  <button onClick={() => setLoggedInUser({})}>Sign out</button>
  </Container>
</Navbar>
 
{/* <Navbar className='nav-line'  bg="dark" >
    <Container>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Container>
  </Navbar> */}

    </div>
  );
};

export default Header;
