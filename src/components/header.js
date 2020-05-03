import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div >
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand className="mr-auto">Portfolio</Navbar.Brand>
            <Nav>
              <Nav.Link href="#summary">Summary</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
            </Nav>
        </Navbar>      
    </div>
  );
}

export default Header;
