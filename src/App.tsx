import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Portafolio from './pages/Portafolio';
import Fotografia from './pages/portafolio/Fotografia';
import Diseno from './pages/portafolio/Diseno';
import Audiovisual from './pages/portafolio/Audiovisual';
import Equipo from './pages/Equipo';
import Contacto from './pages/Contacto';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/portafolio" element={<Portafolio />}>
              <Route index element={<Navigate to="fotografia" replace />} />
              <Route path="fotografia" element={<Fotografia />} />
              <Route path="diseno" element={<Diseno />} />
              <Route path="audiovisual" element={<Audiovisual />} />
            </Route>
            <Route path="/nuestro-equipo" element={<Equipo />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
