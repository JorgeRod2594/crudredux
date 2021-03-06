import React, { Fragment, useEffect } from 'react'
import Producto from './Producto';

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
        // eslint-disable-next-line
    }, []);

    //Obtenemos el State 
    const productos = useSelector(state => state.productos.productos);
    //console.log(productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);

    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>

            { error ? <p className="font-weiht-bold alert alert-danger text-center 
              mt-4">Hubo un error</p> : null }
            { cargando ? <p className="text-center">Cargando...</p>: null }

            <table className="table table-striped table-hover">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    { productos.length === 0 ?  <tr><th><p className="text-center">No hay productos</p></th></tr> : (
                        productos.map(producto => ( //Mapeamos los elementos de productos
                            <Producto //Llamamos al componente producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Productos;