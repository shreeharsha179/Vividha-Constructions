

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--secondary)', color: 'var(--white)', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem',
                    borderBottom: '1px solid var(--secondary-light)',
                    paddingBottom: '3rem'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
                            VIVIDHA<span style={{ color: 'var(--primary)' }}>CONSTRUCTIONS</span>
                        </h3>
                        <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
                            Building the future with quality, integrity, and innovation. Your trusted partner in construction excellence.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', fontWeight: '600' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} style={{ color: '#d1d5db', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', fontWeight: '600' }}>Services</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#d1d5db' }}>
                            <li>Residential</li>
                            <li>Commercial</li>
                            <li>Renovation</li>
                            <li>Architecture</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', fontWeight: '600' }}>Follow Us</h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {/* Social placeholders */}
                            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(social => (
                                <a key={social} href="#" style={{ color: '#d1d5db' }}>{social}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} Vividha Constructions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
