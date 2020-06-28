import React, { Fragment, useEffect } from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';

const Productos = () => {

    //Utilizamos useDispatch y crea una funcion que se utiliza en la funcion 1. 
    const dispatch = useDispatch();

    //Manda a hacer la consulta a la base de datos cuando este componente carga con useEffect
    useEffect(() => {
        //1. Aqui llamamos una funcion de redux que manda a llamar al action obtenerProductosAction
        //Para poder Consultar a la api y para obtener los productos en 2.
        const cargarProductos = () => dispatch(obtenerProductosAction() );
        //2.Consultamos a la api para obtener los productos
        cargarProductos();
    }) //Le pasamos un dispatch como referencia

    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>

            <table className="table table-striped table-hover">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>

                <tbody>

                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Productos;