import React from "react";
import { Navegacion } from "./1.header/Navegacion";
import Seccion1 from "./2.main/Seccion1";
import './style.css';

function App() {
  return (
    <>
    <heather>
      <Navegacion></Navegacion>
    </heather>
    <body className="container centrar">
      <Seccion1></Seccion1>
    </body>
    </>
  );
}

export default App;
