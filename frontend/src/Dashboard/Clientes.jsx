import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Breadcrumbs from './components/Breadcrumbs ';



const Clientes = () => {

  const [clientes, setClientes] = useState([])

  const [n_documento, setN_documento] = useState('')
  const [tipodedocumento, setTipodedocumento] = useState('')
  const [primernombre, setPrimernombre] = useState('')
  const [segundonombre, setSegundonombre] = useState('')
  const [primerapellido, setPrimerapellido] = useState('')
  const [segundoapellido, setSegundoapellido] = useState('')
  const [correoelectronico, setCorreoelectronico] = useState('')
  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState('')
  const [nombre, setNombre] = useState('')

  const [esRazonsocial, setEsRazonsocial] = useState('NO');

  const [edit, setEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    getData();
  }, []);

  const cleanData = () => {

    setClientes('')
    setN_documento('')
    setTipodedocumento('')
    setPrimernombre('')
    setSegundonombre('')
    setPrimerapellido('')
    setSegundoapellido('')
    setCorreoelectronico('')
    setDireccion('')
    setTelefono('')
    setNombre('')
    setEdit(false);

  }


  const getData = async () => {
    const { data } = await axios.get("http://localhost:4000/clientes/listar");
    setClientes(data.clientes);
  };

  const saveClientes = async () => {
    try {
      const newClientes = {
        n_documento,
        tipodedocumento,
        primernombre,
        segundonombre,
        primerapellido,
        segundoapellido,
        correoelectronico,
        direccion,
        telefono,
        nombre
      }
      await axios.post('http://localhost:4000/clientes/add', newClientes);
      cleanData();
      getData();


      Swal.fire({
        icon: 'success',
        title: 'El Cliente a sido registrado exitosamente',
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
      console.log('error en saveCliente', error.message);

    }
  }

  const updateClientes = async () => {
    try {
      const id = localStorage.getItem('id');
      const updateClientes = {
        n_documento,
        tipodedocumento,
        primernombre,
        segundonombre,
        primerapellido,
        segundoapellido,
        correoelectronico,
        direccion,
        telefono,
        nombre
      }
      const { data } = await axios.put('http://localhost:4000/clientes/update' + id, updateClientes);
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
      console.log('error en saveCliente', error.message);
    }
  }


  const editData = (item) => {

    setEdit(true);
    setTipodedocumento(item.tipodedocumento || '')
    setN_documento(item.n_documento || '')
    setPrimernombre(item.primernombre || '')
    setSegundonombre(item.segundonombre || '')
    setPrimerapellido(item.primerapellido || '')
    setSegundoapellido(item.segundoapellido || '')
    setCorreoelectronico(item.correoelectronico || '')
    setDireccion(item.direccion || '')
    setTelefono(item.telefono || '')
    setNombre(item.nombre || '')

    localStorage.setItem('id', item._id)
    setIsModalOpen(true);
  }


  const closeModal = () => {
    setIsModalOpen(false);
  };



  const deleteClientes = async (id) => {
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
          const { data } = await axios.delete('http://localhost:4000/clientes/delete/' + id);
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
      console.log('error en deleteClientes', error.message);
    }
  }

  const actions = async (e) => {
    e.preventDefault();
    edit ? updateClientes() : saveClientes();
  };

  const handleEsRazonsocialChange = (e) => {
    setEsRazonsocial(e.target.value);
  };

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
                <h5 className="modal-title" id="staticBackdropLabel">Registro de Clientes</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" >
                </button>
              </div>

              <div className="modal-body">

                <form id='clienteForm' onSubmit={actions}>
                  <div className="row g-3">

                    <div className="col-md-6 ">
                      <label
                        htmlFor="inputEmail4"
                        className="form-label">Tipo de Documento </label>
                      <select
                        className="form-select form-select-sm border border-dark"
                        id="tipoDocumento"
                        name="tipoDocumento"
                        aria-label="Ejemplo de .form-select-sm"
                        value={tipodedocumento} // Establece el valor seleccionado en el atributo "value"
                        onChange={(e) => setTipodedocumento(e.target.value)}
                        required
                      >
                        <option value="">Seleccione uno</option>
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="TI">Tarjeta de Identidad</option>
                        <option value="PA">Número de Pasaporte</option>
                        <option value="RS">Razón Social</option>
                      </select>

                    </div>

                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">Numero Documento </label>
                      <input
                        type="number"
                        className="form-control border border-dark"
                        id='n_documento'
                        value={n_documento} onChange={(e) => setN_documento(e.target.value.toUpperCase())} required />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="esRazonsocial" className="form-label">Es Razon social</label>
                      <select className="form-select border border-dark"
                        id="esRazonsocial" value={esRazonsocial} onChange={handleEsRazonsocialChange} required>
                        <option defaultValue disabled value="">Elige...</option>
                        <option value="SI">SI</option>
                        <option value="NO">NO</option>
                      </select>
                      <div className="invalid-feedback">Selecciona un estado válido.</div>
                    </div>

                    {esRazonsocial === 'SI' && (
                      <>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="nombre" className="form-label">Nombre</label>
                          <input type="text" className="form-control border border-dark" id="nombre"
                            value={nombre} onChange={(e) => setNombre(e.target.value.toUpperCase())} />
                        </div>
                      </>
                    )}



                    <div className="col-md-6">
                      <label htmlFor="primernombre" className="form-label">Primer nombre </label>
                      <input type="text" className="form-control border border-dark"
                        value={primernombre} onChange={(e) => setPrimernombre(e.target.value.toUpperCase())} required />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="segundonombre" className="form-label">Segundo nombre </label>
                      <input type="text" className="form-control border border-dark"
                        value={segundonombre} onChange={(e) => setSegundonombre(e.target.value.toUpperCase())} />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="primerapellido" className="form-label">Primer apellido </label>
                      <input type="text" className="form-control border border-dark"
                        value={primerapellido} onChange={(e) => setPrimerapellido(e.target.value.toUpperCase())} required />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="segundoapellido" className="form-label">Segundo apellido </label>
                      <input type="text" className="form-control border border-dark"
                        value={segundoapellido} onChange={(e) => setSegundoapellido(e.target.value.toUpperCase())} required />
                    </div>


                    <div className="col-md-6">
                      <label htmlFor="correoelectronico" className="form-label">Correo electronico </label>
                      <input type="email" className="form-control border border-dark"
                        value={correoelectronico} onChange={(e) => setCorreoelectronico(e.target.value.toUpperCase())} required />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="direccion" className="form-label">Direccion </label>
                      <input type="text" className="form-control border border-dark"
                        value={direccion} onChange={(e) => setDireccion(e.target.value.toUpperCase())} />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="telefono" className="form-label">Telefono </label>
                      <input type="number" className="form-control border border-dark" id="telefono"
                        value={telefono} onChange={(e) => setTelefono(e.target.value.toUpperCase())} />
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
                      <button type="submit" className="btn btn-primary">Guardar Registro</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/*Inicio de la tabla */}

      <div className='container container-flex card Larger shadow p-0 mb-15 bg-body rounded'>
        <div className='container'>
          <h4 className="text-danger fw-bold m-0 mt-2 text-center"> Clientes</h4>
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
                    <th scope="col" className="responsive-text">#</th>
                    <th scope="col" className="responsive-text">Tipo</th>
                    <th scope="col" className="responsive-text">Documento</th>
                    <th scope="col" className="responsive-text">Primer nombre</th>
                    <th scope="col" className="responsive-text">Primer apellido</th>
                    <th scope="col" className="responsive-text">Correo electrónico</th>
                    <th scope="col" className="responsive-text">Teléfono</th>
                    <th scope="col" className='responsive-text'>Razón Social</th>
                    <th scope="col" className="responsive-text">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(clientes) && clientes.map((item, i) => (
                    <tr key={item._id}>
                      <td className="responsive-text">{i + 1}</td>
                      <td className="responsive-text">{item.tipodedocumento}</td>
                      <td className="responsive-text">{item.n_documento}</td>
                      <td className="responsive-text">{item.primernombre}</td>
                      <td className="responsive-text">{item.primerapellido}</td>
                      <td className="responsive-text">{item.correoelectronico}</td>
                      <td className="responsive-text">{item.telefono}</td>
                      <td className='responsive-text'>{item.nombre}</td>
                      <td>
                        <div className="btn-group btn-group-sm" role="group">
                          <span className='btn btn-primary d-flex align-items-center me-2'
                            onClick={() => editData(item)}>
                            <i className="fa-solid fa-pencil space-i"></i>
                          </span>
                          <span className='btn btn-danger d-flex align-items-center'
                            onClick={() => deleteClientes(item._id)}>
                            <i className="fa-solid fa-trash"></i>
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
          <div className='container d-md-none'>
            {Array.isArray(clientes) && clientes.map((item, i) => (
              <div key={item._id} className="card border-3 mt-2">
                {/* Contenido de la tarjeta */}
                <div className='card-body'>
                  <h5 className='card-title'>Clientes {i + 1}</h5>
                  <p className='card-text'>
                    <strong>Tipo de documento:</strong> {item.tipodedocumento}<br />
                    <strong>Numero de documento:</strong> {item.n_documento}<br />
                    <strong>Primer nombre:</strong> {item.primernombre}<br />
                    <strong>Segundo nombre:</strong> {item.segundonombre}<br />
                    <strong>Primer apellido:</strong> {item.primerapellido}<br />
                    <strong>Segundo apellido:</strong> {item.segundoapellido}<br />
                    <strong>correo electronico:</strong> {item.correoelectronico}<br />
                    <strong>Direccion:</strong> {item.direccion}
                    <strong>Telefono:</strong> {item.telefono}
                    <strong>Razon social:</strong>{item.nombre}
                  </p>
                  <div className='btn-group btn-group-xl '>
                    <span className='btn btn-primary d-flex align-items-center me-2 '
                      onClick={() => editData(item)}>
                      <i className="fa-solid fa-pencil space-i"></i>
                    </span>
                    <span className='btn btn-danger d-flex align-items-center'
                      onClick={() => deleteClientes(item._id)}
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


  )
}

export default Clientes