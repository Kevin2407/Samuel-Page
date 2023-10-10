import React, { Component } from 'react';
import './inicio.css';

class NewsLetter extends Component {
    render() {
        return (
            <div className="newsletter">
                <article className="p-4 text-center">
                    <p className="lead"><strong>Suscribete ahora al NewsLetter de Samuel Von Arx</strong></p>
                    <p>Tené en tu email todos los contenidos de Samuel y empieza a odiar cada dia mas a Perón</p>
                    <input type="text" placeholder='Email' />
                    <button className="btn">Suscribirse</button>
                </article>
            </div>
        );
    }
}

export default NewsLetter;