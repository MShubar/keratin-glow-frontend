import { useEffect, useState, type CSSProperties } from 'react';
import { MessageCircle, MapPin } from 'lucide-react';
import { MAPS_URL, WHATSAPP_URL } from '../config/site';
import './Hero.css';

const PARTICLE_COUNT = 8;

const Hero = () => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const enableParticles = () => setShowParticles(true);

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(enableParticles, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(enableParticles, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <img
          src="/hero-logo.webp"
          alt="Keratin Glow Bahrain"
          className="hero-logo"
          width={180}
          height={180}
          fetchPriority="high"
          decoding="async"
        />
        <h1 className="hero-title">
          Keratin Treatment & Hair Salon in Bahrain
        </h1>
        <p className="hero-description hero-fade-in hero-fade-in-1">
          Professional keratin, nanoplasty & hair coloring in Janabiyah, Bahrain.
          <br />
          Book your appointment on WhatsApp today.
        </p>
        <div className="hero-buttons hero-fade-in hero-fade-in-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle size={20} />
            Book on WhatsApp
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <MapPin size={20} />
            Find Us
          </a>
        </div>
      </div>

      {showParticles && (
        <div className="particles" aria-hidden="true">
          {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
            <span key={i} className="particle" style={{ '--i': i } as CSSProperties} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
