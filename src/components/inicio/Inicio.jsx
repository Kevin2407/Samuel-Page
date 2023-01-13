import React, { Component, Fragment } from 'react';
import Seccion1 from './main/seccion1/Seccion1'
import Seccion2 from './main/seccion2/ListaArticulos'

export default class Inicio extends Component {
  render() {
    return (
      <Fragment>
        <Seccion1></Seccion1>
        <Seccion2></Seccion2>
      </Fragment>
    )
  }
}
