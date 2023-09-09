import React from 'react'
import Container from 'react-bootstrap/Container';
import {Nav ,Navbar, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PageNavbar() {
  return (
    <div>
      <>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container> 
            <Nav defaultActiveKey="/" className="me-auto">

              <NavItem href='/'>
              <Nav.Link to="/" as={Link}>Home</Nav.Link>
              </NavItem>

              <NavItem href='/profile'>
              <Nav.Link to="/profile" as={Link}>Profile</Nav.Link>
              </NavItem>

              <NavItem href='/contact'>
              <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  )
}

export default PageNavbar
