import React from 'react'

const Productos = () => {
  return (
    <div className='container-md mt-5'>

      <button type="button" className="btn btn-primary" style={{ backgroundColor: "#7a1520" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        < i className="fa-solid fa-plus fa-beat fa-lg me-2" style={{ color: "#ffffff" }}></i>Productos
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "#d84052" }}>
              <h5 className="modal-title" id="staticBackdropLabel">Registro de productos</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Còdigo Producto</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">Nombre </label>
                  <input type="text" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-md-6">
                  <label for="formGroupExampleInput2" class="form-label">Tipo de Presentacion</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" />
                </div>
                <div className="col-md-6">
                  <label for="formGroupExampleInput2" class="form-label">Precio Base</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" />
                </div>
                <div className="col-md-12">
                  <label for="formGroupExampleInput2" class="form-label">Descripción</label>
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

export default Productos