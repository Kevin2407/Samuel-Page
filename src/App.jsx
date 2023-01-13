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
import Inicio from "./components/inicio/Inicio";

function App() {
  return (
    <div className="container centrar">
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path='/'>
          <Inicio></Inicio>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
