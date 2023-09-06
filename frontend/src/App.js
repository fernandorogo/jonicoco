import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Aplication from './Dashboard/Aplication';
import Contactenos from './view/Contactenos';
import Home from './view/Home';
import Login from "./view/Login";
import Nosotros from './view/Nosotros';
import Resena from './view/Resena';
import Tienda from './view/Tienda';

//import Usuario from './view/Usuario';

function App() {
  const location = useLocation();

  // Verifica si la ruta actual corresponde a Aplication
  const isAplicationRoute = location.pathname.startsWith('/aplication');
  return (
    <div className="App">
       {!isAplicationRoute && <Navbar />} {/* Muestra el Navbar solo si no estás en una ruta de Aplication */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='nosotros' element={<Nosotros />} />
        <Route path='resena' element={<Resena />} />
        <Route path='contactenos' element={<Contactenos />} />
        <Route path='tienda' element={<Tienda />} />
        <Route path='login' element={<Login />} />
        <Route exact path="/aplication/*" element={<Aplication/>} />
        <Route path="*" element={<h1>Not found - No insista tienes una pagina que no existe</h1>} />
      </Routes>


    </div>
  );
}

export default App;
