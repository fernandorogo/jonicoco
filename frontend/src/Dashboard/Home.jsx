import React from 'react';
import { Link } from "react-router-dom";
import Breadcrumbs from './components/Breadcrumbs ';

const Home = () => {
  return (
    <div>
      <div className=" container" style={{ textAlign: 'left' }}>
        <Breadcrumbs />
      </div>

      <h1 style={{ color: "#911625" }}>Bienvenido a Jonicoco</h1>
      <div className='container-md'>


        <div className="row mt-5">
          <div className="col-md-6 col-lg-6">
            <div className="card bg-light shadow-lg mb-3">
              <div className="card-body">
                <h5 className="card-title">Generar Pedidos</h5>
                <br></br>
                <Link to="Pedidos" className="btn btn-danger">Ir a pedidos</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="card bg-light shadow-lg mb-3">
              <div className="card-body">
                <h5 className="card-title">Buscar clientes</h5>
                <br></br>
                <Link to="Clientes" className="btn btn-danger">Ir a clientes</Link>
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <div className="row mt-2">
          <div className="col-md-6 col-lg-6">
            <div className="card bg-light shadow-lg mb-3">
              <div className="card-body">
                <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                  <div className="card-header">Pedidos Activos</div>
                  <div className="card-body text-danger">
                    <p className="card-text">Un texto de ejemplo rápido para colocar cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="card bg-light shadow-lg mb-3">
              <div className="card-body">
                <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                  <div className="card-header">Ultimas facturas</div>
                  <div className="card-body text-danger">
                    <p className="card-text">Un texto de ejemplo rápido para colocar cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>



  )
}

export default Home