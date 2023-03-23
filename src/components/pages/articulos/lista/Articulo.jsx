import React, { Component } from 'react';
import foto from './default-seccion2.png';
import './articulo.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import parse from 'html-react-parser';




class Articulo extends Component {

    constructor(props) {
        super(props);
    }




    render() {

        
        const borrar = (id) => {
            
            const URL = process.env.REACT_APP_API_URL + '/' + id;

            Swal.fire({
                title: 'Estas seguro que quieres eliminar el producto?',
                text: "No puedes recuperar el producto una vez eliminado",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {

                    try {
                        const response = await fetch(URL, {
                            method: 'DELETE',
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });

                        if (response.status === 200) {
                            // mostrar cartel de prod. eliminado
                            Swal.fire(
                                'Borrado!',
                                'El producto ha sido borrado.',
                                'success'
                            )

                            // actualizar los datos
                            this.props.consultarAPI();


                        } else {

                            Swal.fire(
                                'Se produjo un error!',
                                'Intentelo nuevamente',
                                'error'
                            )


                        }

                    } catch (error) {
                        console.log(error);

                        Swal.fire(
                            'Se produjo un error!',
                            'Intentelo en unos minutos',
                            'error'
                        )
                    }
                }
            })


        }


        return (
            <React.Fragment>

                <article className='article-nota'>
                    <div className='div-img'>
                        {/* <img src={this.props.articulo.imagen} alt="imagen de nota" /> */}
                        <img src={foto} alt="imagen de nota" />
                    </div>
                    <section className='section-nota'>
                        <Link to={`/articulo/${this.props.articulo._id}`} className='lead'>{this.props.articulo.titulo}</Link>
                        <div>
                            <p>{this.props.articulo.contenido}</p>
                        </div>
                    </section>
                </article>
                <div className='text-center' style={{ display: "grid", alignContent: "center" }}>
                    <Link to={`/administracion/editar/${this.props.articulo._id}`} className='btn btn-warning text-light mb-1'>Editar</Link>
                    <button className='btn btn-danger mt-1' onClick={()=> borrar(this.props.articulo._id)}>Borrar</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Articulo;