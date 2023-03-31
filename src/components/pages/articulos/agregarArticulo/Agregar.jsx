import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';



function Agregar(props) {

    const URL = process.env.REACT_APP_API_URL;
    const [titulo, setTitulo] = useState("");
    const [imagen, setImagen] = useState("");
    const [contenido, setContenido] = useState('<h1><strong>Aca podes escribir el articulo y editarlo.</strong></h1>');
    const [destacada, setDestacada] = useState(false);
    const [error, setError] = useState(false);
    const fecha = new Date();
    const [fechaHoy, setFechaHoy] = useState(`${fecha.getDay()} ${fecha.getDate()} de ${fecha.getMonth()} de ${fecha.getFullYear}`);
    const [loading, setLoading] = useState(false);



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


            if (titulo.trim() === "" || contenido.trim() === '') {
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


                // enviar el objeto a la api, operacion POST
                try {
                    const parametros = {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(datos)
                    }

                    // ejecutar la solicitud
                    const respuesta = await fetch(URL, parametros);
                    if (await respuesta.status === 201) {
                        // recargar los articulos
                        props.consultarAPI();
                        // redireccionar a administracion
                        props.history.push('/administracion');
                        // cartel de exito
                        await Swal.fire(
                            'Perfecto!',
                            'El articulo a sido publicado',
                            'Cerrar'
                        )

                        //   limpiar formulario
                        setTitulo('');
                        setImagen('');
                        setContenido('');
                        setFechaHoy(`${fecha.getDay()} ${fecha.getDate()} de ${fecha.getMonth()} de ${fecha.getFullYear}`);



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
                <Form.Group className='mb-2'>
                    <Form.Label>Titulo del articulo</Form.Label>
                    <Form.Control type="text" placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-5'>
                    <Form.Label>Imagen del articulo</Form.Label>
                    <Form.Control type="text" placeholder="URL de la imagen" onChange={(e) => setImagen(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Editor
                        onChange={() => setContenido(editorRef.current.getContent())}
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue='<h3><strong>Aca podes escribir el articulo y editarlo.</strong></h3>'
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



export default withRouter(Agregar);