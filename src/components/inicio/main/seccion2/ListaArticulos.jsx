import React, { Component } from 'react';
import Articulo from './Articulo';

class ListaArticulos extends Component {
    render() {
        return (
            <div>
                <ul style={{listStyle:'none',margin:'0',marginTop:'30px',marginBottom:'30px',padding:'0'}}>
                    <li>
                        <Articulo></Articulo>
                    </li>
                    <li>
                        <Articulo></Articulo>
                    </li>
                    <li>
                        <Articulo></Articulo>
                    </li>
                    <li>
                        <Articulo></Articulo>
                    </li>
                    <li>
                        <Articulo></Articulo>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ListaArticulos;