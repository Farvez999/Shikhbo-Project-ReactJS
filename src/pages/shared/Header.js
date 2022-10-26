import React, { useContext, useState } from 'react';
import { Button, Form, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Leftsite from './Leftsite';
import { FaUserAlt } from "react-icons/fa";
import logo from '../../image/logo.png'

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const [toggle, setToggle] = useState(true)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <Link style={{ textDecoration: 'none' }} to='/'>Shikhbo</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link style={{ textDecoration: 'none' }} to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link style={{ textDecoration: 'none' }} to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link style={{ textDecoration: 'none' }} to='/blog'>Blog</Link></Nav.Link>

                    </Nav>

                    <Nav>
                        <Form>
                            <Form.Check
                                className='p-2'
                                type="switch"
                                id="custom-switch"
                                onClick={() => { setToggle(!toggle) }}
                                label={toggle ? "Dark" : "Light"}
                            />
                        </Form>
                    </Nav>

                    <Nav>
                        <Nav.Link>
                            {user?.uid ?
                                <p onClick={handleLogout}>Logout</p>
                                :
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to='/login'>Login</Link>

                            }
                        </Nav.Link>
                        {/* <Nav.Link>
                            {user?.displayName}
                        </Nav.Link> */}
                        <Nav.Link>
                            {/* {<Tooltip id={user?.photoURL}>Tooltip!</Tooltip>} */}
                            {user?.photoURL ?
                                <>
                                    <OverlayTrigger placement="bottom" overlay={
                                        <Tooltip placement="right">{user?.displayName}</Tooltip>}>
                                        <span className="d-inline-block">
                                            <Image
                                                style={{ height: '30px' }}
                                                roundedCircle
                                                src={user?.photoURL}
                                            >
                                            </Image>
                                        </span>
                                    </OverlayTrigger>

                                </>
                                : <></>
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