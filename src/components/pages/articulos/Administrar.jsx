import React, { Component } from 'react'
import ListaArticulosEdit from './lista/ListaArticulosEdit'
import './articulos.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class Administrar extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className='contenedor'>
                <div className='d-flex justify-content-end' >
                    <Link to="/administracion/agregar" className='btn miBoton admin-btn'><FontAwesomeIcon icon={faPlus} style={{color: "#f5f5f5",}} /></Link>
                </div>
                <ListaArticulosEdit consultarAPI={this.props.consultarAPI} articulos={this.props.articulos} edit={true}></ListaArticulosEdit>
            </div>
        )
    }
}
