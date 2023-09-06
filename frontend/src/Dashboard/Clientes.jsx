import React from 'react'

const Clientes = () => {
  return (
    <div>
      <div className='container-md mt-5'>

        <button type="button" className="btn btn-primary" style={{ backgroundColor: "#7a1520" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          < i className="fa-solid fa-plus fa-beat fa-lg me-2" style={{ color: "#ffffff" }}></i>Cliente
        </button>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: "#d84052" }}>
                <h5 className="modal-title" id="staticBackdropLabel">Registro de Clientes</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className="row g-3">

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Tipo de Documento </label>
                    <select className="form-select form-select-sm" aria-label="Ejemplo de .form-select-sm">
                      <option selected>selecione uno</option>
                      <option value="1">Cedula de ciudadania</option>
                      <option value="2">Tarjeta de identidad</option>
                      <option value="3">Numero de pasaporte</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Numero Documento </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Primer nombre </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Segundo nombre </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Primer apellido </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Segundo apellido </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Correo electronico </label>
                    <input type="email" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Direccion </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Telefono </label>
                    <input type="text" className="form-control" id="inputPassword4" />
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" style={{ backgroundColor: "#403b3b" }} data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary" style={{ backgroundColor: "#7a1520" }} >Guardar Producto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clientes