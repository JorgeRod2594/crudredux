import { //Actions se comunica mucho con reducer
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types/index';

//Aqui van las funciones que se van a utilizar en la vista

//Crear nuevos productos.
export function crearNuevoProductoAction(producto) {
    return () => {
        console.log(producto);
    }
    
}