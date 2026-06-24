import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Router>
        <div className="App">
          <Header />
          <Hero />
          <Services />
          <Pricing />
          <About />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
