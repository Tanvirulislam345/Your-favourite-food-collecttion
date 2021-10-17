import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MiddleNav.css';

const MiddleNav = () => {
    return (
        <>
            <Navbar id="today" className="py-3">
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} className="middleLink" to="/breakFast">Breakfast</Nav.Link>
                        <Nav.Link as={Link} className="middleLink" to="/lunch" >Lunch</Nav.Link>
                        <Nav.Link as={Link} className="middleLink" to="/dinner" >Dinner</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default MiddleNav;