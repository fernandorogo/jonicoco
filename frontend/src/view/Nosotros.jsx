import React from 'react'
import Jonicoco1 from "../images/Jonicoco1.jpeg";
import Jonicoco2 from "../images/Jonicoco6.jpeg";
import Jonicoco3 from "../images/Jonicoco5.jpeg";

import { Card, CardHeader, CardBody, Box, Text, Heading, Image, } from '@chakra-ui/react'

const Nosotros = () => {
  return (

    <div>

<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Jonicoco3} className="d-block w-100" alt="Jonnicoco3"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Jonicoco1} className="d-block w-100" alt="Jonicoco1"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Jonicoco2} className="d-block w-100" alt="jonicoco2"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className='mt-5'>
<p className="d-inline-flex gap-1">
  <a className="btn btn-danger" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Vision</a>
  <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Mision</button>
  <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Mostrar ambos</button>
</p>
<div className="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card card-body">
      En  un  futuro  se  plantea  que  Jonicoco este  presente  en  almacenes  de cadena  del  pais,  que  pueda  atreaer al  visitante  en  aeropuertos  y terminales.
      </div>
    </div>
  </div>
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample2">
      <div className="card card-body">
        Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div>
</div>

<h2 className='text-aligin-center'>NUESTROS PRODUCTOS</h2>


      <div class="card-group" style={{ padding: '' }}>

        <div class="card border-danger">
          <img src={Jonicoco1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-danger">Artesanias realizadas en cocococ</h5>
            <p class="card-text">Con el producto restante tal como la cascara del coco, realizamos artesanias de excelente calidad asi dandole un buen uso a todo nuestro material primario</p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card  border-danger">
          <img src={Jonicoco2} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-danger">Ingredientes de alta calidad</h5>
            <p class="card-text">Jonicoco pretende Fabricar una excelente mezcla natural de panela y coco, para obtener un producto de alta calidad, buen precio y sabor. </p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card border-danger">
          <img src={Jonicoco3} class="card-img-top " alt="..." />
          <div class="card-body">
            <h5 class="card-title text-danger">Entrando en el comercio local</h5>
            <p class="card-text">Acompañar las panelitas con una deliciosa mazamorra pilada y prestar un excelente servicio en el local comercial.</p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
      </div>
      
      {/*inicio de carta*/}

      <div className='Titulo' style={{ width: "100%", padding: "30px" }}><h2>Encargados de la empresa</h2></div>

      <div className='nombres' style={{ display: "flex", flexDirection: "row", margin: "20px" }}>


        <div className='container' style={{ width: "30%", border: "2px solid #ddd", boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}>
          <h2>Encargados de la empresa</h2>
          <Card maxW='md'>
            <CardHeader>
              <img src="https://bit.ly/sage-adebayo" alt="" style={{ borderRadius: "50%", width: "15%" }} />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>

            </CardHeader>
            <CardBody>
              <Text>
                With Chakra UI, I wanted to sync the speed of development with the speed
                of design. I wanted the developer to be just as excited as the designer to
                create a screen.
              </Text>
            </CardBody>
            <Image
              objectFit='cover'
              src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Chakra UI'
            />


          </Card>
        </div>
        <div className='container' style={{ padding: "20px", width: "30%", border: "2px solid #ddd", boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}>
          <h2>Encargados de la empresa</h2>
          <Card maxW='md'>
            <CardHeader>
              <img src="https://bit.ly/sage-adebayo" alt="" style={{ borderRadius: "50%", width: "15%" }} />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>

            </CardHeader>
            <CardBody>
              <Text>
                With Chakra UI, I wanted to sync the speed of development with the speed
                of design. I wanted the developer to be just as excited as the designer to
      
              </Text>
            </CardBody>
            <Image
              objectFit='cover'
              src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Chakra UI'
            />
          </Card>
        </div>
      </div>

    </div>

  )
}

export default Nosotros