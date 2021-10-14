import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <>
        <Navbar fixed="top">
            <Container>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Link to="/login">
                    <Button className="rounded me-3" variant="primary">Login</Button>
                    </Link>
                    <Link to="/signup">
                    <Button className="rounded" variant="danger">Sign Up</Button>
                    </Link>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;