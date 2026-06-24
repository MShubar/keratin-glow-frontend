import { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

const Services = lazy(() => import('./components/Services'));
const Pricing = lazy(() => import('./components/Pricing'));
const About = lazy(() => import('./components/About'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Analytics = lazy(() =>
  import('@vercel/analytics/react').then((m) => ({ default: m.Analytics }))
);
const SpeedInsights = lazy(() =>
  import('@vercel/speed-insights/react').then((m) => ({ default: m.SpeedInsights }))
);

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Analytics />
        <SpeedInsights />
      </Suspense>
      <Router>
        <div className="App">
          <Header />
          <Hero />
          <Suspense fallback={null}>
            <Services />
            <Pricing />
            <About />
            <FAQ />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
