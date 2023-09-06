import React from "react";
import { Link } from "react-router-dom";
import "../estilos_jonicoco.css";

const Footer = () => {
  return (
  
      <body className="color_jonicoco">
        <footer className="text-white">
          <div className="container py-4 py-lg-5 ">
            <div className="row">
              {" "}
              {/*lo ponemos como fila*/}
              <div className="col-sm-12 col-md-6 item">
                <h3 className="footer-links-title">
                  <strong>¿Qué hacemos?</strong>
                </h3>
                <hr /> {/*Este permite crear la linea que separa el parrafo */}
                <p>
                  Somos mucho más que una fábrica de panelitas. Creamos
                  experiencias dulces que puedes saborear y compartir.
                </p>
              </div>
              <div className="col-sm-12 col-md-6 item">
                <h3>
                  <strong>Contactanos</strong>
                </h3>
                <hr />
                <ul className="footer-links list-unstyled">
                  <li>
                    <Link className="link-light text-decoration-none">
                      <i className=" fa-solid fa-phone me-2 "></i>320 667 31 20 -
                      314 511 84 88
                    </Link>
                  </li>
                  <li>
                    <Link className="link-light text-decoration-none">
                      <i className="fa-solid fa-envelope me-2"></i>
                      jonicocoemp@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center pt-2">
              <div className="container text-white py-4 py-lg-0">
                <ul className="list-inline">
                  <li className="list-inline-item me-6 mt-2">
                    <Link className="link-light text-decoration-none" href="#">
                      La receta de la abuela
                    </Link>
                  </li>
                </ul>
                <ul className="list-inline">
                  <li className="list-inline-item me-6">
                    <Link
                      to="https://www.instagram.com/panelitas.joni.coco/"
                      className="link-light"
                    >
                      <i className="fa-brands fa-instagram fa-2xl"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item me-6">
                    <Link
                      to="https://www.instagram.com/panelitas.joni.coco/"
                      className="link-light"
                    >
                      <i className="fa-brands fa-facebook fa-2xl"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item me-6">
                    <Link
                      to="https://www.instagram.com/panelitas.joni.coco/"
                      className="link-light"
                    >
                      <i className="fa-brands fa-telegram fa-2xl"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item me-6">
                    <Link
                      to="https://www.instagram.com/panelitas.joni.coco/"
                      className="link-light"
                    >
                      <i className="fa-brands fa-tiktok fa-2xl"></i>
                    </Link>
                  </li>
                </ul>
                <p className="copyright mb-0">Jonicoco © 2023</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    
  );
};

export default Footer;