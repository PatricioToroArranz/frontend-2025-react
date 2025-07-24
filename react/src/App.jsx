
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Servicios from './pages/Servicios';
import Contactenos from './pages/Contactenos';
import './App.css';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contactenos" element={<Contactenos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
