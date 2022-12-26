import React from "react";
import './seccion1.css';
import foto from './foto.jpg';

function Destacados() {
  return (
    <section className="div-seccion1">
      <div className="div-destacada">
        <img src={foto} alt="imagen de nota destacada" />
        <article className="texto-destacado">
          
        </article>
      </div>
      <div className="newsletter">
      </div>
    </section>
  );
}

export default Destacados;