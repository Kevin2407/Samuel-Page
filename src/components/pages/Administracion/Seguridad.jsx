import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './administracion.css';


const Seguridad = ({setEnSesion}) => {
    const [ emailIngresado, setEmailIngresado] = useState('');
    const [ contraIngresada, setContraIngresada] = useState('');


    const ingresar=(e)=>{
        e.preventDefault();
        if(emailIngresado === 'samuelvonarx793@gmail.com' && contraIngresada === 'cristinacomepolenta'){
            setEnSesion(true);
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Email o contraseña invalidos',
                icon: 'error',
                confirmButtonText: 'Entiendo',
                confirmButtonColor: '#006dc0'
            })
        }
    }

  return (
    <>
        <div class="container my-5 pb-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center mb-4">Iniciar Sesión</h5>
                            <form onSubmit={ingresar}>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>setEmailIngresado(e.target.value)}></input>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="password" onChange={(e)=>setContraIngresada(e.target.value)}></input>
                                </div>
                                <button type="submit" class="btn w-100" style={{ backgroundColor: '#006dc0', color: 'white' }}>Entrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Seguridad