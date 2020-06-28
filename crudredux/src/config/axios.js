//Configuracion de axios necesaria para la conexion a la api
import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://dodotask.free.beeceptor.com/'
});

export default clienteAxios; //Exportamos para poder hacer las consultas en donde se requiera