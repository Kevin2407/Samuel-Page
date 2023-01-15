import React, { Component } from 'react';
import foto from './default-seccion2.png';
import './articulo.css';

class Articulo extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <article className='article-nota'>
                <div className='div-img'>
                    <img src={foto} alt="imagen de nota" />
                </div>
                <section className='section-nota'>
                    <a href="#" className='lead'>{this.props.articulo.titulo}</a>
                    <div>
                        <p>{this.props.articulo.contenido}</p>
                    </div>
                </section>
            </article>
        );
    }
}

export default Articulo;