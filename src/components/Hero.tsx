import { MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { MAPS_URL, SITE_TAGLINE, WHATSAPP_URL } from '../config/site';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.img
          src="/logo.png"
          alt="Keratin Glow Bahrain"
          className="hero-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Keratin Treatment & Hair Salon in Bahrain
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {SITE_TAGLINE}
        </motion.p>
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Professional keratin, nanoplasty & hair coloring in Janabiyah, Bahrain. <br />
          Book your appointment on WhatsApp today.
        </motion.p>
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} />
            Book on WhatsApp
          </motion.a>
          <motion.a 
            href={MAPS_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin size={20} />
            Find Us
          </motion.a>
        </motion.div>
      </div>
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
