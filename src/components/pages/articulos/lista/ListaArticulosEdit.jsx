import React, { Component } from 'react';
import Articulo from './Articulo';

class ListaArticulosEdit extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <ul style={{ listStyle: 'none', margin: '0', marginTop: '30px', marginBottom: '30px', padding: '0' }}>
                    {
                        this.props.articulos.map((item,key) => {
                            return (
                                <div className='border' key={key}>
                                    <li className='d-flex'>
                                        <Articulo consultarAPI={this.props.consultarAPI} articulo={item} edit={this.props.edit}></Articulo>
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ListaArticulosEdit;