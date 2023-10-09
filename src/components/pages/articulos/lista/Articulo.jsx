import React, { Component } from 'react';
import dft from './default-seccion2.png';
import './articulo.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as iconoSolid from '@fortawesome/free-solid-svg-icons';
import * as iconoRegular from '@fortawesome/free-regular-svg-icons';




class Articulo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            b: false,
            loading: false
        }
    }

    componentDidMount() {

        let img = new Image();
        img.src = this.props.articulo.imagen;
        img.onload = () => {
            this.setState({ b: true });

        }
        img.onerror = () => {
            this.setState({ b: false });
        }


    }


    render() {


        const imgComponent = () => {

            if (this.state.b) {
                return (
                    <div className='div-img'><img src={this.props.articulo.imagen} alt='imagen de nota' /></div>
                )
            }

        }

        const componenteBotones = (admin) => {

            if (admin) {
                return (
                    <div className='text-center' style={{ display: "grid", alignContent: "center", width: '10%', justifyContent: 'center' }}>
                        <Link to={`/administracion/editar/${this.props.articulo._id}`} style={{ backgroundColor: "#006dc0" }} className='btn text-light mb-1 botones-articulo'><FontAwesomeIcon icon={iconoSolid.faPenToSquare} style={{ color: "#f5f5f5", }} /></Link>
                        <button style={{ backgroundColor: "#006dc0" }} className='btn mt-1 botones-articulo' onClick={() => borrar(this.props.articulo._id)}><FontAwesomeIcon icon={iconoSolid.faTrash} style={{ color: "#f5f5f5", }} /></button>
                        <button style={{ backgroundColor: "#006dc0" }} className='btn mt-1 botones-articulo' onClick={() => destacar(this.props.articulo._id)}><FontAwesomeIcon icon={this.props.articulo.destacada ? iconoSolid.faStar : iconoRegular.faStar} style={{ color: "#f5f5f5", }} /></button>
                    </div>
                )
            }
        }

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

                            Swal.fire({
                                title: 'Borrado!',
                                text: 'El producto ha sido borrado',
                                icon: 'success',
                                confirmButtonText: 'Cerrar',
                                confirmButtonColor: '#006dc0'
                            });

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

        const destacar = async (id) => {

            const ventanaCargando = Swal.mixin({
                title: 'Cargando...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            })

            ventanaCargando.fire();


            const URL = process.env.REACT_APP_API_URL;

            // crear objeto a enviar
            let datos = {}

            if (this.props.articulo.destacada) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Articulo ya destacado',
                    text: 'El articulo ya esta destacado, si desea quitarlo del titular del inicio, destaque otro articulo',
                    didOpen: () => {
                        Swal.hideLoading();
                    },
                })
                return;
            } else {
                datos = {
                    titulo: this.props.articulo.titulo,
                    imagen: this.props.articulo.imagen,
                    contenido: this.props.articulo.contenido,
                    destacada: true
                }
            }




            // enviar el objeto a la api, operacion POST

            await fetch(URL + '/' + id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datos)
            })
                .then(response => {
                    if (response.status === 200) {
                        this.props.consultarAPI()
                        .then((arreglo)=>{
                            let datosArticulos = {};
                            arreglo.map(async articulo => {

                                if(articulo._id != id && articulo.destacada){

                                    datosArticulos = {
                                        titulo: articulo.titulo,
                                        imagen: articulo.imagen,
                                        contenido: articulo.contenido,
                                        destacada: false
                                    }
                                    await fetch(URL + '/' + articulo._id, {
                                        method: 'PUT',
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(datosArticulos)
                                    })
                                    
                                    
                                    await this.props.consultarAPI();
                                    ventanaCargando.close();

                                }

                            })
                        })
                        
                    }
                })
                .catch(error => {
                    console.log(error);
                    Swal.fire({
                        icon: 'warning',
                        title: 'Error',
                        text: 'Ha ocurrido un error con el servidor, intente mas tarde'
                    })
                });

        }


        return (

            <article className='article-nota'>
                <div className='div-img-nota'>
                    {
                        imgComponent()
                    }
                    <section className='section-nota'>
                        <Link to={`/articulo/${this.props.articulo._id}`} className='lead'>{this.props.articulo.titulo}</Link>
                        <div>
                            <p>{this.props.articulo.contenido.replace(/(<([^>]+)>)/ig, "").replace(/&nbsp;/g, "")}</p>
                        </div>
                    </section>

                </div>

                {
                    componenteBotones(this.props.edit)
                }


            </article>
        );
    }
}

export default Articulo;