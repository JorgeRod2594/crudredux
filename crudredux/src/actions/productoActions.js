import { //Actions se comunica mucho con reducer
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
} from '../types/index';

import clienteAxios from '../config/axios';//Importamos el cliente axios para la comunicacion con la API
import Swal from 'sweetalert2';

//Aqui van las funciones que se van a utilizar en la vista

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        //console.log(producto);
        dispatch(agregarProducto() );

        //Validamos que la operacion de agregar el producto sea correcta
        try {//Si la funcion de arriba se ejecuta correctamente haz los siguiente:
            //insertamos en la api
            await clienteAxios.post('/productos', producto);
            //Si la inserción es correcta, actualiza el state
            dispatch(agregarProductoExito(producto) ); //Le pasamos el producto para que modifique el state
            //Mandamos una alerta de exito de la operación
            Swal.fire (
                'Listo',
                'El producto se agregó correctamente.',
                'success'
            );
        } catch (error) {
            console.log(error);
            dispatch(agregarProductoError(true) ); //Activamos el error
            //Mostramos una alerta de fallo en la accion
            Swal.fire ({
                icon: 'error',
                title: '¡Ops!',
                text: 'Hubo un error, intenta de nuevo.'
            });
        }
    }
    
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
});

//Si el producto se guardó en la base de datos
const agregarProductoExito = (producto) => ({ //Le pasamos el producto en el payload
    type: AGREGAR_PRODUCTO_EXITO, //Este es el action.type en productosReducer
    payload: producto  //Este es el action.payload en productosReducer
});

//Si hubo un error
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

//////////////////////////////////////////////////////////////////////////////////7

//Funcion que descarga los productos de la base de datos
export function obtenerProductosAction(producto) {
    return async (dispatch) => {
        dispatch(descargaProductos() );

        try {//Si la funcion de arriba se ejecuta correctamente haz los siguiente:
            
            const respuesta = await clienteAxios.get('/productos');
            //console.log(respuesta.data.productos); muestra la lista de productos obtenida de la api
            //Si la petición es correcta, llamamos con dispatch a la funcion descargaProductosExitosa
            dispatch(descargaProductosExitosa(respuesta.data.productos) );
            
        } catch (error) {//en caso de no ser exitosa:
            dispatch(descargaProductosError() );//Mandamos la accion para el error
        }
    }
}

const descargaProductos = () => ({
    type: DESCARGA_PRODUCTOS,
    payload: true //Este true es para indicar que se esta descargando 4los productos y cuando termine pasará a false
});

const descargaProductosExitosa = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload:true
});

/////////////////////////////////////////////////////////////////////////////////////////

//Selecciona y borra un producto
export function borraProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id) );
        console.log(id);
    }
}

const obtenerProductoEliminar = (id) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload:id
});