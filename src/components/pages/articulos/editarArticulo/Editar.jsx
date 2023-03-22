import React, { useRef, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';


function Editar(props) {



    const URL = process.env.REACT_APP_API_URL;
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [articuloEditar, setArticuloEditar] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // obtengo el parametro de la URL
    const id = props.match.params.id;

    useEffect(() => {
        async function llamarArticulo() {

            // consultar producto seleccionado
            try {
                const respuesta = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
                if (respuesta.status === 200) {
                    const resultado = await respuesta.json();
                    setArticuloEditar(resultado);
                    console.log(articuloEditar)
                    setTitulo(articuloEditar.titulo);
                    setContenido(articuloEditar.contenido);
                }
            } catch (e) {
                console.log(e)
            }
        }
        llamarArticulo();
    }, []);



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
            console.log(editorRef.current.getContent());
            console.log(contenido);


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
                    contenido: contenido
                }


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
                    if (await respuesta.status === 200) {
                        // recargar los articulos
                        props.consultarAPI();
                        // redireccionar a administracion
                        props.history.push('/administracion');
                        // cartel de exito
                        await Swal.fire(
                            'Perfecto!',
                            'El articulo a sido editado',
                            'Cerrar'
                        )

                        //   limpiar formulario
                        setTitulo('');
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
            <Form>
                <h1 className='mb-4'>Agregar nuevo Articulo</h1>
                <Form.Group className='mb-5'>
                    <Form.Label>Titulo del articulo</Form.Label>
                    <Form.Control type="text" placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)} defaultValue={articuloEditar.titulo} />
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