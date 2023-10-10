import React, { Component, useState } from 'react'
import ListaArticulosEdit from '../../common/ListaArticulos/ListaArticulosEdit';
import { useParams } from 'react-router-dom';


export default function Busqueda(props) {

  const { filtro } = useParams();

  
    // este filtro quita convierte lo que se va a buscar en texto sin mayusculas ni tildes, para flexibilizar el filtro
    const buscado = props.articulos.filter( art => art.titulo.toLowerCase().includes(filtro.toLowerCase()) || props.sinEtiquetas(art.contenido).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(filtro.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")));

    return (
      <>
        <div>
          <h2>Articulos con la palabra: {filtro}</h2>
        </div>
        <div>
          <ListaArticulosEdit consultarAPI={props.consultarAPI} articulos={buscado} edit={false} sinEtiquetas={props.sinEtiquetas}></ListaArticulosEdit>
        </div>
      </>
    )

}
