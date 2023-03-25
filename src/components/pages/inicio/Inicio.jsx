import React, { Component, Fragment } from 'react';
import Seccion1 from './main/seccion1/Seccion1';
import Seccion2 from './main/seccion2/ListaArticulos';
import Destacados from './Destacados';
import NewsLetter from "./NewsLetter";
import foto from './foto.jpg';
import './seccion1.css';
import ListaArt from '../articulos/lista/ListaArticulosEdit';





export default class Inicio extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Fragment>
        <div className="div-seccion1">
          <Destacados></Destacados>
          <NewsLetter></NewsLetter>
        </div>
        <ListaArt consultarAPI={this.props.consultarAPI} articulos={this.props.articulos} editar={false}></ListaArt>
      </Fragment>
    )
  }
}
