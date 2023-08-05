import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Contactenos from './view/Contactenos';
import Home from './view/Home';
import Nosotros from './view/Nosotros';
import Resena from './view/Resena';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='nosotros' element={<Nosotros/>}/>
        <Route path='resena' element={<Resena/>}/>
        <Route path='contactenos' element={<Contactenos/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
