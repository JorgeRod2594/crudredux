import React from 'react'
import { Link } from 'react-router-dom';

//REdux, para eliminar un producto
import { useDispatch } from 'react-redux';
import { borraProductoAction } from '../actions/productoActions';

const Producto = ({producto}) => { //Le pasamos el prop producto con destructuring

    //Extraemos los valores del producto con array destructuring
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();

    //Confirmar si desea eliminarlo
    const confirmarEliminarProducto = id => {
        
        //Preguntar al usuario

        //Pasarlo al action
        dispatch(borraProductoAction(id) );
    }

    return ( 
        <tr>
            <th>{id}</th>
            <th>{nombre}</th>
            <th><span className="font-weight-bold">$ {precio}</span></th>
            <th>
                <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">Editar</Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id) }
                >Eliminar</button>
            </th>
        </tr>
     );
}
 
export default Producto;