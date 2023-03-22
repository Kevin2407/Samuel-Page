import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';



function Agregar(props) {

    const URL = process.env.REACT_APP_API_URL;
    const [titulo,setTitulo] = useState("");
    const [contenido,setContenido] = useState("");
    const [error,setError] = useState(false);
    const fecha = new Date();
    const [fechaHoy,setFechaHoy] = useState(`${fecha.getDay()} ${fecha.getDate()} de ${fecha.getMonth()} de ${fecha.getFullYear}`);

    

    const editorRef = useRef(null);
    const log = async (e) => {
        e.preventDefault();
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            console.log(contenido);


            if (titulo.trim() === "" || contenido.trim() === '' ) {
                // mostrar cartel de error
                console.log('formulario erroneo');
                setError(true);
            } else {

                setError(false);
                // crear objeto a enviar
                const datos = {
                    titulo: titulo,
                    contenido: contenido,
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
                    Swal.showLoading();
                    if (await respuesta.status === 201) {
                        Swal.fire(
                            'Perfecto!',
                            'El articulo a sido publicado',
                            'Cerrar'
                        )

                        //   limpiar formulario
                        setTitulo('');
                        setContenido('');
                        setFechaHoy(`${fecha.getDay()} ${fecha.getDate()} de ${fecha.getMonth()} de ${fecha.getFullYear}`);
                        // recargar los articulos
                        props.consultarAPI();
                        // redireccionar a administracion
                        props.history.push('/administracion');
                        


                    }



                } catch (error) {
                    console.log(error);
                    console.log(props.consultarAPI());
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
                    <Form.Control type="text" placeholder="Titulo" onChange={(e) => setTitulo(e.target.value) } />
                </Form.Group>
                <Form.Group>
                    <Editor
                        onChange={ ()=> setContenido(editorRef.current.getContent()) }
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue='<h1><strong>Aca podes escribir el articulo y editarlo.</strong></h1>'
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