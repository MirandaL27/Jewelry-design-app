import React from "react";
import { Container, Nav, Navbar as RNavbar } from 'react-bootstrap';
import Auth from '../../utils/auth';

function Navbar(props) {
    return (
        <RNavbar className = "bg-red" expand='lg'>
        <Container fluid>
          <RNavbar.Brand className = "medium gold-font" href="/">
            Jewelry Design
          </RNavbar.Brand>
          <RNavbar.Toggle aria-controls='navbar' />
          <RNavbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link href="/" className = "small gold-font">
                Home
              </Nav.Link>
              <Nav.Link href="/" className = "small gold-font">
                Help
              </Nav.Link>
              <Nav.Link href="/" className = "small gold-font">
                Components
              </Nav.Link>
              <Nav.Link href="/" className = "small gold-font">
                Images
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link href='/' className = "small gold-font">
                    Profile
                  </Nav.Link>
                  <Nav.Link href='/' className = "small gold-font">
                    Make Collage
                  </Nav.Link>
                  <Nav.Link href='/' className = "small gold-font">
                    Make Design
                  </Nav.Link>
                  <Nav.Link href='/' className = "small gold-font">
                    Settings
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout} className = "small gold-font">Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link href='login' className = "small gold-font">Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </RNavbar.Collapse>
        </Container>
      </RNavbar>
    )
}

export default Navbar;