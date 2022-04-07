import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBars = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><a className="navbar-brand" href="/"><img
                        src="https://res.cloudinary.com/duzf4vfki/image/upload/v1630692325/Clases/geek_wctguy.png"
                        width="80" alt="" /></a></Navbar.Brand>
                    <Nav className="me-auto">
                    <Link to="/home"><Nav.Link href="#home">Home</Nav.Link></Link>
                        
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBars;