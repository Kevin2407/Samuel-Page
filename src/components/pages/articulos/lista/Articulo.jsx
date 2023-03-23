import React, { Component, useRef, useEffect, useState } from 'react';
import foto from './default-seccion2.png';
import './articulo.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'




const Articulo = (props) => {

    const [loading, setLoading] = useState(false);
    



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

                setLoading(true);
                Swal.fire({
                    title: 'Cargando...',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                }).then(() => {
                    setLoading(false);
                });



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
                        props.consultarAPI();


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
                            <Link to={`/articulo/${props.articulo._id}`} className='lead'>{props.articulo.titulo}</Link>
                            <div>
                                <p>{props.articulo.contenido.replace(/(<([^>]+)>)/ig, "")}</p>
                            </div>
                        </section>

                    </div>
                    <div className='text-center' style={{ display: "grid", alignContent: "center", width: '10%', justifyContent: 'flex-end' }}>
                        <Link to={`/administracion/editar/${props.articulo._id}`} className='btn btn-warning text-light mb-1 botones-articulo'><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#f5f5f5", }} /></Link>
                        <button className='btn btn-danger mt-1 botones-articulo' onClick={() => borrar(props.articulo._id)}><FontAwesomeIcon icon={faTrash} style={{ color: "#f5f5f5", }} /></button>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default Articulo;