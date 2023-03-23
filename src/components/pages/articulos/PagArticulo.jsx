import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import Spinner from 'react-bootstrap/Spinner';
import './articulos.css';





export default function PagArticulo(props) {
  const [articuloSelect, setArticuloSelect] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // consultar producto seleccionado
    fetch(`${process.env.REACT_APP_API_URL}/${id}`)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        setArticuloSelect(resultado);
      })
      .catch((e) => {
        console.log(e);
      });
  },[]);





            if (articuloSelect.titulo && articuloSelect.fecha && articuloSelect.contenido) {
              const contenido = parse(articuloSelect.contenido);
              console.log(contenido)
              return (
                <Fragment>

                  <div className='mt-4'><h1 className='tamanio-titulo'>{articuloSelect.titulo}</h1></div>
                  <div className='my-3'><p style={{fontSize: 'small'}}>{articuloSelect.fecha}</p></div>
                  <div><p>{contenido}</p></div>

                </Fragment>


              )
            } else {

              return (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              );
            }



}