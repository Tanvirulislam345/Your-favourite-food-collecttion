import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <img src={logo} alt="" width="15%" className="pe-3" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/breakFast">Today's Dishes</Nav.Link>
                        <Nav.Link as={Link} to="/ourFood">Our Food Collection</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/form">Sign Up</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;