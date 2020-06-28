import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types/index';

//Cada reducer tiene su propio state
const initialState = {
    productos: [], //Definimos el arreglo de productos. Este se llenará cuando hagamos las consultas a la db.
    error: null, //Para mostrar errores
    loading: false //Para realizar la espera mientras carga los datos
}

//El store de  pasa el state y el action que ejecutará el reducer, encaso de no pasarle nada le pasamos el initialState
//como en la siguiente linea.
export default function(state = initialState, action) { //Cualquier reducer es un switch
    /*Colocamos todos los cases que describen que pasará en la aplicación y van a estar cambiando el state mediante el payload.*/
    switch(action.type) {

        case AGREGAR_PRODUCTO:
            return {
                ...state, //Retornamos una copia del state
                loading: true //Activamos loading 
            }
        
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false, //Apagamos porque ya se guardo en la se de datos
                productos: [...state.productos, action.payload] //Hacemos una copia de productos para que no
                //borre los productos que ya se encuentren y agregue el nuevo.
            }

        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,//Debido a que terminó antes de tiempo.
                error: action.payload
            }

        case DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state;
    }

}