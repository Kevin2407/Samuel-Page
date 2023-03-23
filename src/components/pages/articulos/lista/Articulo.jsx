import React, { Component } from 'react';
import foto from './default-seccion2.png';
import './articulo.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'




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
                    <div className='div-img-nota'>
                        <div className='div-img'>
                            {/* <img src={this.props.articulo.imagen} alt="imagen de nota" /> */}
                            <img src={foto} alt="imagen de nota" />
                            {/* {width: 100%} */}
                        </div>
                        <section className='section-nota'>
                            <Link to={`/articulo/${this.props.articulo._id}`} className='lead'>{this.props.articulo.titulo}</Link>
                            <div>
                                <p>{this.props.articulo.contenido.replace(/(<([^>]+)>)/ig, "").replace(/&nbsp;/g, "")}</p>
                            </div>
                        </section>

                    </div>
                    {/* <div> */}
                        <div className='text-center' style={{ display: "grid", alignContent: "center", width: '10%', justifyContent: 'flex-end' }}>
                            <Link to={`/administracion/editar/${this.props.articulo._id}`} style={{ backgroundColor: "#006dc0"}} className='btn text-light mb-1 botones-articulo'><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#f5f5f5", }} /></Link>
                            <button style={{ backgroundColor: "#006dc0"}} className='btn mt-1 botones-articulo' onClick={() => borrar(this.props.articulo._id)}><FontAwesomeIcon icon={faTrash} style={{ color: "#f5f5f5", }} /></button>
                        </div>

                    {/* </div> */}
                </article>
            </React.Fragment>
        );
    }
}

export default Articulo;