import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import ListaArticulosEdit from './lista/ListaArticulosEdit'
import './articulos.css';

export default class Administrar extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <div className='' >
                    <Button className='miBoton admin-btn'>Añadir Articulo</Button>
                </div>
                <ListaArticulosEdit articulos={this.props.articulos}></ListaArticulosEdit>
            </div>
        )
    }
}
