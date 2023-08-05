import React from "react";
import EditJoniCoco3 from "../images/EditJoniCoco3 - banner.png";
import Jonicoco2 from "../images/Jonicoco2.jpeg";
import videoCoco from "../images/videoCoco.mp4";
import "../view/EstilosHome.css";


const Home = () => {
  return (
    <div>
      <div className="mb-5">
        <header className="img-fluid">
          <img src={EditJoniCoco3} className="d-block w-100 cover" alt="..." />
        </header>
      </div>
      {/*inicio primera columna */}
      <div>
        <div className="mt-5">
          <h1 className="titulo"><span style={{color:"#911625"}}>Nuestros</span> productos</h1>
          <div className="container" style={{ marginTop: "3%" }}>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="container">
                  <img
                    className="bordeado rounded-start"
                    src={Jonicoco2}
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
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vero dolorem eligendi nobis, distinctio quasi recusandae
                      officiis veritatis at non maiores molestias deleniti
                      accusamus et ab alias vitae tempora cum. Commodi.{" "}
                      <hr />
                      <h3><span style={{color:"#911625"}}>Caja por 20 unidades +1 :</span> 20.000COP</h3>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut cumque dolore dicta at odio aperiam velit a, eius
                      quaerat libero, sapiente assumenda quis nemo neque tenetur
                      quod quas eligendi magni!
                      <hr />
                      <h3 style={{color:"black"}}><span style={{color:"#fff"}}>Unidad:</span> 20.000COP</h3>
                    </p>
                    <button className="leerMas mt-4">Mas información</button>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 mt-5 mb-5">
                <div className="container">
                  <img
                    className="bordeado rounded-end"
                    src={Jonicoco2}
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
                    src={Jonicoco2}
                    style={{ width: "100%" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="container" style={{ marginTop: "2%" }}>
                  <div className="base_header">
                    <h3>Tarriro</h3>
                  </div>
                  <div className="base_footer">
                    <p className="parraf">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates unde non ipsam vel, iste itaque ea sunt aut
                      explicabo esse perferendis quam! Aliquam eaque quibusdam,
                      dolor doloribus distinctio id aut!
                      <hr />
                      <h3 ><span style={{color:"#911625"}}>Tarrito por 10 unidades:</span> 8.000COP</h3>
                    </p>
                    <button className="leerMas">Mas información</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Final tercera columna */}
        <hr />
        {/*Inicio Conocenos */}

        <div class="container text-center">
          <h1>Conocenos</h1>
          <div class="row">
            <div class="col">
              <div>
                <div className="mt-3">
                  <div className="col-md-12 col-lg-12 ">
                    <div className="container " style={{ padding: "0%" }}>
                      <div className=" embed-responsive embed-responsive-16by9">
                        <video
                          controls
                          width="100%"
                          height="100%"
                          className="npm video"
                        >
                          <source src={videoCoco} type="video/mp4" />
                          Tu navegador no soporta el elemento de video.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">2 of 2</div>
          </div>
          {/*Final conocenos */}
          <hr />
          {/*Inicio Ubicacion */}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
