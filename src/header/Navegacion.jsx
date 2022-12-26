import React from 'react';
import '../style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



export function Navegacion() {
  return (
    <>
      <div className='container-fluid contenedor-nav mt-5'>
        <section className='titulo-principal'>
          <a href="#">
            <h1>
              SAMUEL VON ARX
            </h1>
          </a>
        </section>
        <section className='buscador'>
          <div>
            <input type="text" Name="buscador" id="" style={{width:'40%'}} placeholder='Buscar...' />
            <Button variant="primary" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </Button>
          </div>
        </section>    
      </div>
      <div>
        <Navbar expand='sm'>
          <Navbar.Toggle className='boton-hamburguesa' aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
              <Nav.Link href="#action2" className='fs-4'>Artículos</Nav.Link>
              <Nav.Link href="#action2" className='fs-4'>Libros</Nav.Link>
              <Nav.Link href="#action2" className='fs-4'>Consultoría</Nav.Link>
              <Nav.Link href="#action2" className='fs-4'>Preguntame</Nav.Link>
              <Nav.Link href="#action2" className='fs-4'>Quíen soy</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}