import { React, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navegacion } from "./components/common/header/Nav/Navegacion";
import Inicio from "./components/pages/inicio/Inicio";
import Administracion from "./components/pages/Administracion/Administracion";
import Agregar from "./components/pages/agregarArticulo/Agregar";
import Editar from "./components/pages/editarArticulo/Editar";
import PagArticulo from "./components/pages/paginaArticulos/PagArticulo";
import Busqueda from './components/pages/busqueda/Busqueda'
import Seguridad from "./components/pages/Administracion/Seguridad";



function App() {

  const [articulos,setArticulos] = useState([]);
  const [artDestacado,setArtDestacado] = useState({});
  const [enSesion,setEnSesion] = useState(false);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(
    ()=> {
      consultarAPI();
    },[]);

    const consultarAPI = async ()=>{
      try{
        const consulta =  await fetch(URL);
        const respuesta = await consulta.json();
        setArticulos(respuesta);
        setArtDestacado(respuesta.find(art=> art.destacada));
        return respuesta;

            //  CODIGO PARA FORZAR ERROR
              // let response = await fetch('https://api.noexiste123.com/data');
              // if (!response.ok) {
              //     throw new Error(`HTTP error! Status: ${response.status}`);
              // }
              // let data = await response.json();
              // return data; 
              
            
      }catch(error){
        console.log(error);
        setArticulos(null);
        return error;
      }
    }

    // funcion para ingresar un texto con etiquetas html de formato, y que salga limpio sin etiquetas
    function decodeHtmlEntities(str) {
      var textArea = document.createElement('textarea');
      textArea.innerHTML = str;
      return textArea.value.replace(/(<([^>]+)>)/ig, "").replace(/&nbsp;/g, "");
    }





  return (
    <div className="container centrar" style={{wordWrap: "break-word"}}>
      <Router>
        <Navegacion></Navegacion>
        <Switch>
          <Route exact path='/'>
            <Inicio consultarAPI={consultarAPI} articulos={articulos} destacado={artDestacado} sinEtiquetas={decodeHtmlEntities} ></Inicio>
          </Route>
          <Route exact path='/administracion'>
            {/* este apartado revisa si la variable de control de sesion del state esta en true, y si lo esta
            permite ingresar a administracion */}
            {
              enSesion ?
                <Administracion consultarAPI={consultarAPI} articulos={articulos} sinEtiquetas={decodeHtmlEntities}></Administracion>
              :
                <Seguridad setEnSesion={setEnSesion}></Seguridad>
            }
          </Route>
          <Route exact path='/administracion/agregar'>
            <Agregar consultarAPI={consultarAPI} ></Agregar>
          </Route>
          <Route exact path='/administracion/editar/:id'>
            <Editar consultarAPI={consultarAPI}  articulos={articulos}></Editar>
          </Route>
          <Route exact path='/articulo/:id'>
            <PagArticulo consultarAPI={consultarAPI}  articulos={articulos}></PagArticulo>
          </Route>
          <Route exact path='/busqueda/:filtro'>
            <Busqueda consultarAPI={consultarAPI}  articulos={articulos} sinEtiquetas={decodeHtmlEntities}></Busqueda>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App;
