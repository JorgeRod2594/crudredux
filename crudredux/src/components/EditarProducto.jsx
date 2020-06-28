import React from 'react'

const EditarProducto = () => {
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-wigth-bold">Editar producto.</h2>

                        <form>
                            <div className="form-group">
                                <label htmlFor="">Nombre del producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del producto"
                                    name="nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio del producto</label>
                                <input 
                                    type="number"
                                    min="0"
                                    className="form-control"
                                    placeholder="Precio del producto"
                                    name="precio"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                guardar cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditarProducto;