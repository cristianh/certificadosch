import './App.css'
import { Certificados } from './componentes/Certificados'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Proyectos } from './componentes/Proyectos';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Certificados />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
