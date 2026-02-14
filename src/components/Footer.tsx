import { motion } from 'framer-motion';

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const }
        }
    };

    return (
        <footer style={{
            backgroundColor: 'var(--secondary)',
            color: 'var(--white)',
            padding: '5rem 0 2rem',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Decorative accent line */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, var(--primary), var(--primary-dark), var(--primary))',
            }} />

            <div className="container">
                <motion.div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 1fr 1fr',
                        gap: '4rem',
                        marginBottom: '3rem',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        paddingBottom: '3rem'
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Brand column - takes 2fr for more breathing room */}
                    <motion.div variants={itemVariants}>
                        <h3 style={{
                            fontSize: '1.6rem',
                            fontWeight: '800',
                            marginBottom: '1.25rem',
                            letterSpacing: '-0.025em',
                        }}>
                            VIVIDHA<span style={{ color: 'var(--primary)' }}>CONSTRUCTIONS</span>
                        </h3>
                        <p style={{
                            color: '#9ca3af',
                            lineHeight: '1.7',
                            fontSize: '0.95rem',
                            maxWidth: '320px',
                        }}>
                            Building the future with quality, integrity, and innovation. Your trusted partner in construction excellence.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 style={{
                            marginBottom: '1.5rem',
                            fontWeight: '600',
                            color: 'var(--primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontSize: '0.85rem',
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="footer-link">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h4 style={{
                            marginBottom: '1.5rem',
                            fontWeight: '600',
                            color: 'var(--primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontSize: '0.85rem',
                        }}>
                            Services
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: '#9ca3af' }}>
                            <li>Residential</li>
                            <li>Commercial</li>
                            <li>Renovation</li>
                            <li>Architecture</li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h4 style={{
                            marginBottom: '1.5rem',
                            fontWeight: '600',
                            color: 'var(--primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontSize: '0.85rem',
                        }}>
                            Contact
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: '#9ca3af' }}>
                            <li style={{ lineHeight: 1.6 }}>Mysuru, Karnataka</li>
                            <li>+91 88809 99726</li>
                            <li style={{ fontSize: '0.88rem' }}>info@vividhaconstructions.com</li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: '#6b7280',
                        fontSize: '0.88rem',
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p>&copy; {new Date().getFullYear()} Vividha Constructions. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" className="footer-link" style={{ fontSize: '0.85rem' }}>Privacy Policy</a>
                        <a href="#" className="footer-link" style={{ fontSize: '0.85rem' }}>Terms of Service</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
