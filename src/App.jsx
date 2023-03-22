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



function App() {

  const [articulos,setArticulos] = useState([]);
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
      }catch(error){
        console.log(error);
      }
    }



  return (
    <div className="container centrar">
      <Router>
        <Navegacion></Navegacion>
        <Switch>
          <Route exact path='/'>
            <Inicio articulos={articulos}></Inicio>
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
        </Switch>
      </Router>
    </div>
  )
}


export default App;
