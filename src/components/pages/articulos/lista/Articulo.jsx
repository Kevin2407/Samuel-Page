import React, { Component } from 'react';
import foto from './default-seccion2.png';
import './articulo.css';
import {Link} from 'react-router-dom';


class Articulo extends Component {

    constructor(props) {
        super(props);
    }


    
    
    render() {

        const editar = (e)=>{
            e.preventDefault();

            const {titulo, contenido, imagen, fecha} = this.props.Articulo;

            const datos = {
                titulo,
                contenido,
                imagen,
                fecha
            }

            try {
                const parametros = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(datos)
                }
            } catch (error) {
                console.log(error);
            }
        }


        return (
            <React.Fragment>

            <article className='article-nota'>
                <div className='div-img'>
                    {/* <img src={this.props.articulo.imagen} alt="imagen de nota" /> */}
                    <img src={foto} alt="imagen de nota" />
                </div>
                <section className='section-nota'>
                    <a href="#" className='lead'>{this.props.articulo.titulo}</a>
                    <div>
                        <p>{this.props.articulo.contenido}</p>
                    </div>
                </section>
            </article>
            <div className='text-center' style={{display:"grid",alignContent: "center"}}>
                <Link to={`/administracion/editar/${this.props.articulo._id}`} className='btn btn-warning text-light mb-1'>Editar</Link>
                <button className='btn btn-danger mt-1'>Borrar</button>
            </div>
            </React.Fragment>
        );
    }
}

export default Articulo;