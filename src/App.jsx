import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ClickSpark from './components/ClickSpark';
import LightRays from './components/LightRays';

function App() {
  return (
    <ClickSpark
      sparkColor="#e0dace"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
    >
      <Router>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#e0dace"
            raysSpeed={1.2}
            lightSpread={1.8}
            rayLength={2.2}
            followMouse={true}
            mouseInfluence={0.2}
            noiseAmount={0.05}
          />
        </div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ClickSpark>
  );
}

export default App;
