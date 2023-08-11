import React, { Component, Fragment } from 'react';
import Destacados from './Destacados';
import NewsLetter from "./NewsLetter";
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
          <Destacados destacado={this.props.destacado} consultarAPI={this.props.consultarAPI}></Destacados>
          <NewsLetter></NewsLetter>
        </div>
        <ListaArt consultarAPI={this.props.consultarAPI} articulos={this.props.articulos} edit={false}></ListaArt>
      </Fragment>
    )
  }
}
