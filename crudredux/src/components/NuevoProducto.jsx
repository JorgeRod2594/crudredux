import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
//useDispatch: Sirve para mandar a ejecutar las acciones que tengamos.
//useSelector: Es la forma que tenemos acceso al State dentro del componente.

//Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {

    //Utilizamos useDispatch y crea una funcion que se utiliza en la funcion 1. 
    const dispatch = useDispatch();
    //1. Aqui llamamos una funcion de redux que manda a llamar al action crearNuevoProductoAction
    //Para poder utilizar la funcion. en la función 2.
    const agregarProducto = () => dispatch (crearNuevoProductoAction() ); //dispatch es una funcion que utiliza otra función.
    // Le pasamos crearNuevoProductoAction para comunicarse con las acciones (productoActions).

    //2. Cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        //Validamos el formulario

        //Revisamos que no exitan errores

        //Crear el nuevo producto añadiendo la función agregarProducto
        agregarProducto()
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
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;