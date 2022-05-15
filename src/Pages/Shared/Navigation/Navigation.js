import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <Navbar className="navbar" variant="dark" bg='primary' expand="lg" sticky="top">
            <Container className="">
                <Link to="/home" className="fw-bold fs-2 me-5 text-decoration-none text-dark d-flex"><small className=" fs-4"> <span className='text-white'>NLP</span><span className='text-white'> Lab</span></small></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto fs-6">
                        <NavLink as={Link} to="/home" activeStyle={{ color: "#91BFFF" }} className="text-decoration-none header-link me-3 text-white fw-bold">Home</NavLink>
                        {/* {user.email && <NavLink as={Link} to="/dashboard" activeStyle={{ color: "#91BFFF" }} className="text-decoration-none header-link me-3">Dashboard</NavLink>} */}
                    </Nav>
                    
                    {/* conditional rendering user name */}
                    {
                        user.email && <span className="user-name me-2 fs-6" style={{ color: "white" }}>{user.displayName ? user.displayName : ''}</span>
                    }
                    {/* conditional rendering for login and logout button */}
                    {user.email ? <button onClick={logOut} className="btn btn-outline-primary text-dark">Log Out</button>
                        :
                        <NavLink as={Link} to="/login" className="btn btn-outline-light text-dark text-decoration-none header-link me-3">Login</NavLink>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;