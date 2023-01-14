import React, { Component } from 'react';
import Articulo from './Articulo';

class ListaArticulosEdit extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <ul style={{listStyle:'none',margin:'0',marginTop:'30px',marginBottom:'30px',padding:'0'}}>
                    {
                        this.props.articulos.map((item) => {
                            return (
                                <div className='border'>
                                    <li className='d-flex'>
                                        <Articulo articulo={item} ></Articulo>
                                        <div className='text-center' style={{display:"grid",alignContent: "center"}}>
                                            <button className='btn btn-warning text-light mb-1'>Editar</button>
                                            <button className='btn btn-danger mt-1'>Borrar</button>
                                        </div>
                                    </li>
                                </div>
                            )
                    } )
                    }
                </ul>
            </div>
        );
    }
}

export default ListaArticulosEdit;