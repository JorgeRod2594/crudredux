import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
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
        default:
            return state;
    }

}