import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function Navegacion() {
  return (
    <>
      <Navbar className='navbar-dark' bg="dark" expand="lg">
      <Container >
        <Navbar.Brand bg="light" className="text-light" href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle className='text-white' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="text-light" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#home">Home</Nav.Link>
            <Nav.Link className="text-light" href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}