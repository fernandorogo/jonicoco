import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../components/logo.png";

const NavbarDashboard = () => {
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
      <nav className="navbar navbar-expand-lg navbar-light colormenu">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className="rounded-circle border border-5" src={logo} style={{ width: 100 }} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" onClick={handleToggle}             aria-controls="navbarSupportedContent" aria-expanded={!isCollapsed} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end${isCollapsed ? '' : ' show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/aplication" className="nav-link text-white" onClick={() => navigateTo('/')}>
                <i className="fa-solid fa-house me-2" style={{color: "#ebeff4"}}></i>Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="clientes" className="nav-link text-white" onClick={() => navigateTo('/clientes')}>
                <i className="fa-solid fa-person me-2" style={{color: "#ebeff4"}}></i>   
                 Clientes
                </Link>
              </li>

              <li className="nav-item">
                <Link to="productos" className="nav-link text-white" onClick={() => navigateTo('/productos')}>
                <i className="fa-solid fa-store me-2" style={{color: "#ebeff4"}}></i>
                Productos

                </Link>
              </li>

              <li className="nav-item">
                <Link to="facturas" className="nav-link text-white" onClick={() => navigateTo('/facturas')}>
                <i className="fa-solid fa-list-check me-2" style={{color: "#ebeff4"}}></i>
                Facturas
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="pedidos" className="nav-link text-white" onClick={() => navigateTo('/pedidos')}>
                <i class="fa-solid fa-bag-shopping me-2" style={{color: "#ebeff4"}}></i>
                Pedidos
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button"  data-bs-toggle="dropdown" aria-expanded="false"
                >
                  <i className="fa-solid fa-user-tie fa-sm me-2"></i>
                  Usuario
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link to= "usuario" className="dropdown-item">
                      <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i> Configurción</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i> Registro de actividades</Link>
                  </li>
                  <li>
                    <Link to="/login" className="dropdown-item"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                      Cerrar sesión
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarDashboard