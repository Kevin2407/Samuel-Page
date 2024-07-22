import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import Spinner from 'react-bootstrap/Spinner';
import './pagArticulo.css';



function formatearFecha(fechaString) {
  // Crear un objeto Date con la fecha proporcionada
  const fecha = new Date(fechaString);
  
  // Opciones de formato
  const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  // Convertir fecha a formato legible en español
  let fechaEsp = fecha.toLocaleDateString('es-ES', opciones);

  // pasar la primera letra a mayuscula
  fechaEsp = fechaEsp.charAt(0).toUpperCase() + fechaEsp.slice(1).toLowerCase();

  // devuelvo el texto completamnete formateado
  return fechaEsp;
}


export default function PagArticulo(props) {
  const [articuloSelect, setArticuloSelect] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // consultar producto seleccionado
    fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
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
      console.log(articuloSelect.fecha)

      return (
            <div className='contenedor-pagArticulo'>
                <div className='mt-4'><h1 className='tamanio-titulo'>{articuloSelect.titulo}</h1></div>
                <div className='my-3'><p style={{fontSize: 'small'}}>{formatearFecha(articuloSelect.fecha)}</p></div>
                <div>{contenido}</div>
            </div>

              )
  } else {

      return (
            <div className='d-flex justify-content-center w-100 mt-5'>
                <Spinner animation="border" role="status" >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
      );
  }



}