import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
//useDispatch: Sirve para mandar a ejecutar las acciones que tengamos.
//useSelector: Es la forma que tenemos acceso al State dentro del componente.
import {v4 as uuid} from "uuid";

//Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';
import Swal from 'sweetalert2';


const NuevoProducto = ({history}) => { //Accedemos al routing.history para poder redireccionar al usuario al terminar de insertar un producto.

    //State del componente. Como no lo vamos a pasar por diferentes componentes se puede utilizar 
    const [ nombre, guardarNombre ] = useState('');
    const [ precio, guardarPrecio ] = useState(0);

    //Utilizamos useDispatch y crea una funcion que se utiliza en la funcion 1. 
    const dispatch = useDispatch();
    //Acceder al state del store
    const cargando = useSelector(state => state.productos.loading);//Cargando será igual al state
    const error = useSelector(state => state.productos.error);
    //console.log(cargando);//asi podremos ver el state
    //1. Aqui llamamos una funcion de redux que manda a llamar al action crearNuevoProductoAction
    //Para poder utilizar la funcion. en la función 2.
    const agregarProducto = (producto) => dispatch (crearNuevoProductoAction(producto) ); //dispatch es una funcion que utiliza otra función.
    // Le pasamos crearNuevoProductoAction para comunicarse con las acciones (productoActions).

    //2. Cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();
        const id = uuid(); //Creamos un id provicional
        //Validamos el formulario
        if(nombre.trim() === '' || precio <= 0) {
            return; //La validación se hace por medio de redux
        }
        
        //Revisamos que no exitan errores
        
        //Crear el nuevo producto añadiendo la función agregarProducto
        agregarProducto({ //le pasamos el objeto
            id,
            nombre,
            precio
        })

        //Redireccionamos al componente principal
        history.push('/');
    }

    //Mostramos las alertas para cancelar un registro de un producto y redirigirlo
    const cancelarRegistro = () => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'col btn btn-success mt-2 ',
              cancelButton: 'col btn btn-danger mt-2 mr-3'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Estás seguro que quieres salir?',
            text: "¡Los datos que estan en el formulario no se guardarán.!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            reverseButtons: true
          }).then((result) => {
            if (result.value) {
              swalWithBootstrapButtons.fire(
                'Operación cancelada',
                'Será re dirigido a la página principal.',
                'success'
              )
              history.push('/');
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              
            }
          })
    }
    

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-wigth-bold">Agregar nuevo producto.</h2>

                        <form
                            onSubmit={ submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="">Nombre del producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio del producto</label>
                                <input 
                                    type="number"
                                    min="0"
                                    className="form-control"
                                    placeholder="Precio del producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm">
                                        <button
                                            type="submit"
                                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-2"
                                        >
                                            Agregar
                                        </button>
                                    </div>
                                    <div className="col-sm">
                                        <button
                                            type="reset"
                                            className="btn btn-danger font-weight-bold text-uppercase d-block w-100 mt-2"
                                            onClick={() => cancelarRegistro() }
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                        </form>

                        { cargando ? <p>Cargando...</p> : null /*si cargando es true muestra cargando, si no oculta esto*/}
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error en la inserción.</p>: null }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;