const Services = () => {
    const services = [
        {
            title: 'Residential Construction',
            description: 'Building custom dream homes with precision and care, from foundation to finish.',
            icon: '🏠',
        },
        {
            title: 'Commercial Projects',
            description: 'Scalable and durable construction solutions for businesses, offices, and retail spaces.',
            icon: '🏢',
        },
        {
            title: 'Renovation & Remodeling',
            description: 'Transforming existing spaces into modern, functional, and aesthetic environments.',
            icon: '🔨',
        },
    ];

    return (
        <section id="services" style={{ backgroundColor: '#f9fafb' }}>
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">Comprehensive construction solutions tailored to meet your unique needs.</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                }}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'var(--white)',
                                padding: '2rem',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--secondary)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-light)' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
