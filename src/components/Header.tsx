import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img 
            src="/logo-sm.webp" 
            alt="Keratin Glow Bahrain" 
            className="logo-img"
            width={52}
            height={52}
          />
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
            >
              {item === 'faq' ? 'FAQ' : item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
