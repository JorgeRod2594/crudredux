import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {editarProductoAction } from '../actions/productoActions';
import { useHistory} from 'react-router-dom';

const EditarProducto = () => {

    const history = useHistory();
    const dispatch = useDispatch();//Para que mande a llamar el action

    //Nuevo state de producto
    const [producto, guardarProducto] = useState({
        nombre:'',
        precio: ''
    })

    //Extraemos del state el producto a editar
    const productoedit = useSelector(state => state.productos.productoeditar);
    //if(!producto) return null;
    //console.log(productoedit)
    //Llenamos el state automaticamente con useState
    useEffect(() => {
        guardarProducto(productoedit);
    },[productoedit]);
    //Leer los datos del formulario
    const onChangeFormulario = e => {
        guardarProducto({
            ...producto, //le pasamos una copia del producto para que no la elimine
            [e.target.name] : e.target.value
        })
    }
    //Extraemos los valores del producto
    const { nombre, precio } = productoedit;

    const submitEditarProducto = e => {
        e.preventDefault();

        dispatch(editarProductoAction(producto) );//Toma el producto actualizado
        //Redireccionamos al inicio en cualquier caso
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-wigth-bold">Editar producto.</h2>

                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label >Nombre del producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label >Precio del producto</label>
                                <input 
                                    type="number"
                                    min="0"
                                    className="form-control"
                                    placeholder="Precio del producto"
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                guardar cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditarProducto;