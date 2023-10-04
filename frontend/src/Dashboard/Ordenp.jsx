import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../Dashboard/Ordenp.estilo.css";
import Breadcrumbs from "./components/Breadcrumbs ";

const Ordenp = () => {
  const [ordenp, setOrdenp] = useState([]);

  const [ordenpedido, setOrdenpedido] = useState("");
  const [estadocompra, setEstadocompra] = useState("");
  const [fechacreacion, setFechacreacion] = useState("");
  const [fechadespacho, setFechadespacho] = useState("");
  const [precio, setPrecio] = useState("");
  const [totalpedido, setTotalpedido] = useState("");

  const [edit, setEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const cleanData = () => {
    setOrdenp("");
    setOrdenpedido("");
    setEstadocompra("");
    setFechacreacion("");
    setFechadespacho("");
    setPrecio("");
    setTotalpedido("");
    setEdit(false);
  };

  const getData = async () => {
    const { data } = await axios.get("http://localhost:4000/ordenp/listar");
    setOrdenp(data.ordenp);
  };

  const saveOrdenp = async () => {
    try {
      const newOrdenp = {
        ordenpedido,
        estadocompra,
        fechacreacion,
        fechadespacho,
        precio,
        totalpedido,
      };
      await axios.post("http://localhost:4000/ordenp/add", newOrdenp);
      cleanData();
      getData();

      Swal.fire({
        icon: "success",
        title: "El Pedido ha sido registrado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        getData();
      }, 1000);
    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.response.data.message);
      }
      console.log("error en saveOrdenp", error.message);
    }
  };

  const updateOrdenp = async () => {
    try {
      const id = localStorage.getItem("id");
      const newOrdenp = {
        ordenpedido,
        estadocompra,
        fechacreacion,
        fechadespacho,
        precio,
        totalpedido,
      };
      const { data } = await axios.put(
        "http://localhost:4000/ordenp/update" + id,
        newOrdenp
      );
      cleanData();
      getData();

      Swal.fire({
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.response.data.message);
      }
      console.log("error en saveOrdenp", error.message);
    }
  };

  const actions = async (e) => {
    e.preventDefault();
    edit ? updateOrdenp() : saveOrdenp();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const editData = (item) => {
    setEstadocompra(item.estadocompra);
    setOrdenpedido(item.ordenpedido);
    setFechacreacion(item.fechacreacion);
    setFechadespacho(item.fechadespacho);
    setPrecio(item.precio);
    setTotalpedido(item.totalpedido);
    localStorage.setItem("id", item._id);
    setIsModalOpen(true);
  };

  const deleteOrdenp = async (id) => {
    try {
      Swal.fire({
        title: "¿Esta seguro de eliminar?",
        text: "No podras revertir el proceso",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axios.delete(
            "http://localhost:4000/ordenp/delete/" + id
          );
          getData();
          Swal.fire({
            icon: "success",
            title: data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.response.data.message);
      }
      console.log("error en deleteOrdenp", error.message);
    }
  };

  return (
    <div>
      <div className=" container" style={{ textAlign: 'left' }}>
        <Breadcrumbs />
      </div>
      <div className="container-md mt-5">
        <div className={`modal fade ${isModalOpen ? "show" : ""}`} id="staticBackdrop" 
          data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" 
          aria-labelledby="staticBackdropLabel" aria-hidden={!isModalOpen} style={{ display: isModalOpen ? "block" : "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div
                className="modal-header" style={{ backgroundColor: "#d84052" }}>
                <h5 className="modal-title" id="staticBackdropLabel">
                  Registro de Ordenp
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <form id="clienteForm" onSubmit={actions}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Estado compra{" "}
                      </label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Ejemplo de .form-select-sm"
                        value={estadocompra}
                        onChange={(e) => setEstadocompra(e.target.value)}
                        required
                      >
                        <option selected>selecione uno</option>
                        <option>Activo</option>
                        <option>En proceso</option>
                        <option>finalizado</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label hmltFor="inputEmail4" className="form-label">
                        Orden pedido{" "}
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={ordenpedido}
                        onChange={(e) =>
                          setOrdenpedido(e.target.value.toUpperCase())
                        }
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Fecha creacion{" "}
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        value={fechacreacion}
                        onChange={(e) =>
                          setFechacreacion(e.target.value.toUpperCase())
                        }
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Fecha despacho{" "}
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        value={fechadespacho}
                        onChange={(e) =>
                          setFechadespacho(e.target.value.toUpperCase())
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Precio{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={precio}
                        onChange={(e) =>
                          setPrecio(e.target.value.toUpperCase())
                        }
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Total pedido{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={totalpedido}
                        onChange={(e) =>
                          setTotalpedido(e.target.value.toUpperCase())
                        }
                        required
                      />
                    </div>

                    <div className="modal-footer border-5">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          getData(); // Carga los datos actualizados
                          cleanData(); // Limpia los campos del formulario
                          closeModal();
                        }}
                        data-bs-dismiss="modal"
                      >
                        Cerrar
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Guardar Registro
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Inicio de la tabla */}
      <div className='container container-flex card Larger shadow p-0 mb-15 bg-body rounded'>
        <div className='container'>
          <h4 className="text-danger fw-bold m-0 mt-2 text-center">Orden de pedidos</h4>
          <div>
            <button
              type="button" className="btn btn-danger rounded-circle mt-3"  onClick={() => {
                setIsModalOpen(true);
              }}
              title="Haga clic para agregar un nuevo pedido"><i className="fa-solid fa-plus fa-beat "></i>
            </button>
          </div>
        </div>
        <div className="card-header d-flex justify-content-between align-items-center">

          <div className='container-fluid d-flex d-none d-md-block '>
            <div className="container container-fluid table-responsive">
              <table className='table table-bordered table-hover mt-2'>
                <thead className='table-danger'>
                  <tr>
                    <th scope="col" className="responsive-text">#</th>
                    <th scope="col" className="responsive-text">Orden pedido</th>
                    <th scope="col" className="responsive-text">Estado compra</th>
                    <th scope="col" className="responsive-text">Fecha creacion</th>
                    <th scope="col" className="responsive-text">Fecha despacho</th>
                    <th scope="col" className="responsive-text">Precio</th>
                    <th scope="col" className="responsive-text">Total pedido</th>
                    <th scope="col" className="responsive-text">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(ordenp) && ordenp.map((item, i) => (
                    <tr key={item._id}>
                      <td className="responsive-text ">{i + 1}</td>
                      <td className="responsive-text">{item.ordenpedido}</td>
                      <td className="responsive-text">{item.estadocompra}</td>
                      <td className="responsive-text">{item.fechacreacion}</td>
                      <td className="responsive-text">{item.fechadespacho}</td>
                      <td className="responsive-text">{item.precio}</td>
                      <td className="responsive-text">{item.totalpedido}</td>
                      <td>
                        <div className="btn-group btn-group-sm" role="group">
                          <span className="btn btn-primary d-flex align-items-center me-2"
                            onClick={() => editData(item)}><i className="fa-solid fa-pencil space-i"></i>
                          </span>
                          <span
                            className="btn btn-danger d-flex align-items-center"
                            onClick={() => deleteOrdenp(item._id)}><i className="fa-solid fa-trash"></i>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/*Final tabla */}

          {/*Inicio card*/}
          <div className="container d-md-none">
            {Array.isArray(ordenp) &&
              ordenp.map((item, i) => (
                <div key={item._id} className="card border-3 mt-3">
                  {/* Contenido de la tarjeta */}
                  <div className='card-body'>
                    <h5 className="card-title">Ordenp {i + 1}</h5>
                    <p className="card-text">
                      <strong>Orden pedido:</strong> {item.ordenpedido}
                      <br />
                      <strong>Estado compra:</strong> {item.estadocompra}
                      <br />
                      <strong>Fecha creacion:</strong> {item.fechacreacion}
                      <br />
                      <strong>Fecha despacho:</strong> {item.fechadespacho}
                      <br />
                      <strong>Precio:</strong> {item.precio}
                      <br />
                      <strong>Total pedido:</strong> {item.setTotalpedido}
                      <br />
                    </p>
                    <div className="btn-group btn-group-xl">
                      <span
                        className="btn btn-primary d-flex align-items-center me-2"
                        onClick={() => editData(item)}
                      >
                        <i className="fa-solid fa-pencil space-i"></i>
                      </span>
                      <span
                        className="btn btn-danger d-flex align-items-center"
                        onClick={() => deleteOrdenp(item._id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Ordenp;
