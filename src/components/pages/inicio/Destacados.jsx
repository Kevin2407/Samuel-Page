import React, { useState, useEffect } from "react";
import './inicio.css';
import foto from './foto.jpg';

function Destacados(props) {

  const [imagenDestacada, setImagenDestacada] = useState(props.destacado.imagen);

  function decodeHtmlEntities(str) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value.replace(/(<([^>]+)>)/ig, "").replace(/&nbsp;/g, "");
}

  const contenidoSinEtiquetas = props.destacado.contenido ? decodeHtmlEntities(props.destacado.contenido) : "";

  
  const img = new Image();
  img.src = props.destacado.imagen ? props.destacado.imagen : foto;
  img.onload = () => {
    setImagenDestacada(img.src);
  }

  return (
    <div className="div-destacada">
      <img src={imagenDestacada} alt="imagen de nota destacada" />
      <article className="texto-destacado">
        <small>{props.destacado.fecha}</small>
        <h4>{props.destacado.titulo}</h4>
        <div>
          <p>{contenidoSinEtiquetas}</p>
        </div>
      </article>
    </div>
  );
}

export default Destacados;