import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Contactenos from './view/Contactenos';
import Home from './view/Home';
import Login from "./view/Login";
import Nosotros from './view/Nosotros';
import Resena from './view/Resena';
import Tienda from './view/Tienda';

//import Usuario from './view/Usuario';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='nosotros' element={<Nosotros/>}/>
      <Route path='resena' element={<Resena/>}/>
      <Route path='contactenos' element={<Contactenos/>}/>
      <Route path='tienda' element={<Tienda/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path="*" element={<h1>Not found - No insista tienes una pagina que no existe</h1>} />
     </Routes>

     
    </div>
  );
}

export default App;
