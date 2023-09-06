import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div>
      <div >
        <div className="row justify-content-center imgfondo">
          <div className="col-md-6 col-xl-4 ">
            <br />
            <div className="card mt-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <div className="card-body text-center d-flex flex-column align-items-center mt">
                <div className="bs-icon-xl bs-icon-primary bs-icon my-4"><i className="fa-solid fa-user  fa-2xl" style={{ color: "#ed0c0c" }}></i></div>
                <form method="post">
                  <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                  <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Contraseña" /></div>
                  <div className="mb-3"><Link to="/aplication/"><button className="btn btn-danger d-block w-100" > Ingresar </button></Link></div>
                  <p>¿olvidaste  tu contraseña?</p>

                </form>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login