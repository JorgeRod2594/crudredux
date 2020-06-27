import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
            <Navbar.Brand href="/">DoDoTask</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/">Ver productos</NavDropdown.Item>
                    <NavDropdown.Item href="/productos/nuevo">Agregar producto &#43;</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default Header;