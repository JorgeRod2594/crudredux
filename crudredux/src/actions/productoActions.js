import { //Actions se comunica mucho con reducer
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types/index';

//Aqui van las funciones que se van a utilizar en la vista

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        //console.log(producto);
        dispatch(agregarProducto() );

        //Validamos que la operacion de agregar el producto sea correcta
        try {//Si la funcion de arriba se ejecuta correctamente haz los siguiente:
            dispatch(agregarProductoExito(producto) ); //Le pasamos el producto para que modifique el state
        } catch (error) {
            dispatch(agregarProductoError(true) ); //Activamos el error
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