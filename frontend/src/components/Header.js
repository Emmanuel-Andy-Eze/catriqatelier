import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Navbar, Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar className='navbar' expand="lg" variant='dark'>
                <Container className='navbar-items'>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Catriq Atelier</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className="ms-5 nav-links">
                            <Nav.Link href="#">Back Pack</Nav.Link>
                            <Nav.Link href="#">Tote Bag</Nav.Link>
                            <Nav.Link href="#">Laptop Bag</Nav.Link>
                            <Nav.Link href="#">Note Pads</Nav.Link>
                            <Nav.Link href="#">Souvenirs</Nav.Link>
                            <Nav.Link href="#">Gift Items</Nav.Link>
                        </Nav>
                        <Nav className="nav-action">
                            <LinkContainer to='/cart'>
                                <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
