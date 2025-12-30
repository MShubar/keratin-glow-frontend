import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Scroll to top first
    window.scrollTo(0, 0);
    // Small delay to ensure scroll completes before animations start
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <div className="App" style={{ minHeight: '100vh' }} />;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
