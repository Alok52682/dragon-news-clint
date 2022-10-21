import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import LeftSideber from '../LeftSideber/LeftSideber';

function Header() {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.log(error))
    }
    return (
        <Navbar collapseOnSelect className='sticky-top' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
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
                        {
                            user?.uid ?
                                <><NavDropdown className='me-4' title={user?.displayName} id="collasible-nav-dropdown">
                                    <Link className='d-block btn btn-light' onClick={handleLogOut}> Log Out</Link>
                                    <Link className='d-block btn btn-light' to='/profile'>
                                        Profile
                                    </Link>
                                    <Link className='d-block btn btn-light'>
                                        Something
                                    </Link>

                                </NavDropdown>

                                </>
                                :
                                <>
                                    <Link className='me-2 btn btn-light' to='/login'>LogIn</Link>
                                    <Link className='me-2 btn btn-light' to='/register'>Register</Link>
                                </>

                        }
                        <Link to="/profile">
                            {
                                user?.photoURL &&
                                <Image roundedCircle style={{ height: '40px' }} src={user.photoURL} />
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideber />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;