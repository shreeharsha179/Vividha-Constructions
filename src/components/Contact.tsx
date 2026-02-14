import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const inputStyle = (field: string) => ({
        width: '100%',
        padding: '0.875rem 1rem 0.875rem 3rem',
        borderRadius: '10px',
        border: `2px solid ${focusedField === field ? 'var(--primary)' : '#e5e7eb'}`,
        outline: 'none',
        fontSize: '0.95rem',
        backgroundColor: focusedField === field ? '#fffbeb' : '#f9fafb',
        transition: 'all 0.3s ease',
        fontFamily: 'inherit',
    });

    const iconStyle: React.CSSProperties = {
        position: 'absolute',
        left: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '1.1rem',
        color: 'var(--text-light)',
        pointerEvents: 'none',
    };

    const contactItems = [
        {
            icon: '📍',
            title: 'Visit Our Office',
            detail: 'Vividha Constructions, Mysuru, Karnataka',
        },
        {
            icon: '📧',
            title: 'Email Us',
            detail: 'info@vividhaconstructions.com',
        },
        {
            icon: '📞',
            title: 'Call Us',
            detail: '+91 88809 99726',
        },
        {
            icon: '🕐',
            title: 'Working Hours',
            detail: 'Mon - Sat: 9:00 AM - 6:00 PM',
        },
    ];

    return (
        <section
            id="contact"
            style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative circles */}
            <div style={{
                position: 'absolute',
                top: '-80px',
                right: '-80px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-60px',
                left: '-60px',
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(31,41,55,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '3.5rem' }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Ready to start your dream project? Reach out and let's build something extraordinary together.
                    </p>
                </motion.div>

                <motion.div
                    className="contact-grid"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    {/* Left panel - Contact Info (dark) */}
                    <div
                        style={{
                            background: 'linear-gradient(145deg, var(--secondary) 0%, #111827 100%)',
                            padding: '3rem 2.5rem',
                            color: 'var(--white)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Decorative accent */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '4px',
                            background: 'linear-gradient(90deg, var(--primary), var(--primary-dark))',
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '-50px',
                            right: '-50px',
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            background: 'rgba(245, 158, 11, 0.07)',
                        }} />

                        <div>
                            <motion.h3
                                style={{
                                    fontSize: '1.75rem',
                                    fontWeight: '700',
                                    marginBottom: '0.75rem',
                                    lineHeight: 1.2,
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Let's Build<br />
                                <span style={{ color: 'var(--primary)' }}>Something Great</span>
                            </motion.h3>
                            <motion.p
                                style={{
                                    color: '#9ca3af',
                                    lineHeight: 1.7,
                                    marginBottom: '2.5rem',
                                    fontSize: '0.95rem',
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Transform your vision into reality with our expert construction services.
                            </motion.p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                                {contactItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '1rem',
                                        }}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    >
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: 'rgba(245, 158, 11, 0.12)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.2rem',
                                            flexShrink: 0,
                                        }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 style={{
                                                fontWeight: '600',
                                                marginBottom: '0.2rem',
                                                fontSize: '0.95rem',
                                                color: 'var(--white)',
                                            }}>
                                                {item.title}
                                            </h4>
                                            <p style={{
                                                color: '#9ca3af',
                                                fontSize: '0.88rem',
                                                lineHeight: 1.5,
                                            }}>
                                                {item.detail}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>


                    </div>

                    {/* Right panel - Form */}
                    <div
                        style={{
                            backgroundColor: 'var(--white)',
                            padding: '3rem 2.5rem',
                        }}
                    >
                        <motion.h3
                            style={{
                                fontSize: '1.4rem',
                                fontWeight: '700',
                                color: 'var(--secondary)',
                                marginBottom: '0.5rem',
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            Send Us a Message
                        </motion.h3>
                        <motion.p
                            style={{
                                color: 'var(--text-light)',
                                fontSize: '0.9rem',
                                marginBottom: '2rem',
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.35 }}
                        >
                            Fill the form below and we'll get back to you within 24 hours.
                        </motion.p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {/* Name & Email row */}
                            <div className="form-row">
                                <motion.div
                                    style={{ position: 'relative' }}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                >
                                    <span style={iconStyle}>👤</span>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        style={inputStyle('name')}
                                    />
                                </motion.div>

                                <motion.div
                                    style={{ position: 'relative' }}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.45 }}
                                >
                                    <span style={iconStyle}>✉️</span>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        style={inputStyle('email')}
                                    />
                                </motion.div>
                            </div>

                            {/* Phone */}
                            <motion.div
                                style={{ position: 'relative' }}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                            >
                                <span style={iconStyle}>📱</span>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    onFocus={() => setFocusedField('phone')}
                                    onBlur={() => setFocusedField(null)}
                                    style={inputStyle('phone')}
                                />
                            </motion.div>

                            {/* Message */}
                            <motion.div
                                style={{ position: 'relative' }}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.55 }}
                            >
                                <span style={{
                                    ...iconStyle,
                                    top: '1rem',
                                    transform: 'none',
                                }}>💬</span>
                                <textarea
                                    placeholder="Tell us about your project..."
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    style={{
                                        ...inputStyle('message'),
                                        resize: 'vertical' as const,
                                        minHeight: '120px',
                                    }}
                                />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    marginTop: '0.5rem',
                                    padding: '1rem 2rem',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    borderRadius: '10px',
                                    width: '100%',
                                    letterSpacing: '0.02em',
                                }}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message →
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
