import React from "react";
import { Navegacion } from "./header/Navegacion";
import Seccion1 from "./main/seccion1/Seccion1";
import ListaArticulos from "./main/seccion2/ListaArticulos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div  className="container centrar">
    <heather>
      <Navegacion></Navegacion>
    </heather>
    <body>
      <Seccion1></Seccion1>
      <ListaArticulos></ListaArticulos>
    </body>
    </div>
  );
}

export default App;
