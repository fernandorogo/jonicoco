import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Inicio = () => {
  return (
    <div>
      <Navbar />

      <div className=' container md mt-5'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small><button className="btn btn-danger" type="submit">Ordenar</button></small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small> <button className="btn btn-danger" type="submit">Ordenar</button></small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <small><button className="btn btn-danger" type="submit">Ordenar</button></small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <Footer />
      </div>

    </div>


  )
}

export default Inicio