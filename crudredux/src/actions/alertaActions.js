import { //Actions se comunica mucho con reducer
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types/index';

//Muestra la alerta del formulario
export function mostrarAlerta(alerta) {
    return(dispatch) => {
        dispatch(mostrarAlertaMgs(alerta) );//Cuando se mande a ajecutar la alerta
    }
}

const mostrarAlertaMgs = (alerta) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

//Oculta la alerta del formulario
export function ocultarAlerta() {
    return(dispatch) => {
        dispatch(ocultarAlertaMsg() );
    }
}

const ocultarAlertaMsg = () => ({
    type: OCULTAR_ALERTA,
    payload: null
});
