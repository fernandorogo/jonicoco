import React from "react";
import "../view/EstilosContactanos.css";
import MapContainer from "../view/MapContainer";

const Contactenos = () => {
  return (
    <div className="fondo">
      {/*Inicio de ubicación*/}
      <div style={{ height: "400px", width: "100%" }}>
        <MapContainer />
      </div>
      {/*Final Ubicación */}
      <div className="mt-5">
        <div className="container" style={{ marginTop: "3%" }}>
          <div className="mt-5">
            <div className="container" style={{ marginTop: "3%" }}>
              <div className="row ">
                <div className="col-md-12 col-lg-6 ">
                  <div className="container" style={{ marginTop: "7%" }}>
                    <div className="base_footer mb-5 ">
                      <form className="borde">
                        <legend>Contactanos</legend>
                        <div className="mb-3 me-2 ms-2">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Nombre
                          </label>
                          <input
                            type="text"
                            className="form-control border-danger-subtle"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3 me-2 ms-2">
                          <label
                            for="exampleInputPassword1"
                            className="form-label "
                          >
                            Telefono
                          </label>
                          <input
                            type="text"
                            className="form-control border-danger-subtle"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <div className="mb-3 me-2 ms-2">
                          <label
                            for="exampleInputPassword1"
                            className="form-label "
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control border-danger-subtle"
                            id="exampleInputPassword1"
                          />
                        </div>

                        <button type="submit" className="btn btn-danger mb-2">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="container" style={{ marginTop: "15%" }}>
                    <div className="base_footer">
                      <h3 className="mb-3">Horarios de atención</h3>
                      <p className="parraf">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Vero dolorem eligendi nobis, distinctio quasi
                        recusandae officiis veritatis at non maiores molestias
                        deleniti accusamus et ab alias vitae tempora cum.
                        Commodi.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactenos;
