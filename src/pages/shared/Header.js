import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Leftsite from './Leftsite';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link style={{ textDecoration: 'none' }} to='/'>Shikhbo</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link style={{ textDecoration: 'none' }} to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link
                                style={{ textDecoration: 'none' }}
                                to='/login'
                            >{user?.uid ? 'Logout' : 'Login'}</Link>
                        </Nav.Link>
                        {/* <Nav.Link href="/login">Login</Nav.Link> */}
                        <Nav.Link href="#memes">
                            {user?.displayName}
                        </Nav.Link>
                        <Nav.Link href="#memes">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>

                                </Image>
                                : <FaUserAlt></FaUserAlt>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <Leftsite></Leftsite>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;