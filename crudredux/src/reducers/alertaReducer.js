import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types/index';

//Cada reducer tiene su propio state
const initialState = {
    alerta: null
}

//Exportamos la funcion con dos parametros: el state inicial y el payload mediante los actions
export default function(state = initialState, action) {
    switch(action.type) {
        
    case MOSTRAR_ALERTA:
        return {
            ...state,
            alerta: action.payload
        }

    case OCULTAR_ALERTA:
        return {
            ...state,
            alerta: action.payload
        }

        default:
            return state;
    }
    
}
