import React from 'react'
import { Link } from 'react-router-dom';

const Producto = ({producto}) => { //Le pasamos el prop producto con destructuring

    //Extraemos los valores del producto con array destructuring
    const { nombre, precio, id } = producto;
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
                >Eliminar</button>
            </th>
        </tr>
     );
}
 
export default Producto;