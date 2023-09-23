import React from "react";
import Portada from "../images/Portada.jpg";
import NuestrosOjos from "../images/larazondeserdejonicoco.jpeg";

import Footer from "../Components/Footer";

const Resena = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-2">
            <h1 className="mb-4">
              <span style={{ color: "#911625" }}>Nuestra </span>historia
            </h1>
            <div className="text-start">
              Jonicoco tuvo su inicio alrededor del año 2019, participando en
              mercados campesinos y en el parque de nuestro municipio natal, Don
              Matías. Su presencia fue bien recibida tanto por comerciantes como
              por individuos independientes. Durante la infancia de Doña Rosa,
              surgieron cuestionamientos relacionados con el coco. Su padre
              solía llevarla a misa cada fin de semana, y después de esta,
              solían comprar un dulce: una velita y un pedazo de coco. Esta
              combinación de ingredientes generó curiosidad en Doña Rosa,
              planteándose cómo fusionarlos. Con el paso de los años, su hija
              viajó a Chocó debido a asuntos de estudio y regresó con la idea de
              crear bombones de coco. Doña Rosa intentó recrear la receta
              tradicional, pero sus esfuerzos no dieron los resultados
              esperados. A pesar de esto, no se rindió y continuó experimentando
              con distintas variaciones del coco, lo que finalmente la llevó a
              crear las panelitas de coco. Una vez logrado el producto deseado,
              comenzaron a participar en plazas y mercados, y gracias a su
              desempeño exitoso, despertaron el interés de la alcaldía.
              Recibieron apoyo de la oficina de productividad y competitividad,
              lo cual contribuyó a que el producto ganara visibilidad entre la
              población local. Posteriormente, la llegada de la pandemia actuó
              como un catalizador para el crecimiento y la funcionalidad de la
              empresa. La demanda aumentó considerablemente, ya que las
              residencias y las empresas locales, como las fábricas de
              confección, realizaron numerosos pedidos. Este contexto impulsó la
              expansión de Jonicoco a varias áreas del norte de Antioquia. Como
              resultado de estos acontecimientos, están muy satisfechos con los
              logros obtenidos en los últimos meses.
            </div>
          </div>


          <div className="col-md-6 p-4">
            <div className="container">
              <img
                className="bordeado img-fluid"
                src={Portada}
                style={{ width: "100%", height: "auto" }}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="card mb-3 mt-5 rounded-5" style={{ maxWidth: "520px" }}>
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={NuestrosOjos}
                className="img-fluid rounded-start"

                alt="..."
              />
            </div>
            <div className="col-md-6 ">
              <div className="card-body">
                <h4 className="card-title">La Razón de ser de </h4>
                <h3 className="mb-4">
                  <span style={{ color: "#911625" }}>Joni</span>coco
                </h3>
                <p className="card-text">
                  Jonicoco nace de dos hermosos niños y los que han sido la razon de ser de este procto FAMILIAR.
                  Juan Jose y Nicolas forman parte del Nombre joni y coco por nuestra materia prima.
                </p>
   
                <p className="card-text ">
                  <small className="text-body-secondary">
                    Juan Jose hoy no nos acompaña, pero hacemos honor a él porque siempre va a estrar presente en nuestras VIDAS y en el PROYECTO.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resena;
