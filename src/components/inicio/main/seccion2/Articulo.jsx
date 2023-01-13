import React, { Component } from 'react';
import foto from './default-seccion2.png';
import './seccion2.css';

class Articulo extends Component {
    render() {
        return (
            <article className='article-nota'>
                <div className='div-img'>
                    <img src={foto} alt="imagen de nota" />
                </div>
                <section className='section-nota'>
                    <a href="#" className='lead'>gkdflg jdfklg ñd fslk jglñf</a>
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, perspiciatis veritatis doloremque maiores odit similique eveniet maxime, vitae, architecto alias repellendus asperiores! Atque dignissimos est ducimus eaque quisquam ullam quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, facilis quasi! Qui illum laudantium ipsa, blanditiis facere, earum magni ullam repellat mollitia eligendi nihil praesentium illo nostrum sit vitae tempora. 
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla unde illum voluptas quos eligendi rerum ab. Explicabo, quis maxime ducimus voluptatem sapiente consequatur eveniet nemo saepe voluptatum, qui tenetur reiciendis.
                        </p>
                    </div>
                </section>
            </article>
        );
    }
}

export default Articulo;