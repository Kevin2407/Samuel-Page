import { React, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navegacion } from "./components/common/header/Navegacion";
import Inicio from "./components/pages/inicio/Inicio";
import Administracion from "./components/pages/articulos/Administracion";
import Agregar from "./components/pages/articulos/agregarArticulo/Agregar";
import Editar from "./components/pages/articulos/editarArticulo/Editar";
import PagArticulo from "./components/pages/articulos/PagArticulo";
import Busqueda from './components/pages/articulos/Busqueda'
import Seguridad from "./components/pages/articulos/Seguridad";



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

              /*  FORZAR ERROR
              let response = await fetch('https://api.noexiste123.com/data');
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              let data = await response.json();
              return data; 
              */
            
      }catch(error){
        console.log(error);
        return error;
      }
    }





  return (
    <div className="container centrar" style={{wordWrap: "break-word"}}>
      <Router>
        <Navegacion></Navegacion>
        <Switch>
          <Route exact path='/'>
            <Inicio consultarAPI={consultarAPI} articulos={articulos} destacado={artDestacado}></Inicio>
          </Route>
          <Route exact path='/administracion'>
            {/* este apartado revisa si la variable de control de sesion del state esta en true, y si lo esta
            permite ingresar a administracion */}
            {
              ()=>{
                if(enSesion){
                  return (<Administracion consultarAPI={consultarAPI} articulos={articulos}></Administracion>);
                }else{
                  return (<Seguridad setEnSesion={setEnSesion}></Seguridad>);
                }
              }
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
            <Busqueda consultarAPI={consultarAPI}  articulos={articulos}></Busqueda>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App;
