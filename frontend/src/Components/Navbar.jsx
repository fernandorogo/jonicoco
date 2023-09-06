import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StiloJonicoco.css";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  const navigateTo = (path) => {
    handleLinkClick();
    navigate(path);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg colormenu">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarSupportedContent"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end${isCollapsed ? "" : " show"
              }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto font">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  onClick={() => navigateTo("/")}
                  aria-current="page"
                > <i className="fa-solid fa-house me-2" style={{ color: "#ebeff4" }}></i>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="nosotros"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  onClick={() => navigateTo("nosotros")}
                  aria-current="page"
                > <i className="fa-regular fa-handshake me-2" style={{ color: "#ebeff4" }}></i>
                  Nosotros
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="resena"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  onClick={() => navigateTo("resena")}
                  aria-current="page"
                > <i className="fa-solid fa-book me-2" style={{ color: "#ebeff4" }}></i>
                  Reseña
                </Link>

              </li>
              <li className="nav-item">
                <Link
                  to="contactenos"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  onClick={() => navigateTo("contactenos")}
                  aria-current="page"
                > <i className="fa-solid fa-phone me-2" style={{ color: "#ebeff4" }}></i>
                  Contactenos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="tienda"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  onClick={() => navigateTo("tienda")}
                  aria-current="page">
                  <i className="fa-solid fa-cart-shopping me-2" style={{ color: "#ebeff4" }}></i>
                  Tienda
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="login"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  onClick={() => navigateTo("login")}
                  aria-current="page"
                > <i className="fa-solid fa-door-closed me-2" style={{ color: "#ebeff4" }}></i>

                  Ingresar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;