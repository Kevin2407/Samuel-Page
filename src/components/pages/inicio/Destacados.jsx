import React, {useState, useEffect} from "react";
import './seccion1.css';
import foto from './foto.jpg';

function Destacados(props) {

  const [imagenDestacada,setImagenDestacada] = useState(foto);
  const contenidoSinEtiquetas = props.destacado.contenido ? props.destacado.contenido.replace(/(<([^>]+)>)/ig, "").replace(/&nbsp;/g, "") : "";

  useEffect(()=>{
    let img = new Image();
    img.src = props.destacado.imagen;
    img.onload = () => {
        setImagenDestacada(img.src);
    }
  },[])

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