// import React, {Fragment, useEffect, useState } from 'react';
// import {useParams} from 'react-router-dom';
// import parse from 'html-react-parser';

// export default function PagArticulo(props) {


//   const [articuloSelect,setArticuloSelect] = useState({});

//   const id = useParams().id;

//   const llamar = async()=>{
//   // consultar producto seleccionado
//   try {
//       const respuesta = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
//       console.log(respuesta)
//       if (respuesta.status === 200) {
//         const resultado = await respuesta.json();
//         setArticuloSelect(resultado);
//         console.log(resultado)
//         console.log(articuloSelect)

//         }
//       } catch (e) {
//         console.log(e)
//       }

//       props.consultarAPI();

//   console.log(articuloSelect)
//   console.log(articuloSelect.contenido)
//   }

// useEffect(()=>{

//   llamar();
// },[]);







//     return (
//       <Fragment>
//         <div>
//           <div>{articuloSelect.titulo}</div>
//           <div>fecha</div>
//           {/* <div>{parse(articuloSelect.contenido)}</div> */}
//         </div>
//       </Fragment>
//     )
// }




import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import Spinner from 'react-bootstrap/Spinner';





export default function PagArticulo(props) {
  const [articuloSelect, setArticuloSelect] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // consultar producto seleccionado
    fetch(`${process.env.REACT_APP_API_URL}/${id}`)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        setArticuloSelect(resultado);
      })
      .catch((e) => {
        console.log(e);
      });
  },[]);





            if (articuloSelect.titulo && articuloSelect.fecha && articuloSelect.contenido) {
              const contenido = parse(articuloSelect.contenido);
              return (
                <div>

                  <div>{articuloSelect.titulo}</div>
                  <div>fecha</div>
                  <div>{contenido}</div>

                </div>


              )
            } else {

              return (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              );
            }



}