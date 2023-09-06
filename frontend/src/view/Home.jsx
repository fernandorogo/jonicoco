import React from "react";
import Footer from "../Components/Footer";
import EditJoniCoco3 from "../images/EditJoniCoco3 - banner.png";

import Bolsita from "../images/bolsitadetal.jpg";
import Cajita6unidades from "../images/cajita6unidades.jpg";
import Tarrito10unidades from "../images/tarro10unidades.jpg";
import Tarrito5unidades from "../images/tarro5unidades.jpg";
import "../view/EstilosHome.css";

const Home = () => {
  return (
    <div>
      <div>
        <div className="mb-5">
          <header className="img-fluid">
            <img src={EditJoniCoco3} className="d-block w-100 cover" alt="..." />
          </header>
        </div>
        {/*inicio primera columna */}
        <div>
          <div className="mt-5">
            <h1 className="titulo"><span style={{ color: "#911625" }}>Nuestros</span> productos</h1>
            <div className="container" style={{ marginTop: "3%" }}>
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="container">
                    <img
                      className="bordeado rounded-start"
                      src={Cajita6unidades}
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="container" style={{ marginTop: "7%" }}>
                    <div className="base_header">
                      <h3>Cajita</h3>
                    </div>
                    <div className="base_footer">
                      <p className="parraf">
                        Apta para cualquier tipo de ocasion, la cajita la hace más especial para compartir con las personas que más quieres, practica para enmarcar y regalar en celebraciones y momentos especiales. {" "}
                        <hr />
                        <h3><span style={{ color: "#911625" }}>Caja por 6 unidades  :</span> </h3>
                      </p>
                      <button className="leerMas">Mas información</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Final primera columna */}

          {/*Inicio segunda columna */}
          <div className="fonduco">
            <div className="container" style={{ marginTop: "5%" }}>
              <div className="row ">
                <div className="col-md-12 col-lg-6">
                  <div className="container mt-5" style={{ marginTop: "7%" }}>
                    <div className="base_header">
                      <h1 className="text-white">Bolsita</h1>
                    </div>
                    <div className="base_footer">
                      <p className="parraf text-white">
                        Una presentación que va desde lo individual hasta la cantidad que desees, practica para llevar a cualquier lado y disfrutar en cualquier momento del día.
                        <hr />
                        <h3 style={{ color: "black" }}><span style={{ color: "#fff" }}>Al detal</span> </h3>
                      </p>
                      <button className="leerMas mt-4">Mas información</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 mt-5 mb-5">
                  <div className="container">
                    <img
                      className="bordeado rounded-end"
                      src={Bolsita}
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/*Final segunda columna */}
            {/*Inicio tercera columna */}
            <div className="container" style={{ marginTop: "5%" }}>
              <div className="row">
                <div className="col-md-8 col-lg-6">
                  <div className="container">
                    <img
                      className="bordeado rounded-start"
                      src={Tarrito5unidades}
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="container" style={{ marginTop: "2%" }}>
                    <div className="base_header">
                      <h3>Tarrito</h3>
                    </div>
                    <div className="base_footer">
                      <p className="parraf">
                        Una presentación que se acomoda según tus necesidades y tus gustos, con la comodidad de elegir cuantas unidades deseas y luego puedes reutilizarlo a tu modo.
                        <hr />
                        <h3 ><span style={{ color: "#911625" }}>Tarrito pequeño por 5 unidades:</span> </h3>
                      </p>
                      <button className="leerMas">Mas información</button>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="container" style={{ marginTop: "2%" }}>
                    <div className="base_header">
                      <h3>Tarrito</h3>
                    </div>
                    <div className="base_footer">
                      <p className="parraf">
                        Una presentación que se acomoda según tus necesidades y tus gustos, con la comodidad de elegir cuantas unidades deseas y luego puedes reutilizarlo a tu modo.
                        <hr />
                        <h3 ><span style={{ color: "#911625" }}>Tarrito grande por 10 unidades:</span> </h3>
                      </p>
                      <button className="leerMas">Mas información</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-8 col-lg-6">
                  <div className="container">
                    <img
                      className="bordeado rounded-start"
                      src={Tarrito10unidades}
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Final tercera columna */}
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
