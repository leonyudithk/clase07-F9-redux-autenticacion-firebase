import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsincrono } from '../Redux/actions/actionLogin';


const NavBars = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLogout =()=>{
        dispatch(logoutAsincrono())
        navigate("/login")
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><a className="navbar-brand" href="/"><img
                        src="https://res.cloudinary.com/duzf4vfki/image/upload/v1630692325/Clases/geek_wctguy.png"
                        width="80" alt="" /></a></Navbar.Brand>
                    <Nav className="me-auto">
                    <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                        <Link to="/add"> <Nav.Link >Agregar</Nav.Link></Link>
                        <Link to="/listar"> <Nav.Link >Listar</Nav.Link></Link>
                  

                      
                        <Nav.Link  onClick={handleLogout}>Logout</Nav.Link>
                      
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBars;