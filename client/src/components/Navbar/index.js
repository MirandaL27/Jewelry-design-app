import React from "react";
import { Container, Nav, Navbar as RNavbar } from 'react-bootstrap';
import Auth from '../../utils/auth';

function Navbar(props) {
    return (
        <RNavbar className = "bg-red" expand='lg'>
        <Container fluid>
          <RNavbar.Brand className = "medium gold-font red-bg-hover transition p-2 rounded" href="/">
            Jewelry Design
          </RNavbar.Brand>
          <RNavbar.Toggle aria-controls='navbar' />
          <RNavbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link href="/" className = "small gold-font red-bg-hover transition p-2 rounded">
                Home
              </Nav.Link>
              <Nav.Link href="/" className = "small gold-font red-bg-hover transition p-2 rounded">
                Help
              </Nav.Link>
              <Nav.Link href="/" className = "small gold-font red-bg-hover transition p-2 rounded">
                Components
              </Nav.Link>
              <Nav.Link href="/" className = "small gold-font red-bg-hover transition p-2 rounded">
                Images
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link href='/' className = "small gold-font red-bg-hover transition p-2 rounded">
                    Profile
                  </Nav.Link>
                  <Nav.Link href='/' className = "small gold-font red-bg-hover transition p-2 rounded">
                    Make Collage
                  </Nav.Link>
                  <Nav.Link href='/' className = "small gold-font red-bg-hover transition p-2 rounded">
                    Make Design
                  </Nav.Link>
                  <Nav.Link href='/' className = "small gold-font red-bg-hover transition p-2 rounded">
                    Settings
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout} className = "small gold-font red-bg-hover transition p-2 rounded">Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link href='login' className = "small gold-font red-bg-hover transition p-2 rounded">Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </RNavbar.Collapse>
        </Container>
      </RNavbar>
    )
}

export default Navbar;