import { motion } from 'framer-motion';

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section id="services" style={{ backgroundColor: '#f9fafb' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">Comprehensive construction solutions tailored to meet your unique needs.</p>
                </motion.div>

                <motion.div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            style={{
                                backgroundColor: 'var(--white)',
                                padding: '2rem',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer',
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--secondary)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-light)' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
