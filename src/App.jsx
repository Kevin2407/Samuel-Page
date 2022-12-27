import React from "react";
import Seccion1 from "./main/seccion1/Seccion1";
import ListaArticulos from "./main/seccion2/ListaArticulos";
import './style.css';

function App() {
  return (
    <div className="container centrar">
    <body>
      <Seccion1></Seccion1>
      <ListaArticulos></ListaArticulos>
    </body>
    </div>
  );
}

export default App;
