import React from 'react';
import ListaArticulosEdit from '../../common/ListaArticulos/ListaArticulosEdit';
import './administracion.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Administracion = (props) => {
    return (
        <div className='contenedor'>
            {
                props.articulos && (
                    <div className='d-flex justify-content-end'>
                        <Link to="/administracion/agregar" className='btn miBoton admin-btn'>
                            <FontAwesomeIcon icon={faPlus} style={{ color: "#f5f5f5" }} />
                        </Link>
                    </div>
                )
            }
            <ListaArticulosEdit consultarAPI={props.consultarAPI} articulos={props.articulos} edit={true} />
        </div>
    );
}

export default Administracion;
