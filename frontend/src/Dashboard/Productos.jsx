import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import "./TextResponsive.css";
import Breadcrumbs from './components/Breadcrumbs ';

const Productos = () => {

  const [productos, setProductos] = useState([])

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [presentacion, setPresentacion] = useState('')
  const [precio, setPrecio] = useState('')


  const [edit, setEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    getData();
  }, []);

  const cleanData = () => {

    setNombre('')
    setDescripcion('')
    setPresentacion('')
    setPrecio('')
    setEdit(false);


  }


  const getData = async () => {
    const { data } = await axios.get("http://localhost:4000/producto/listar");
    setProductos(data.producto);
  };

  const saveProductos = async () => {
    try {
      const newProductos = {
        nombre,
        descripcion,
        presentacion,
        precio,

      }
      await axios.post('http://localhost:4000/producto/add', newProductos);
      cleanData();
      getData();


      Swal.fire({
        icon: 'success',
        title: 'El Producto a sido registrado exitosamente',
        showConfirmButton: false,
        timer: 1500
      });

      setTimeout(() => {
        getData(); // Recargar los datos después de un breve tiempo
      }, 1000); // Esperar 1 segundo antes de recargar


    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.response.data.message)
      }
      console.log('error en saveProducto', error.message);

    }
  }

  const updateProductos = async () => {
    try {
      const id = localStorage.getItem('id');
      const newProductos = {
        nombre,
        descripcion,
        presentacion,
        precio,


      }
      const { data } = await axios.put('http://localhost:4000/producto/update' + id, newProductos);
      cleanData();
      getData();


      Swal.fire({
        icon: 'success',
        title: data.message,
        showConfirmButton: false,
        timer: 1500
      });

    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.response.data.message)
      }
      console.log('error en saveProductos', error.message);
    }
  }

  const actions = async (e) => {
    e.preventDefault();
    edit ? updateProductos() : saveProductos();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const editData = (item) => {
    setNombre(item.nombre)
    setDescripcion(item.descripcion)
    setPresentacion(item.presentacion)
    setPrecio(item.precio)
    localStorage.setItem('id', item._id)
    setIsModalOpen(true);


  }




  const deleteProductos = async (id) => {
    try {
      Swal.fire({
        title: '¿Esta seguro de eliminar?',
        text: "No se podra regresar el proceso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axios.delete('http://localhost:4000/producto/delete/' + id);
          getData();
          Swal.fire({
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.response.data.message)
      }
      console.log('error en deleteProductos', error.message);
    }
  }



  return (
    <div>
      <div className=" container" style={{ textAlign: 'left' }}>
        <Breadcrumbs />
      </div>
      <div className='container-md mt-5'>

        <div className={`modal fade ${isModalOpen ? 'show' : ''}`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={!isModalOpen} style={{ display: isModalOpen ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: "#d84052" }}>
                <h5 className="modal-title" id="staticBackdropLabel">Productos</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                <form className="row g-3" onSubmit={actions}>

                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Nombre </label>
                    <input type="text" className="form-control"
                      value={nombre} onChange={(e) => setNombre(e.target.value.toUpperCase())} required />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Descripcion </label>
                    <input type="text" className="form-control"
                      value={descripcion} onChange={(e) => setDescripcion(e.target.value.toUpperCase())} required />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Presentacion </label>
                    <input type="text" className="form-control"
                      value={presentacion} onChange={(e) => setPresentacion(e.target.value.toUpperCase())} required />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Precio</label>
                    <input type="number" className="form-control"
                      value={precio} onChange={(e) => setPrecio(e.target.value.toUpperCase())} required />
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
                      data-bs-dismiss="modal">
                      Cerrar
                    </button>

                    <button type="submit" className="btn btn-primary"  >Guardar Registro</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>



        <div className='container container-flex card Larger shadow p-0 mb-15 bg-body rounded'>
          <div className='container'>
            <h4 className="text-danger fw-bold m-0 mt-2 text-start align-middle d-flex	justify-content-center "> Productos</h4>

            <div>
              <button type="button" className="btn btn-danger rounded-circle mt-3" style={{ backgroundColor: "#7a1520" }}
                onClick={() => {
                  setIsModalOpen(true);
                }} title="Haga clic para agregar un nuevo cliente">< i className="fa-solid fa-plus fa-beat "></i></button>
            </div>
          </div>
          <div className="card-header d-flex justify-content-between align-items-center">

            <div className='container-fluid d-flex d-none d-md-block '>

              <div className="container container-fluid table-responsive">
                <table className='table table-bordered table-hover mt-2'>
                  <thead className='table-danger'>
                    <tr>
                      <th scope="col" className='responsive-text'> id </th>
                      <th scope="col" className="responsive-text">Nombre</th>
                      <th scope="col" className="responsive-text">Descripcion</th>
                      <th scope="col" className="responsive-text">Presentacion</th>
                      <th scope="col" className="responsive-text">Precio</th>
                      <th scope='col' className='responsive-text'>Acciones</th>
                    </tr>
                  </thead>

                  <tbody>

                    {Array.isArray(productos) && productos.map((item, i) => (

                      <tr key={item._id}>
                        <td className="responsive-text">{i + 1}</td>
                        <td className="responsive-text">{item.nombre}</td>
                        <td className="responsive-text">{item.descripcion}</td>
                        <td className="responsive-text">{item.presentacion}</td>
                        <td className="responsive-text">{item.precio}</td>

                        <td >

                          <div className="btn-group btn-group-sm" role="group">

                            <span className='btn btn-primary d-flex align-items-center me-2'
                              onClick={() => editData(item)}>
                              <i className="fa-solid fa-pencil space-i"></i>
                            </span>

                            <span className='btn btn-danger d-flex align-items-center'
                              onClick={() => deleteProductos(item._id)} ><i className="fa-solid fa-trash" ></i>
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))
                    }

                  </tbody>
                </table>
              </div>
            </div>


            <div className='container d-md-none'>
              {Array.isArray(productos) && productos.map((item, i) => (
                <div key={item._id} className='card border-3 nt-3'>
                  {/* Contenido de la tarjeta */}
                  <div className='card-body'>
                    <h5 className='card-title'>Productos {i + 1}</h5>
                    <p className='card-text'>
                      <strong>Nombre:</strong> {item.nombre}<br />
                      <strong>Descripcion:</strong> {item.descripcion}<br />
                      <strong>Presentacion:</strong> {item.presentacion}<br />
                      <strong>Precio:</strong> {item.precio}<br />

                      <strong></strong>
                    </p>
                    <div className='btn-group btn-group-xl'>
                      <span className='btn btn-primary d-flex align-items-center me-2'
                        onClick={() => editData(item)}>
                        <i className="fa-solid fa-pencil space-i"></i>
                      </span>
                      <span className='btn btn-danger d-flex align-items-center'
                        onClick={() => deleteProductos(item._id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-1 d-flex justify-content-end mb-3 border-5">

            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Productos