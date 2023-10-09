import React, { useState } from 'react';
import './heather.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link, useHistory } from 'react-router-dom';




export function Navegacion() {
  const [texto, setTexto] = useState('');
  const history = useHistory();



  const vaciarInput = () => {
    const input = document.getElementById("buscador");
    input.value = '';
  }

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      buscar();
    }
  }

  const buscar = () => {
    if (texto !== '') {
      history.push('/busqueda/' + texto);
      vaciarInput();
    }
  }

  return (
    <>
      <div className='container-fluid contenedor-nav mt-5'>
        <section className='titulo-principal'>
          <Link to={'/'}>
            <h1>
              SAMUEL VON ARX
            </h1>
          </Link>
        </section>
        <section className='buscador'>
          <div class="input-group mb-3">
            <input type="text" id='buscador' style={{ width: '40%' }} placeholder="Buscar..." onChange={(e) => { setTexto(e.target.value) }} onKeyDown={(e) => pressEnter(e)} />
            <Link onClick={() => buscar()} className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" className='buscar'>
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
      <div>
        <Navbar expand='sm'>
          <Navbar.Toggle className='boton-hamburguesa' aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
              <NavLink exact={true} to='/' className='nav-link' >Artículos</NavLink>
              <NavLink exact={true} to='/administracion' className='nav-link' >Administrar</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}