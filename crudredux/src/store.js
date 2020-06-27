//Es el ancargado del State de toda la aplicación completa
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index'; //buscará el reducer que creamos

//Se crea el store
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
    //Aquí colocamos el código para utilizar Redux developer tools

    //////////I M P O R T A N T E /////////
    //Valida si tenemos instalado redux-developer-extension. EL siguiente código es de suma importancia 
    //ya que si tu navegador no tiene RDT aparecerá como corrupto el proyecto, por eso se agrega el siguiente código:
    typeof window === 'object' && 
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? //no es undefined, entonces agrega este código
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f //En caso contrario retorna f
    //Con esto nos aseguramos que funcione con o sin Redux developer tools 
    
    )
);

export default store; //El store se llama en el componente principal para que fluyan los datos en todo el proyecto