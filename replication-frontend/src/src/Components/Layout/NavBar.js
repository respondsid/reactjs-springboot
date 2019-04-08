import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'


export default function NavBar() {
    return (
        <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Replication</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                    <NavLink className="nav-link" to ="/replications-navigation">Replications</NavLink>
                    <NavLink className="nav-link" to ="/replications-navigation">Configuration</NavLink>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
