import { //Actions se comunica mucho con reducer
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types/index';

import clienteAxios from '../config/axios';//Importamos el cliente axios para la comunicacion con la API
import Swal from 'sweetalert2';

//Aqui van las funciones que se van a utilizar en la vista

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        console.log(producto);
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