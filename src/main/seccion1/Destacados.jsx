import React from "react";
import './seccion1.css';
import foto from './foto.jpg';

function Destacados() {
  return (
    <section className="div-seccion1">
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
      <div className="newsletter">
        <article className="p-4 text-center">
          <p className="lead"><strong>Suscribete ahora al NewsLetter de Samuel Von Arx</strong></p>
          <p>Tené en tu email todos los contenidos de Samuel y empieza a odiar cada dia mas a Perón</p>
          <p className="">Email</p>
          <input type="text" />
          <button className="btn">Suscribirse</button>
        </article>
      </div>
    </section>
  );
}

export default Destacados;