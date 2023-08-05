import React from "react";
import { Link } from "react-router-dom";
import "./StiloJonicoco.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg colormenu">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto font">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  aria-current="page"
                >
                 Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="nosotros"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  aria-current="page"
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="resena"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  aria-current="page"
                >
                  Reseña
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contactenos"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  aria-current="page"
                >
                  Contactenos
                </Link>
              </li>
            </ul>
            {/*<form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>*/}
          </div>
        </div>
      </nav>
    </div> 
  );
};

export default Navbar;
