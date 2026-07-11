import { MessageCircle, Instagram, MapPin } from 'lucide-react';
import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_URL,
} from '../config/site';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img src="/logo-sm.webp" alt="Keratin Glow Bahrain" className="footer-logo" width={72} height={72} />
          <p className="footer-tagline">
            Bahrain&apos;s trusted hair salon for keratin treatments, nanoplasty, balayage, and
            professional hair coloring in Janabiyah.
          </p>
          <p className="footer-tagline-ar" lang="ar" dir="rtl">
            صالون شعر موثوق في البحرين — علاجات الكيراتين والنانوبلاستي والصبغة والبالياج
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <nav aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#results">Results</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} />
            {PHONE_DISPLAY}
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            <MapPin size={16} />
            {ADDRESS.display}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <Instagram size={16} />
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {year} {SITE_NAME}. All rights reserved. |{' '}
            <a href={SITE_URL}>{SITE_URL.replace('https://', '')}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
