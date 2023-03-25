import React from "react";
import './seccion1.css';
import foto from './foto.jpg';
import NewsLetter from "./NewsLetter";

function Destacados() {
  return (
      <div className="div-destacada">
        <img src={foto} alt="imagen de nota destacada" />
        <article className="texto-destacado">
          <small>Lunes 7 de Noviembre de 2022</small>
          <h4>Titulo</h4>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt ab in magni enim, quisquam reiciendis, eveniet pariatur aut quia corporis quae, possimus voluptatem molestiae nemo perferendis a ea magnam.</p>  
          </div>
        </article>
      </div>
  );
}

export default Destacados;