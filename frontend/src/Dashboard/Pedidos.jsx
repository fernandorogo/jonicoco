import React from 'react'
import Breadcrumbs from './components/Breadcrumbs '

const Pedidos = () => {
  return (
    <div>
      <div className=" container" style={{ textAlign: 'left' }}>
        <Breadcrumbs/>
      </div>

      <button type="button" className="btn btn-primary" style={{ backgroundColor: "#7a1520" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        < i className="fa-solid fa-plus fa-beat fa-lg me-2" style={{ color: "#ffffff" }}></i>Pedidos
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "#d84052" }}>
              <h5 className="modal-title" id="staticBackdropLabel">Registro de Pedidos</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Codigo de Pedido </label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Documento cliente </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Nombre Cliente </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Documento vendedor </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Nombre vendedor </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Estado de Compra </label>
                  <select className="form-select form-select-sm" aria-label="Ejemplo de .form-select-sm">
                    <option selected>selecione uno</option>
                    <option value="1">Activo</option>
                    <option value="2">Pendiente</option>
                    <option value="3">Finalizado</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">Fecha de creacion </label>
                  <input type="date" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Codigo de producto</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label for="formGroupExampleInput2" class="form-label">cantidad</label>
                  <input type="number" class="form-control" id="formGroupExampleInput2" />
                </div>
                <div className="col-md-6">
                  <label for="formGroupExampleInput2" class="form-label">precio unitario</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" />
                </div>

                <div className="col-md-6">
                  <label for="formGroupExampleInput2" class="form-label">Precio Total</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" />
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
  )
}

export default Pedidos