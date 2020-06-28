import { combineReducers } from 'redux';
//El store solo puede tener un reducer y por eso combinamos con esto todos los reducers que se crean.
import productoReducer from './productosReducer';

export default combineReducers ({
    //Aqui creamos el state de cada reducer de acuerdo a la necesidad del proyecto:
    productos: productoReducer
})
