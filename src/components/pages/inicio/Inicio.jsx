import React, { Component, Fragment } from 'react';
import Seccion1 from './main/seccion1/Seccion1'
import Seccion2 from './main/seccion2/ListaArticulos'

export default class Inicio extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <Fragment>
        <Seccion1 articulos={this.props.articulos}></Seccion1>
        <Seccion2 articulos={this.props.articulos}></Seccion2>
      </Fragment>
    )
  }
}
