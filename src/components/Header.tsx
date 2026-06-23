import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './Header.css';

const navItems = ['home', 'services', 'pricing', 'about', 'faq', 'contact'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const wasMenuOpen = isMenuOpen;
    setIsMenuOpen(false);

    const scroll = () => {
      const element = document.getElementById(id);
      const header = document.querySelector('.header');
      if (!element || !header) return;

      const headerHeight = header.getBoundingClientRect().height;
      const offset = 16;
      const top =
        element.getBoundingClientRect().top + window.scrollY - headerHeight - offset;

      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    };

    // Wait for mobile drawer to close before scrolling
    window.setTimeout(scroll, wasMenuOpen ? 320 : 0);
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.img 
            src="/logo.png" 
            alt="Keratin Glow Bahrain" 
            className="logo-img"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item}`} 
              onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.1, color: '#d4af37' }}
            >
              {item === 'faq' ? 'FAQ' : item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </nav>

        <motion.button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
