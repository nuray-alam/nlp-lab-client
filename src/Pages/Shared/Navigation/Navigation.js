import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { a } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <Navbar className="navbar" variant="dark" bg='primary' expand="sm" sticky="top">
            <Container className="">
                <a href="/home" className="fw-bold fs-2 me-5 text-decoration-none text-dark d-flex"><small className=" fs-4"> <span className='text-white'>NLP</span><span className='text-white'> Lab</span></small></a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto fs-6">
                        <a href='/home' className="text-decoration-none header-link me-3 text-white fw-bold">Home</a>
                        {user.email && <a href="/dashboard" activeStyle={{ color: "#91BFFF" }} className="text-decoration-none header-link me-3">Dashboard</a>}
                    </Nav>

                    {/* conditional rendering user name */}
                    {
                        user.email && <span className="user-name me-2 fs-6" style={{ color: "white" }}>{user.displayName ? user.displayName : ''}</span>
                    }
                    {/* conditional rendering for login and logout button */}
                    {user.email ? <button onClick={logOut} className="btn btn-outline-light text-dark text-decoration-none header-link me-3">Log Out</button>
                        :
                        <a href="/login" className="btn btn-outline-light text-dark text-decoration-none header-link me-3">Login</a>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;