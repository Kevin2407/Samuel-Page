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