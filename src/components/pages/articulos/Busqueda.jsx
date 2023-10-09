import React, { Component, useState } from 'react'
import ListaArticulosEdit from './lista/ListaArticulosEdit';
import { useParams } from 'react-router-dom';


export default function Busqueda(props) {

  const { filtro } = useParams();

  
    const buscado = props.articulos.filter( art => art.titulo.toLowerCase().includes(filtro.toLowerCase()) || art.contenido.toLowerCase().includes(filtro.toLowerCase()));

    return (
      <>
        <div>
          <h2>Articulos con la palabra: {filtro}</h2>
        </div>
        <div>
          <ListaArticulosEdit consultarAPI={props.consultarAPI} articulos={buscado} edit={false}></ListaArticulosEdit>
        </div>
      </>
    )

}
