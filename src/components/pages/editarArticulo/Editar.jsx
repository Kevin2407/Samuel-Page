import React, { useRef, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';


function Editar(props) {



    const URL = process.env.REACT_APP_API_URL;
    const [titulo, setTitulo] = useState("");
    const [imagen, setImagen] = useState("");
    const [contenido, setContenido] = useState("");
    const [destacada, setDestacada] = useState(false);
    const [articuloEditar, setArticuloEditar] = useState({});
    const [fecha, setFecha] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // obtengo el parametro de la URL
    const id = props.match.params.id;

    async function llamarArticulo() {

        // consultar producto seleccionado
        try {
            const respuesta = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
                headers: {
                    'ngrok-skip-browser-warning': 'true'
                }
            })
            if (respuesta.status === 200) {
                const resultado = await respuesta.json();
                setArticuloEditar(resultado)
                // setTitulo(articuloEditar.titulo);
                // setContenido(articuloEditar.contenido);
                // setDestacada(articuloEditar.destacada);
                // setImagen(articuloEditar.imagen);
            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        llamarArticulo();
    }, []);
    useEffect(() => {
        console.log(articuloEditar)
        setTitulo(articuloEditar.titulo);
        setContenido(articuloEditar.contenido);
        setDestacada(articuloEditar.destacada);
        setImagen(articuloEditar.imagen);
        setFecha(articuloEditar.fecha);
    }, [articuloEditar]);


    const editorRef = useRef(null);
    const log = async (e) => {
        e.preventDefault();

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

        if (editorRef.current) {

            if (articuloEditar.titulo.trim() === "" || articuloEditar.contenido.trim() === '') {
                // mostrar cartel de error
                console.log('formulario erroneo');
                setLoading(false);

                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El articulo debe tener un titulo y un contenido',
                    didOpen: () => {
                        Swal.hideLoading();
                    }
                });
                setError(true);
            } else {


                setError(false);
                // crear objeto a enviar
                const datos = {
                    titulo: titulo,
                    imagen: imagen,
                    contenido: contenido,
                    destacada: destacada,
                    fecha: fecha

                }
                console.log(datos)



                // enviar el objeto a la api, operacion POST
                try {
                    const parametros = {
                        method: 'PUT',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(datos)
                    }

                    // ejecutar la solicitud
                    const respuesta = await fetch(URL + '/' + id, parametros);
                    if (respuesta.status === 200) {
                        // recargar los articulos
                        props.consultarAPI();
                        // redireccionar a administracion
                        props.history.push('/administracion');
                        // cartel de exito
                        await Swal.fire({
                            title: 'Perfecto!',
                            text: 'El artículo ha sido editado',
                            // icon: 'success',
                            confirmButtonText: 'Cerrar',
                            confirmButtonColor: '#006dc0'
                        });

                        //   limpiar formulario
                        setTitulo('');
                        setImagen('');
                        setContenido('');



                    }



                } catch (er) {
                    console.log(er);
                    console.log(props.consultarAPI());
                    Swal.fire({
                        icon: 'warning',
                        title: 'Error',
                        text: 'Ha ocurrido un error con el servidor, intente mas tarde',
                        didOpen: () => {
                            Swal.hideLoading();
                        }
                    });
                }
            }
        }
    };

    return (
        <div>
            <Form className='mt-5'>
                <Form.Group className='mb-2'>
                    <Form.Label>Titulo del articulo</Form.Label>
                    <Form.Control type="text" placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)} defaultValue={articuloEditar.titulo} />
                </Form.Group>
                <Form.Group className='mb-5'>
                    <Form.Label>Imagen del articulo</Form.Label>
                    <Form.Control type="text" placeholder="URL de la imagen" onChange={(e) => setImagen(e.target.value)} defaultValue={articuloEditar.imagen}/>
                </Form.Group>
                <Form.Group>
                    <Editor
                        onChange={() => setContenido(editorRef.current.getContent())}
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={articuloEditar.contenido}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </Form.Group>
                <Button onClick={log} className="miBoton agregar-btn" type="submit">Agregar</Button>
            </Form>
        </div>
    )
}



export default withRouter(Editar);