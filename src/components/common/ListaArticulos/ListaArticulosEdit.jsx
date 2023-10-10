import React, { Component } from 'react';
import Articulo from './Articulo';

class ListaArticulosEdit extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        if(this.props.articulos){
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
        }else{
            return (
                <div className='contenedor text-center'>
                    <h1 className='m-5'>ERROR</h1>
                    <h4>Ha habido un error al cargar los articulos :(</h4>
                    <h5>Intentelo nuevamente</h5>
                </div>
            )
        }


        // return (
        //     <div>
        //         <ul style={{ listStyle: 'none', margin: '0', marginTop: '30px', marginBottom: '30px', padding: '0' }}>
        //             {
        //                 this.props.articulos.map((item,key) => {
        //                     return (
        //                         <div className='border' key={key}>
        //                             <li className='d-flex'>
        //                                 <Articulo consultarAPI={this.props.consultarAPI} articulo={item} edit={this.props.edit}></Articulo>
        //                             </li>
        //                         </div>
        //                     )
        //                 })
        //             }
        //         </ul>
        //     </div>
        // );


    }
}

export default ListaArticulosEdit;