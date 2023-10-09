import { React, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navegacion } from "./components/common/header/Navegacion";
import Inicio from "./components/pages/inicio/Inicio";
import Administracion from "./components/pages/articulos/Administrar";
import Agregar from "./components/pages/articulos/agregarArticulo/Agregar";
import Editar from "./components/pages/articulos/editarArticulo/Editar";
import PagArticulo from "./components/pages/articulos/PagArticulo";
import Busqueda from './components/pages/articulos/Busqueda'



function App() {

  const [articulos,setArticulos] = useState([]);
  const [artDestacado,setArtDestacado] = useState({});
  const URL = process.env.REACT_APP_API_URL;

  useEffect(
    ()=> {
      consultarAPI();
    },[]);

    const consultarAPI = async ()=>{
      try{
        const consulta =  await fetch(URL);
        const respuesta = await consulta.json();
        console.log(respuesta)
        setArticulos(respuesta);
        setArtDestacado(respuesta.find(art=> art.destacada));
        return respuesta;
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
            <Administracion consultarAPI={consultarAPI} articulos={articulos}></Administracion>
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
