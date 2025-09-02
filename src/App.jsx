import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AMR from './pages/AMR/AMR';
import Industries from './pages/Industries/Industries';
import Services from './pages/Services/Services';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/amr" element={<AMR />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/nosotros" element={<div style={{padding: '100px 20px', textAlign: 'center'}}><h1>Página Nosotros</h1><p>En construcción...</p></div>} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/productos" element={<div style={{padding: '100px 20px', textAlign: 'center'}}><h1>Página Productos</h1><p>En construcción...</p></div>} />
            <Route path="/galeria" element={<div style={{padding: '100px 20px', textAlign: 'center'}}><h1>Página Galería</h1><p>En construcción...</p></div>} />
            <Route path="/contacto" element={<div style={{padding: '100px 20px', textAlign: 'center'}}><h1>Página Contacto</h1><p>En construcción...</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
