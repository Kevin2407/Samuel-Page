import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import ListaArticulosEdit from './lista/ListaArticulosEdit'
import './articulos.css';
import { Link } from 'react-router-dom';

export default class Administrar extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <div className='' >
                    <Link to="/administracion/agregar" className='btn miBoton admin-btn'>Añadir Articulo</Link>
                </div>
                <ListaArticulosEdit articulos={this.props.articulos}></ListaArticulosEdit>
            </div>
        )
    }
}
