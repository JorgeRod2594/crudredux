import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// BrowserRouter con un alias, Route que sería cada página  y Switch

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
    //En programación, el término boilerplate se refiere a bloques de código utilizados una y otra vez.

    //  Al agregar provider todas las funciones que tengamos van a estar disponibles en todo el proyecto.
  return (
      
    <Router>
        <Provider store={store}>
            <Header />
                <div className="container mt-5 mb-5">
                    {/*Definimos las rutas dentro del switch. Pasamos el path y el componente que cargará al ingresar a la ruta*/}
                    <Switch>
                        <Route exact path ="/" component= {Productos}/>
                        <Route exact path ="/productos/nuevo" component= {NuevoProducto}/>
                        <Route exact path ="/productos/editar/:id" component= {EditarProducto}/>
                    </Switch>
                </div>
            <Footer />
        </Provider>
    </Router>
  );
}

export default App;
