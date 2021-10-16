import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import logo from '../../../images/logo2.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useFirebase();
    return (
    <>
        <Navbar className="nav-container" fixed="top">
            <Container>
                <Link to="/">
                <img style={{height: '50px'}} src={logo} alt="" />
                </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                 {user.email ?  
                    <Button onClick={logOut} className="rounded me-3" variant="danger">Log Out</Button>
                    : 
                    <Link to="/login">
                    <Button className="rounded me-3" variant="primary">Login</Button>
                    </Link>}
                    
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