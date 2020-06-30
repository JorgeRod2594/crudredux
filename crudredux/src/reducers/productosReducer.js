import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types/index';


//Cada reducer tiene su propio state
const initialState = {
    productos: [], //Definimos el arreglo de productos. Este se llenará cuando hagamos las consultas a la db.
    error: null, //Para mostrar errores
    loading: false, //Para realizar la espera mientras carga los datos
    productoeliminar: null,
    productoeditar: null
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
        
        case PRODUCTO_EDITADO_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
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

        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: false,
                productos: action.payload //Le pasamos el array de productos de la consulta en el action
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoeliminar: action.payload
            }
        
        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== state.productoeliminar),
                //Le pasamos todos los productos menos el que deseamo eliminar. Iteramos en cada producto
                productoeliminar: null //limpiamos la variable que guarda el id del producto a eliminar.
            }

        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                productoeditar: action.payload
            }

        case PRODUCTO_EDITADO_EXITO:
            return {
                ...state,
                productoeditar: null, //liberamos el producto
                //Debemos reacorrer cada uno de los productos hasta encontrar el que coincida en el id
                //Los que no sean igual al id se retornan igual.
                productos: state.productos.map(producto =>
                    producto.id === action.payload.id ? producto = action.payload : producto //Reemplazo 
                    //el producto actual con lo que se pase como payload
                )
            }

        default:
            return state;
    }

}