import { useState, useEffect } from 'react';


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
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(31, 41, 55, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        padding: isScrolled ? '0.5rem 0' : '1rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--white)', letterSpacing: '-0.025em', textTransform: 'uppercase' }}>
          VIVIDHA<span style={{ color: 'var(--primary)' }}>CONSTRUCTIONS</span>
        </a>

        <nav>
          <ul style={{ display: 'flex', gap: '2rem' }}>
            {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: 'var(--white)',
                    fontWeight: '500',
                    fontSize: '0.95rem',
                    opacity: 0.9,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white)')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
          Get Quote
        </a>
      </div>
    </header>
  );
};

export default Header;
