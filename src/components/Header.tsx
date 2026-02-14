import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(31, 41, 55, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        padding: isScrolled ? '0.5rem 0' : '1rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.a
          href="#"
          style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--white)', letterSpacing: '-0.025em', textTransform: 'uppercase' }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          VIVIDHA<span style={{ color: 'var(--primary)' }}>CONSTRUCTIONS</span>
        </motion.a>

        <nav>
          <ul style={{ display: 'flex', gap: '2rem' }}>
            {['Home', 'Services', 'Projects', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.a
          href="#contact"
          className="btn btn-primary"
          style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Quote
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
