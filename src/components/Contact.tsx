import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" style={{ backgroundColor: '#f3f4f6' }}>
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Ready to start your project? Contact us today for a free consultation.</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    backgroundColor: 'var(--white)',
                    padding: '3rem',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Contact Information</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Our Office</h4>
                                <p style={{ color: 'var(--text-light)' }}>Vividha Constructions, Mysuru, Karnataka</p>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Email Us</h4>
                                <p style={{ color: 'var(--text-light)' }}>info@vividhaconstructions.com</p>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Call Us</h4>
                                <p style={{ color: 'var(--text-light)' }}>+91 88809 99726</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '6px',
                                    border: '1px solid #d1d5db',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '6px',
                                    border: '1px solid #d1d5db',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                            <textarea
                                required
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '6px',
                                    border: '1px solid #d1d5db',
                                    outline: 'none'
                                }}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
