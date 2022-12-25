import React from "react";
import { Navegacion } from "./1.header/Navegacion";
import Destacados from "./2.main/Destacados";
import './style.css';

function App() {
  return (
    <>
    <heather>
      <Navegacion></Navegacion>
    </heather>
    <body className="container centrar">
      <Destacados></Destacados>
    </body>
    </>
  );
}

export default App;
