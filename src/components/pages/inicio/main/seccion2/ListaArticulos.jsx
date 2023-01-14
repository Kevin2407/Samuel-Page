import React, { Component } from 'react';
import Articulo from './Articulo';

class ListaArticulos extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <ul style={{listStyle:'none',margin:'0',marginTop:'30px',marginBottom:'30px',padding:'0'}}>
                    {
                        this.props.articulos.map((item) => <li><Articulo articulo={item} ></Articulo></li> )
                    }
                </ul>
            </div>
        );
    }
}

export default ListaArticulos;